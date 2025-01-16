import Vue3Toastify, { toast } from 'vue3-toastify'
import type { ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 3000, rtl: true, transition: 'slide', position: 'top-left' } as ToastContainerOptions)

  return {
    provide: {
      toast,
    },
  }
})
