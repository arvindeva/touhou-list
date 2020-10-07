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
      title: 'Appearance',
      name: 'appearance',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'game' }],
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
