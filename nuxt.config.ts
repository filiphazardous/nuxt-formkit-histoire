// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss',],
    css: ['~/index.css'],
    formkit: {
        autoImport: true,
    },
    components: {
        dirs: [
            {
                path: '~/components',
                pattern: ['**/*.vue'],
                pathPrefix: false,
            },
        ],
    },
    tailwindcss: {
        config: {
            content: [
                './components/**/*.{js,vue,ts}',
                './pages/**/*.vue',
                './nuxt.config.{js,ts}',
            ],
            darkMode: 'class',
            theme: {
                extend: {},
            },
            plugins: [],
        },
        viewer: false,
    },
})

