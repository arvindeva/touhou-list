/* Game */

export default {
  title: 'Game',
  name: 'game',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Number',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: false, // <-- Defaults to false
        metadata: ['location', 'palette', 'lqip', 'dimensions'],
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          isHighlighted: true, // <-- make this field easily accessible
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      liveEdit: true,
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
  orderings: [
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Number',
      name: 'numberAsc',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
};
