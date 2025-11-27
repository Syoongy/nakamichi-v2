<script setup lang="ts">
interface Props {
    title?: string
    features: Array<{
        icon?: any
        label: string
        description?: string
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="bg-neutral-950 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 v-if="title" class="text-3xl md:text-4xl font-bold mb-16 uppercase tracking-widest">{{ title }}</h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="(feature, index) in features" :key="index" class="flex flex-col items-center">
                    <div class="mb-4 h-12 w-12 flex items-center justify-center">
                        <img v-if="feature.icon?.url" :src="feature.icon.url" :alt="feature.label"
                            class="max-h-full max-w-full invert" />
                    </div>
                    <h4 class="text-sm font-bold uppercase tracking-wider mb-2">{{ feature.label }}</h4>
                    <p v-if="feature.description" class="text-xs text-gray-400">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
