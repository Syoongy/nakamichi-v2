<script setup lang="ts">
import HeroBlock from './blocks/HeroBlock.vue'
import SplitContentBlock from './blocks/SplitContentBlock.vue'
import FeatureGridBlock from './blocks/FeatureGridBlock.vue'
import ProductTabsBlock from './blocks/ProductTabsBlock.vue'
import LogoGridBlock from './blocks/LogoGridBlock.vue'
import ReviewCarouselBlock from './blocks/ReviewCarouselBlock.vue'
import ConciergeBlock from './blocks/ConciergeBlock.vue'
import NewsletterBlock from './blocks/NewsletterBlock.vue'

const props = defineProps<{
  blocks: any[]
}>()

const componentsMap: Record<string, any> = {
  hero: HeroBlock,
  splitContent: SplitContentBlock,
  featureGrid: FeatureGridBlock,
  productTabs: ProductTabsBlock,
  logoGrid: LogoGridBlock,
  reviewCarousel: ReviewCarouselBlock,
  concierge: ConciergeBlock,
  newsletter: NewsletterBlock,
}
</script>

<template>
  <div v-if="blocks && blocks.length">
    <template v-for="(block, index) in blocks" :key="block.id || index">
      <component
        :is="componentsMap[block.blockType]"
        v-if="componentsMap[block.blockType]"
        v-bind="block"
      />
      <div v-else class="p-4 bg-red-100 text-red-500 border border-red-300">
        Unknown block type: {{ block.blockType }}
      </div>
    </template>
  </div>
</template>
