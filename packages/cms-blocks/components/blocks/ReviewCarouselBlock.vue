<script setup lang="ts">
import { Star } from 'lucide-vue-next'

interface Props {
    reviews: Array<{
        title: string
        rating: number
        content?: string
        author?: string
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="bg-black text-white py-20">
        <div class="container mx-auto px-4">
            <Carousel class="w-full max-w-5xl mx-auto" :opts="{ align: 'start', loop: true }">
                <CarouselContent>
                    <CarouselItem v-for="(review, index) in reviews" :key="index"
                        class="md:basis-1/2 lg:basis-1/3 pl-4">
                        <div class="p-1">
                            <Card class="bg-neutral-900 border-neutral-800 text-white h-full">
                                <div class="p-6 flex flex-col h-full">
                                    <div class="flex gap-1 text-star mb-4">
                                        <Star v-for="i in 5" :key="i"
                                            :class="{ 'fill-current': i <= review.rating, 'text-neutral-700': i > review.rating }"
                                            class="w-4 h-4" />
                                    </div>
                                    <h4 class="font-bold text-lg mb-2">{{ review.title }}</h4>
                                    <p class="text-gray-400 text-sm grow mb-4 line-clamp-4">{{ review.content }}
                                    </p>
                                    <p v-if="review.author" class="text-xs text-gray-500 font-bold uppercase">
                                        {{ review.author }}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700" />
                <CarouselNext class="bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700" />
            </Carousel>
        </div>
    </section>
</template>
