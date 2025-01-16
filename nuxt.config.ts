// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import path, { dirname, join } from 'path'
import { version } from './package.json'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'vuetify-nuxt-module', '@sidebase/nuxt-auth'],
  devtools: { enabled: true },
  css: [
    join(currentDir, './assets/css/main.css'),
  ],
  runtimeConfig: {
    public: {
      version,
      baseURL: process.env.BASE_URL || 'http://localhost:9000',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@vuetify/loader-shared': path.resolve(__dirname, 'vuetify.workaround.js'),
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    moduleOptions: {
      /* other module options */
      styles: { configFile: join(currentDir, './settings.scss') },
    },
    vuetifyOptions: './vuetify.config.ts',
  },
})
