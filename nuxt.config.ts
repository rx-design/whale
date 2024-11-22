// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-mongoose',
  ],
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    coinGeckoApiKey: process.env.COINGECKO_API_KEY,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      '* * * * *': [
        'prices:update',
      ],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  primevue: {
    options: {
      theme: 'none',
    },
  },
  tailwindcss: {
    cssPath: false,
    viewer: false,
  },
})
