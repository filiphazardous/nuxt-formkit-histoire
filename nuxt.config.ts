// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    autoImport: true
  },
  components: {
      dirs: [
          {
              path: '~/components',
              pattern: ['**/*.vue'],
              pathPrefix: false,
          }
      ]
  },
})

