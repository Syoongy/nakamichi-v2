import type { Block } from 'payload'

export const ProductTabsBlock: Block = {
  slug: 'productTabs',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'tabs',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'products',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
        },
      ],
    },
  ],
}
