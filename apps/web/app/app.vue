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
  <div class="min-h-screen bg-black text-white font-sans">
    <NuxtRouteAnnouncer />

    <!-- Header Placeholder -->
    <header
      class="border-b border-neutral-800 p-4 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur z-50">
      <div class="font-bold text-xl tracking-widest">NAKAMICHI</div>
      <nav class="hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-400">
        <a href="#" class="hover:text-white">Models</a>
        <a href="#" class="hover:text-white">Resources</a>
        <a href="#" class="hover:text-white">Support</a>
        <a href="#" class="hover:text-white">About Us</a>
      </nav>
      <div class="flex gap-4">
        <Button variant="ghost" size="icon">
          <span class="sr-only">Search</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </Button>
      </div>
    </header>

    <main>
      <div v-if="error" class="p-4 bg-red-900/50 text-red-200 text-center">
        <p>Failed to fetch content from CMS. Showing mock data.</p>
        <p class="text-xs opacity-70">{{ error.message }}</p>
      </div>
      <BlockRenderer :blocks="blocks" />
    </main>

    <!-- Footer Placeholder -->
    <footer class="bg-neutral-950 border-t border-neutral-900 py-12 text-center text-gray-500 text-sm">
      <p>&copy; 2025 Nakamichi USA. All rights reserved.</p>
    </footer>
  </div>
</template>
