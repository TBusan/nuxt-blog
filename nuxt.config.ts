// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/eslint'
  ],
  
  fonts: {
    providers: {
      google: false,
      googleicons: false
    }
  },
  
  css: ['~/assets/css/main.css'],

  // Static site generation configuration
  ssr: true,
  
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/'
      ],
      ignore: [
        // Blog routes that don't exist yet
        '/blog/boost-productivity',
        '/blog/success-story',
        '/blog/future-cloud-computing',
        '/blog/fostering-innovation',
        '/blog/cybersecurity-practices',
        '/blog/remote-leadership',
        // Services routes
        '/services/consulting',
        '/services/implementation',
        '/services/analytics',
        '/services/managed-services',
        '/services/transformation',
        '/services/security',
        // Product routes
        '/products/enterprise-solution',
        '/products/analytics-platform',
        '/products/cloud-management',
        '/products/categories/enterprise',
        '/products/categories/smb',
        '/products/categories/industry',
        // Other routes
        '/careers'
      ]
    }
  }
})