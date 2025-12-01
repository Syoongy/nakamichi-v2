<script setup lang="ts">
interface Props {
    items: Array<{
        image: any
        headline: string
        subheadline?: string
        buttonText?: string
        buttonLink?: string
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="bg-black text-white py-5">
        <div class="w-full mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div v-for="(item, index) in items" :key="index"
                    class="relative group overflow-hidden rounded-sm h-[500px]">
                    <img v-if="item.image?.url" :src="item.image.url" :alt="item.headline"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div
                        class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <h3 class="text-6xl font-display font-black tracking-tight mb-2">{{ item.headline }}</h3>
                        <p v-if="item.subheadline"
                            class="text-gray-300 text-4xl font-display font-black tracking-tight mb-6">
                            {{ item.subheadline }}
                        </p>
                        <Button v-if="item.buttonText && item.buttonLink" as-child class="w-fit">
                            <NuxtLink :to="item.buttonLink">{{ item.buttonText }}</NuxtLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
