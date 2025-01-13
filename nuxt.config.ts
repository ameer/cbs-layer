// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import path, { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'vuetify-nuxt-module', '@sidebase/nuxt-auth'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@vuetify/loader-shared': path.resolve(__dirname, 'vuetify.workaround.js'),
      },
    },
  },
  vuetify: {
    moduleOptions: {
      /* other module options */
      styles: { configFile: join(currentDir,'./settings.scss') },
    },
    vuetifyOptions: './vuetify.config.ts',
  },
})
