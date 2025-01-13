import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import type { ThemeDefinition } from 'vuetify'
import { fa } from 'vuetify/locale'

const truePurpleTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'background': '#e4e9eb',
    'surface': '#FFFFFF',
    'primary': '#4d5999',
    'primary-darken-1': '#3700B3',
    'secondary': '#8e9dbf',
    'secondary-darken-1': '#018786',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#61af33',
    'warning': '#FB8C00',
  },
}
export default defineVuetifyConfiguration({
  locale: {
    locale: 'fa',
    rtl: { fa: true },
    messages: { fa },
  },
  theme: {
    defaultTheme: 'truePurpleTheme',
    themes: {
      truePurpleTheme,
    },
  },
})