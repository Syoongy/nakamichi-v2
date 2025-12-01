<script setup lang="ts">
// In a real app, you might use a composable for this
const { data: pageData, error } = await useFetch('http://localhost:3000/api/pages', {
  query: {
    'where[slug][equals]': 'home'
  },
  transform: (data: any) => {
    const doc = data.docs?.[0]
    if (!doc) return null

    // Recursive function to fix image URLs
    const fixUrls = (obj: any): any => {
      if (Array.isArray(obj)) {
        return obj.map(fixUrls)
      } else if (typeof obj === 'object' && obj !== null) {
        const newObj: any = {}
        for (const key in obj) {
          if (key === 'url' && typeof obj[key] === 'string' && obj[key].startsWith('/')) {
            newObj[key] = `http://localhost:3000${obj[key]}`
          } else {
            newObj[key] = fixUrls(obj[key])
          }
        }
        return newObj
      }
      return obj
    }

    return fixUrls(doc)
  }
})

// Mock data for development if API is not reachable or returns empty
const mockBlocks = [
  {
    blockType: 'hero',
    headline: 'DRAGON Series',
    subheadline: 'Bass has never sounded this good.',
    backgroundImage: { url: 'https://placehold.co/1920x800/111/FFF?text=Dragon+Series' },
    layout: 'center',
    buttons: [
      { label: 'Shop DRAGON Series', link: '/shop/dragon', variant: 'default' },
      { label: 'Shop Shockwafe', link: '/shop/shockwafe', variant: 'outline' }
    ]
  },
  {
    blockType: 'featureGrid',
    title: 'Nothing Less Than The Best.',
    features: [
      { label: 'Pounding Bass', description: 'Feel the rumble', icon: { url: 'https://placehold.co/100x100/333/FFF?text=Bass' } },
      { label: 'Uncompromising Quality', description: 'Built to last', icon: { url: 'https://placehold.co/100x100/333/FFF?text=Quality' } },
      { label: 'Lifetime Support', description: 'We are here for you', icon: { url: 'https://placehold.co/100x100/333/FFF?text=Support' } },
      { label: '30-Day Returns', description: 'Risk free trial', icon: { url: 'https://placehold.co/100x100/333/FFF?text=Returns' } }
    ]
  }
]

const blocks = computed(() => {
  if (pageData.value?.layout) {
    return pageData.value.layout
  }
  // Fallback to mock data if no API result (for dev purposes as requested)
  return mockBlocks
})
</script>

<template>
  <main>
    <div v-if="error" class="p-4 bg-red-900/50 text-red-200 text-center">
      <p>Failed to fetch content from CMS. Showing mock data.</p>
      <p class="text-xs opacity-70">{{ error.message }}</p>
    </div>
    <BlockRenderer :blocks="blocks" />
  </main>
</template>
