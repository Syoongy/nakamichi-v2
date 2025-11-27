import type { Block } from 'payload'

export const SplitContentBlock: Block = {
  slug: 'splitContent',
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'headline',
          type: 'text',
          required: true,
        },
        {
          name: 'subheadline',
          type: 'text',
        },
        {
          name: 'buttonText',
          type: 'text',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
      ],
    },
  ],
}
