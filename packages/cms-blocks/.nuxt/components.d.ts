
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


export const BlockRenderer: typeof import("../components/BlockRenderer.vue")['default']
export const BlocksConciergeBlock: typeof import("../components/blocks/ConciergeBlock.vue")['default']
export const BlocksFeatureGridBlock: typeof import("../components/blocks/FeatureGridBlock.vue")['default']
export const BlocksHeroBlock: typeof import("../components/blocks/HeroBlock.vue")['default']
export const BlocksLogoGridBlock: typeof import("../components/blocks/LogoGridBlock.vue")['default']
export const BlocksNewsletterBlock: typeof import("../components/blocks/NewsletterBlock.vue")['default']
export const BlocksProductTabsBlock: typeof import("../components/blocks/ProductTabsBlock.vue")['default']
export const BlocksReviewCarouselBlock: typeof import("../components/blocks/ReviewCarouselBlock.vue")['default']
export const BlocksSplitContentBlock: typeof import("../components/blocks/SplitContentBlock.vue")['default']
export const HelloWorld: typeof import("../../shadcn-layer/components/HelloWorld.vue")['default']
export const NuxtWelcome: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Accordion: typeof import("../../shadcn-layer/components/ui/accordion/index")['Accordion']
export const AccordionContent: typeof import("../../shadcn-layer/components/ui/accordion/index")['AccordionContent']
export const AccordionItem: typeof import("../../shadcn-layer/components/ui/accordion/index")['AccordionItem']
export const AccordionTrigger: typeof import("../../shadcn-layer/components/ui/accordion/index")['AccordionTrigger']
export const Button: typeof import("../../shadcn-layer/components/ui/button/index")['Button']
export const Card: typeof import("../../shadcn-layer/components/ui/card/index")['Card']
export const CardAction: typeof import("../../shadcn-layer/components/ui/card/index")['CardAction']
export const CardContent: typeof import("../../shadcn-layer/components/ui/card/index")['CardContent']
export const CardDescription: typeof import("../../shadcn-layer/components/ui/card/index")['CardDescription']
export const CardFooter: typeof import("../../shadcn-layer/components/ui/card/index")['CardFooter']
export const CardHeader: typeof import("../../shadcn-layer/components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../../shadcn-layer/components/ui/card/index")['CardTitle']
export const Carousel: typeof import("../../shadcn-layer/components/ui/carousel/index")['Carousel']
export const CarouselContent: typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselContent']
export const CarouselItem: typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselItem']
export const CarouselNext: typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselNext']
export const CarouselPrevious: typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselPrevious']
export const CarouselApi: typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselApi']
export const Input: typeof import("../../shadcn-layer/components/ui/input/index")['Input']
export const Checkbox: typeof import("../../shadcn-layer/components/ui/checkbox/index")['Checkbox']
export const NavigationMenu: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenu']
export const NavigationMenuContent: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuContent']
export const NavigationMenuIndicator: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuIndicator']
export const NavigationMenuItem: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuItem']
export const NavigationMenuLink: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuLink']
export const NavigationMenuList: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuList']
export const NavigationMenuTrigger: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuTrigger']
export const NavigationMenuViewport: typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuViewport']
export const Sheet: typeof import("../../shadcn-layer/components/ui/sheet/index")['Sheet']
export const SheetClose: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetClose']
export const SheetContent: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetContent']
export const SheetDescription: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetDescription']
export const SheetFooter: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetFooter']
export const SheetHeader: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetHeader']
export const SheetTitle: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetTitle']
export const SheetTrigger: typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetTrigger']
export const Tabs: typeof import("../../shadcn-layer/components/ui/tabs/index")['Tabs']
export const TabsContent: typeof import("../../shadcn-layer/components/ui/tabs/index")['TabsContent']
export const TabsList: typeof import("../../shadcn-layer/components/ui/tabs/index")['TabsList']
export const TabsTrigger: typeof import("../../shadcn-layer/components/ui/tabs/index")['TabsTrigger']
export const NuxtPage: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const NoScript: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyBlockRenderer: LazyComponent<typeof import("../components/BlockRenderer.vue")['default']>
export const LazyBlocksConciergeBlock: LazyComponent<typeof import("../components/blocks/ConciergeBlock.vue")['default']>
export const LazyBlocksFeatureGridBlock: LazyComponent<typeof import("../components/blocks/FeatureGridBlock.vue")['default']>
export const LazyBlocksHeroBlock: LazyComponent<typeof import("../components/blocks/HeroBlock.vue")['default']>
export const LazyBlocksLogoGridBlock: LazyComponent<typeof import("../components/blocks/LogoGridBlock.vue")['default']>
export const LazyBlocksNewsletterBlock: LazyComponent<typeof import("../components/blocks/NewsletterBlock.vue")['default']>
export const LazyBlocksProductTabsBlock: LazyComponent<typeof import("../components/blocks/ProductTabsBlock.vue")['default']>
export const LazyBlocksReviewCarouselBlock: LazyComponent<typeof import("../components/blocks/ReviewCarouselBlock.vue")['default']>
export const LazyBlocksSplitContentBlock: LazyComponent<typeof import("../components/blocks/SplitContentBlock.vue")['default']>
export const LazyHelloWorld: LazyComponent<typeof import("../../shadcn-layer/components/HelloWorld.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyAccordion: LazyComponent<typeof import("../../shadcn-layer/components/ui/accordion/index")['Accordion']>
export const LazyAccordionContent: LazyComponent<typeof import("../../shadcn-layer/components/ui/accordion/index")['AccordionContent']>
export const LazyAccordionItem: LazyComponent<typeof import("../../shadcn-layer/components/ui/accordion/index")['AccordionItem']>
export const LazyAccordionTrigger: LazyComponent<typeof import("../../shadcn-layer/components/ui/accordion/index")['AccordionTrigger']>
export const LazyButton: LazyComponent<typeof import("../../shadcn-layer/components/ui/button/index")['Button']>
export const LazyCard: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['Card']>
export const LazyCardAction: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['CardAction']>
export const LazyCardContent: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['CardContent']>
export const LazyCardDescription: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['CardDescription']>
export const LazyCardFooter: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['CardFooter']>
export const LazyCardHeader: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../../shadcn-layer/components/ui/card/index")['CardTitle']>
export const LazyCarousel: LazyComponent<typeof import("../../shadcn-layer/components/ui/carousel/index")['Carousel']>
export const LazyCarouselContent: LazyComponent<typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselContent']>
export const LazyCarouselItem: LazyComponent<typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselItem']>
export const LazyCarouselNext: LazyComponent<typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselNext']>
export const LazyCarouselPrevious: LazyComponent<typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselPrevious']>
export const LazyCarouselApi: LazyComponent<typeof import("../../shadcn-layer/components/ui/carousel/index")['CarouselApi']>
export const LazyInput: LazyComponent<typeof import("../../shadcn-layer/components/ui/input/index")['Input']>
export const LazyCheckbox: LazyComponent<typeof import("../../shadcn-layer/components/ui/checkbox/index")['Checkbox']>
export const LazyNavigationMenu: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenu']>
export const LazyNavigationMenuContent: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuContent']>
export const LazyNavigationMenuIndicator: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuIndicator']>
export const LazyNavigationMenuItem: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuItem']>
export const LazyNavigationMenuLink: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuLink']>
export const LazyNavigationMenuList: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuList']>
export const LazyNavigationMenuTrigger: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
export const LazyNavigationMenuViewport: LazyComponent<typeof import("../../shadcn-layer/components/ui/navigation-menu/index")['NavigationMenuViewport']>
export const LazySheet: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['Sheet']>
export const LazySheetClose: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetClose']>
export const LazySheetContent: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetContent']>
export const LazySheetDescription: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetDescription']>
export const LazySheetFooter: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetFooter']>
export const LazySheetHeader: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetHeader']>
export const LazySheetTitle: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetTitle']>
export const LazySheetTrigger: LazyComponent<typeof import("../../shadcn-layer/components/ui/sheet/index")['SheetTrigger']>
export const LazyTabs: LazyComponent<typeof import("../../shadcn-layer/components/ui/tabs/index")['Tabs']>
export const LazyTabsContent: LazyComponent<typeof import("../../shadcn-layer/components/ui/tabs/index")['TabsContent']>
export const LazyTabsList: LazyComponent<typeof import("../../shadcn-layer/components/ui/tabs/index")['TabsList']>
export const LazyTabsTrigger: LazyComponent<typeof import("../../shadcn-layer/components/ui/tabs/index")['TabsTrigger']>
export const LazyNuxtPage: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
export const LazyNoScript: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../../../node_modules/.bun/nuxt@4.2.1+7833263c30173e6b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
