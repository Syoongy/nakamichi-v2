import type { Block } from 'payload'

export const NewsletterBlock: Block = {
  slug: 'newsletter',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subtext',
      type: 'textarea',
    },
  ],
}
