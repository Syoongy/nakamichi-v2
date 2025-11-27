<script setup lang="ts">
interface Props {
    headline: string
    subtext?: string
}
defineProps<Props>()
</script>
<template>
    <section class="bg-white text-black py-20">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            <div class="max-w-xl">
                <h2 class="text-4xl font-bold mb-4">{{ headline }}</h2>
                <p v-if="subtext" class="text-gray-600">{{ subtext }}</p>
            </div>

            <div class="w-full max-w-md">
                <div class="flex gap-2 mb-4">
                    <Input type="email" placeholder="Enter Your Email Address" class="bg-gray-100 border-gray-200" />
                </div>

                <div class="space-y-2 mb-6">
                    <div class="flex items-center space-x-2">
                        <Checkbox id="updates" />
                        <label for="updates"
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Receive Shockwafe Updates
                        </label>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Checkbox id="dragon" />
                        <label for="dragon"
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Receive DRAGON Updates
                        </label>
                    </div>
                </div>

                <Button class="w-full bg-orange-600 hover:bg-orange-700 text-white">Submit</Button>
                <p class="text-xs text-gray-400 mt-4">By submitting, you allow Nakamichi to process your information for
                    marketing purposes.
                </p>
            </div>
        </div>
    </section>
</template>
