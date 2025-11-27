<script setup lang="ts">
interface Props {
    title?: string
    logos: Array<{
        image: any
        name?: string
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="bg-neutral-950 border-y border-neutral-900 py-12">
        <div class="container mx-auto px-4">
            <h3 v-if="title" class="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">{{ title }}</h3>
            <div
                class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div v-for="(logo, index) in logos" :key="index" class="h-8 md:h-10">
                    <img v-if="logo.image?.url" :src="logo.image.url" :alt="logo.name"
                        class="h-full w-auto object-contain invert" />
                </div>
            </div>
        </div>
    </section>
</template>
