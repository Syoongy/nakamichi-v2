<script setup lang="ts">
interface Props {
    headline: string
    subheadline?: string
    backgroundImage: any // Type depends on Payload media
    layout?: 'center' | 'left' | 'split'
    buttons?: Array<{
        label: string
        link: string
        variant?: 'default' | 'outline' | 'secondary'
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="relative h-[600px] flex items-center overflow-hidden bg-black text-white">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img v-if="backgroundImage?.url" :src="backgroundImage.url" :alt="backgroundImage.alt || headline"
                class="w-full h-full object-cover opacity-60" />
        </div>

        <div class="container relative z-10 mx-auto px-4">
            <div :class="['max-w-3xl', layout === 'center' ? 'mx-auto text-center' : '']">
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">{{ headline }}</h1>
                <p v-if="subheadline" class="text-xl md:text-2xl text-gray-200 mb-8">{{ subheadline }}</p>

                <div v-if="buttons" class="flex flex-wrap gap-4" :class="[layout === 'center' ? 'justify-center' : '']">
                    <Button v-for="(btn, index) in buttons" :key="index" :variant="btn.variant as any" as-child>
                        <NuxtLink :to="btn.link">{{ btn.label }}</NuxtLink>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>
