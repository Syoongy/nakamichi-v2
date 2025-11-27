import type { Block } from 'payload'

export const LogoGridBlock: Block = {
  slug: 'logoGrid',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'logos',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
  ],
}
