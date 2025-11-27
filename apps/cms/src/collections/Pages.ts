import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { SplitContentBlock } from '../blocks/SplitContentBlock'
import { FeatureGridBlock } from '../blocks/FeatureGridBlock'
import { ProductTabsBlock } from '../blocks/ProductTabsBlock'
import { LogoGridBlock } from '../blocks/LogoGridBlock'
import { ReviewCarouselBlock } from '../blocks/ReviewCarouselBlock'
import { ConciergeBlock } from '../blocks/ConciergeBlock'
import { NewsletterBlock } from '../blocks/NewsletterBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        SplitContentBlock,
        FeatureGridBlock,
        ProductTabsBlock,
        LogoGridBlock,
        ReviewCarouselBlock,
        ConciergeBlock,
        NewsletterBlock,
      ],
    },
  ],
}
