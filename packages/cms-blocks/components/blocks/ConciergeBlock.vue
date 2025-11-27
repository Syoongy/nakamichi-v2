<script setup lang="ts">
interface Props {
    ctaTitle?: string
    ctaButton?: {
        label: string
        link: string
    }
    faqs: Array<{
        question: string
        answer: string
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="bg-neutral-900 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- CTA Side -->
                <div class="bg-neutral-800 rounded-xl p-10 flex flex-col justify-center items-start">
                    <h2 class="text-3xl font-bold mb-6 uppercase">{{ ctaTitle || 'Your Personal Guide to Home Theater'
                        }}</h2>
                    <p class="text-gray-400 mb-8">Considering a Nakamichi system? Our Concierge helps you find the
                        perfect fit.</p>
                    <Button v-if="ctaButton?.label" class="bg-orange-600 hover:bg-orange-700 text-white" as-child>
                        <NuxtLink :to="ctaButton.link || '#'">{{ ctaButton.label }}</NuxtLink>
                    </Button>
                </div>

                <!-- FAQ Side -->
                <div>
                    <h3 class="text-xl font-bold mb-6">Who is Nakamichi Concierge?</h3>
                    <Accordion type="single" collapsible class="w-full">
                        <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`"
                            class="border-neutral-700">
                            <AccordionTrigger class="text-left hover:no-underline hover:text-orange-500">{{ faq.question
                                }}</AccordionTrigger>
                            <AccordionContent class="text-gray-400">
                                {{ faq.answer }}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
</template>
