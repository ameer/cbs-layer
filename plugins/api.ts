export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const { token } = useAuth()
  const api = $fetch.create({
    baseURL: config.public.baseURL,
    // credentials: 'include',
    onRequest({ options }) {
      if (token.value)
        options.headers.set('Authorization', token.value)
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/auth/login'))
      }
      else {
        useNuxtApp().$toast.error(response._data.messages[0].detail.fa)
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
