// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/scripts", "@nuxt/icon"],
  extends: ["cms-blocks"],
  fonts: {
    families: [
      {
        name: "Basement Grotesque",
        src: "/app/assets/fonts/BasementGrotesque-Black_v1.202.woff2",
        weight: "900",
        style: "black",
        provider: "local",
      },
      {
        name: "Red Hat Display",
        provider: "google",
        weight: "300 900",
      },
    ],
  },
});
