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
  ],
};
