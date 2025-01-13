// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'vuetify-nuxt-module'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    moduleOptions: {
      /* other module options */
      styles: { configFile: './settings.scss' },
    },
    vuetifyOptions: './vuetify.config.ts',
  },
})
