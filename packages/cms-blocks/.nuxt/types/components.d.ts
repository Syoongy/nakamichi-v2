
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'BlockRenderer': typeof import("../../components/BlockRenderer.vue")['default']
  'BlocksConciergeBlock': typeof import("../../components/blocks/ConciergeBlock.vue")['default']
  'BlocksFeatureGridBlock': typeof import("../../components/blocks/FeatureGridBlock.vue")['default']
  'BlocksHeroBlock': typeof import("../../components/blocks/HeroBlock.vue")['default']
  'BlocksLogoGridBlock': typeof import("../../components/blocks/LogoGridBlock.vue")['default']
  'BlocksNewsletterBlock': typeof import("../../components/blocks/NewsletterBlock.vue")['default']
  'BlocksProductTabsBlock': typeof import("../../components/blocks/ProductTabsBlock.vue")['default']
  'BlocksReviewCarouselBlock': typeof import("../../components/blocks/ReviewCarouselBlock.vue")['default']
  'BlocksSplitContentBlock': typeof import("../../components/blocks/SplitContentBlock.vue")['default']
  'HelloWorld': typeof import("../../../shadcn-layer/components/HelloWorld.vue")['default']
  'NuxtWelcome': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'Accordion': typeof import("../../../shadcn-layer/components/ui/accordion/index")['Accordion']
  'AccordionContent': typeof import("../../../shadcn-layer/components/ui/accordion/index")['AccordionContent']
  'AccordionItem': typeof import("../../../shadcn-layer/components/ui/accordion/index")['AccordionItem']
  'AccordionTrigger': typeof import("../../../shadcn-layer/components/ui/accordion/index")['AccordionTrigger']
  'Checkbox': typeof import("../../../shadcn-layer/components/ui/checkbox/index")['Checkbox']
  'Button': typeof import("../../../shadcn-layer/components/ui/button/index")['Button']
  'Sheet': typeof import("../../../shadcn-layer/components/ui/sheet/index")['Sheet']
  'SheetClose': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetClose']
  'SheetContent': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetContent']
  'SheetDescription': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetDescription']
  'SheetFooter': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetFooter']
  'SheetHeader': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetHeader']
  'SheetTitle': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetTitle']
  'SheetTrigger': typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetTrigger']
  'NavigationMenu': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenu']
  'NavigationMenuContent': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuContent']
  'NavigationMenuIndicator': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuIndicator']
  'NavigationMenuItem': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuItem']
  'NavigationMenuLink': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuLink']
  'NavigationMenuList': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuList']
  'NavigationMenuTrigger': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuTrigger']
  'NavigationMenuViewport': typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuViewport']
  'Card': typeof import("../../../shadcn-layer/components/ui/card/index")['Card']
  'CardAction': typeof import("../../../shadcn-layer/components/ui/card/index")['CardAction']
  'CardContent': typeof import("../../../shadcn-layer/components/ui/card/index")['CardContent']
  'CardDescription': typeof import("../../../shadcn-layer/components/ui/card/index")['CardDescription']
  'CardFooter': typeof import("../../../shadcn-layer/components/ui/card/index")['CardFooter']
  'CardHeader': typeof import("../../../shadcn-layer/components/ui/card/index")['CardHeader']
  'CardTitle': typeof import("../../../shadcn-layer/components/ui/card/index")['CardTitle']
  'Carousel': typeof import("../../../shadcn-layer/components/ui/carousel/index")['Carousel']
  'CarouselContent': typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselContent']
  'CarouselItem': typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselItem']
  'CarouselNext': typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselNext']
  'CarouselPrevious': typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselPrevious']
  'CarouselApi': typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselApi']
  'Tabs': typeof import("../../../shadcn-layer/components/ui/tabs/index")['Tabs']
  'TabsContent': typeof import("../../../shadcn-layer/components/ui/tabs/index")['TabsContent']
  'TabsList': typeof import("../../../shadcn-layer/components/ui/tabs/index")['TabsList']
  'TabsTrigger': typeof import("../../../shadcn-layer/components/ui/tabs/index")['TabsTrigger']
  'Input': typeof import("../../../shadcn-layer/components/ui/input/index")['Input']
  'NuxtPage': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
  'NoScript': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyBlockRenderer': LazyComponent<typeof import("../../components/BlockRenderer.vue")['default']>
  'LazyBlocksConciergeBlock': LazyComponent<typeof import("../../components/blocks/ConciergeBlock.vue")['default']>
  'LazyBlocksFeatureGridBlock': LazyComponent<typeof import("../../components/blocks/FeatureGridBlock.vue")['default']>
  'LazyBlocksHeroBlock': LazyComponent<typeof import("../../components/blocks/HeroBlock.vue")['default']>
  'LazyBlocksLogoGridBlock': LazyComponent<typeof import("../../components/blocks/LogoGridBlock.vue")['default']>
  'LazyBlocksNewsletterBlock': LazyComponent<typeof import("../../components/blocks/NewsletterBlock.vue")['default']>
  'LazyBlocksProductTabsBlock': LazyComponent<typeof import("../../components/blocks/ProductTabsBlock.vue")['default']>
  'LazyBlocksReviewCarouselBlock': LazyComponent<typeof import("../../components/blocks/ReviewCarouselBlock.vue")['default']>
  'LazyBlocksSplitContentBlock': LazyComponent<typeof import("../../components/blocks/SplitContentBlock.vue")['default']>
  'LazyHelloWorld': LazyComponent<typeof import("../../../shadcn-layer/components/HelloWorld.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyAccordion': LazyComponent<typeof import("../../../shadcn-layer/components/ui/accordion/index")['Accordion']>
  'LazyAccordionContent': LazyComponent<typeof import("../../../shadcn-layer/components/ui/accordion/index")['AccordionContent']>
  'LazyAccordionItem': LazyComponent<typeof import("../../../shadcn-layer/components/ui/accordion/index")['AccordionItem']>
  'LazyAccordionTrigger': LazyComponent<typeof import("../../../shadcn-layer/components/ui/accordion/index")['AccordionTrigger']>
  'LazyCheckbox': LazyComponent<typeof import("../../../shadcn-layer/components/ui/checkbox/index")['Checkbox']>
  'LazyButton': LazyComponent<typeof import("../../../shadcn-layer/components/ui/button/index")['Button']>
  'LazySheet': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['Sheet']>
  'LazySheetClose': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetClose']>
  'LazySheetContent': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetContent']>
  'LazySheetDescription': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetDescription']>
  'LazySheetFooter': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetFooter']>
  'LazySheetHeader': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetHeader']>
  'LazySheetTitle': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetTitle']>
  'LazySheetTrigger': LazyComponent<typeof import("../../../shadcn-layer/components/ui/sheet/index")['SheetTrigger']>
  'LazyNavigationMenu': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenu']>
  'LazyNavigationMenuContent': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuContent']>
  'LazyNavigationMenuIndicator': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuIndicator']>
  'LazyNavigationMenuItem': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuItem']>
  'LazyNavigationMenuLink': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuLink']>
  'LazyNavigationMenuList': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuList']>
  'LazyNavigationMenuTrigger': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
  'LazyNavigationMenuViewport': LazyComponent<typeof import("../../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuViewport']>
  'LazyCard': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['Card']>
  'LazyCardAction': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['CardAction']>
  'LazyCardContent': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['CardContent']>
  'LazyCardDescription': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['CardDescription']>
  'LazyCardFooter': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['CardFooter']>
  'LazyCardHeader': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['CardHeader']>
  'LazyCardTitle': LazyComponent<typeof import("../../../shadcn-layer/components/ui/card/index")['CardTitle']>
  'LazyCarousel': LazyComponent<typeof import("../../../shadcn-layer/components/ui/carousel/index")['Carousel']>
  'LazyCarouselContent': LazyComponent<typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselContent']>
  'LazyCarouselItem': LazyComponent<typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselItem']>
  'LazyCarouselNext': LazyComponent<typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselNext']>
  'LazyCarouselPrevious': LazyComponent<typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselPrevious']>
  'LazyCarouselApi': LazyComponent<typeof import("../../../shadcn-layer/components/ui/carousel/index")['CarouselApi']>
  'LazyTabs': LazyComponent<typeof import("../../../shadcn-layer/components/ui/tabs/index")['Tabs']>
  'LazyTabsContent': LazyComponent<typeof import("../../../shadcn-layer/components/ui/tabs/index")['TabsContent']>
  'LazyTabsList': LazyComponent<typeof import("../../../shadcn-layer/components/ui/tabs/index")['TabsList']>
  'LazyTabsTrigger': LazyComponent<typeof import("../../../shadcn-layer/components/ui/tabs/index")['TabsTrigger']>
  'LazyInput': LazyComponent<typeof import("../../../shadcn-layer/components/ui/input/index")['Input']>
  'LazyNuxtPage': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../../../node_modules/.bun/nuxt@4.2.1+5cce1919178aa9e9/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
