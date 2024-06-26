// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "nuxt-icon", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    autoImport: true,
  },
  pages: true,
  runtimeConfig: {
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: "",
    },
  },
});
