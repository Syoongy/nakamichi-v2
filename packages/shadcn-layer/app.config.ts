export default defineAppConfig({
  myLayer: {
    name: 'ShadCN layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
