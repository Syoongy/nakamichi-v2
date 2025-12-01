<script setup lang="ts">
interface Props {
    title?: string
    tabs: Array<{
        label: string
        products: Array<any>
    }>
}
defineProps<Props>()
</script>
<template>
    <section class="bg-black text-white py-20">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-center mb-12">
                <h2 v-if="title" class="text-3xl font-bold uppercase flex items-center gap-2">
                    <span class="text-orange-500">▶</span> {{ title }} <span class="text-orange-500">◀</span>
                </h2>
            </div>

            <Tabs default-value="tab-0" class="w-full">
                <div class="flex justify-center mb-12">
                    <TabsList>
                        <TabsTrigger v-for="(tab, index) in tabs" :key="index" :value="`tab-${index}`"
                            class="uppercase px-8">
                            {{ tab.label }}
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent v-for="(tab, index) in tabs" :key="index" :value="`tab-${index}`">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card v-for="product in tab.products" :key="product.id"
                            class="bg-neutral-900 border-neutral-800 text-white overflow-hidden">
                            <div class="aspect-video bg-neutral-800 relative">
                                <img v-if="product.image?.url" :src="product.image.url" :alt="product.name"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
                                <p v-if="product.price" class="text-gray-200 mb-4">${{ product.price }}</p>
                            </div>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
            <div class="flex justify-center items-center">
                <Button variant="ghost" as-child class="mt-12">
                    <NuxtLink to="/products" class="px-8">View All Products</NuxtLink>
                </Button>
            </div>
        </div>
    </section>
</template>
