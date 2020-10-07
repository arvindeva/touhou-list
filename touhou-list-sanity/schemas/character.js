/* Character */

export default {
  title: 'Character',
  name: 'character',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      title: 'Appearances',
      name: 'appearances',
      type: 'array',
      of: [
        {
          title: 'Appearance',
          name: 'appearance',
          type: 'object',
          fields: [
            {
              title: 'Game',
              name: 'game',
              type: 'reference',
              to: [{ type: 'game' }],
            },
            {
              title: 'As',
              name: 'as',
              type: 'array',
              of: [
                {
                  title: 'Role',
                  name: 'role',
                  type: 'string',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'game.title',
              as0: 'as.0',
              as1: 'as.1',
              as2: 'as.2',
              as3: 'as.3',
              media: 'game.cover',
            },
            prepare: ({ title, as0, as1, as2, as3, media }) => {
              const as = [as0, as1, as2].filter(Boolean);
              const subtitle = as.length > 0 ? `${as.join(', ')}` : '';
              const hasMoreAs = Boolean(as3);
              return {
                title,
                subtitle: hasMoreAs ? `${subtitle}…` : subtitle,
                media,
              };
            },
          },
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      liveEdit: true,
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
};
