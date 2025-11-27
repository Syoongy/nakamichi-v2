import type { Block } from 'payload'

export const ReviewCarouselBlock: Block = {
  slug: 'reviewCarousel',
  fields: [
    {
      name: 'reviews',
      type: 'relationship',
      relationTo: 'reviews',
      hasMany: true,
    },
  ],
}
