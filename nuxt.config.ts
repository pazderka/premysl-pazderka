// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/seo",
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_X_PB_SCOPE_PRODUCT: process.env.API_X_PB_SCOPE_PRODUCT,
      API_X_PB_SCOPE_ACCESSORY: process.env.API_X_PB_SCOPE_ACCESSORY,
    },
  },
  googleFonts: {
    families: {
      "DM Sans": true,
    },
  },
  image: {
    domains: ["https://frontapi.praguebest.cz"],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  site: {
    url: "https://localhost:3000",
    name: "E-commerce appliction",
    description: "My awesome e-commerce application",
    defaultLocale: "cs",
  },
});
