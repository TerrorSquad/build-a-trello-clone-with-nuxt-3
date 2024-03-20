// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/vello.css"],
  modules: ["@nuxtjs/eslint-module", "@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt"],
  colorMode: {
    preference: "light",
  },
})
