// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false }, // Disable in production
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  ssr: true, // Enable SSR for better SEO
  
  // Production optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  
  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://vertragsfrei.org'
    }
  },
  
  // SSR optimizations
  experimental: {
    payloadExtraction: false
  },
  
  // Build optimizations
  build: {
    transpile: ['pinia']
  },
  
  app: {
    head: {
      title: 'vertragsfrei - Kündigungsschreiben Generator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Generieren Sie Kündigungsschreiben für Fitnessstudio, Streaming, Telekom und mehr. Kostenlos und einfach zu verwenden.' },
        { name: 'keywords', content: 'Kündigungsschreiben, Kündigung, Fitnessstudio, Streaming, Telekom, rechtssicher, Generator' },
        { name: 'author', content: 'vertragsfrei' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#4f46e5' },
        { name: 'msapplication-TileColor', content: '#4f46e5' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'vertragsfrei' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'vertragsfrei - Kündigungsschreiben Generator' },
        { property: 'og:description', content: 'Generieren Sie Kündigungsschreiben für Fitnessstudio, Streaming, Telekom und mehr.' },
        { property: 'og:image', content: '/logo.png' },
        { property: 'og:url', content: 'https://vertragsfrei.org' },
        { property: 'og:site_name', content: 'vertragsfrei' },
        { property: 'og:locale', content: 'de_DE' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'vertragsfrei - Kündigungsschreiben Generator' },
        { name: 'twitter:description', content: 'Generieren Sie Kündigungsschreiben für Fitnessstudio, Streaming, Telekom und mehr.' },
        { name: 'twitter:image', content: '/logo.png' },
        { name: 'twitter:site', content: '@vertragsfrei' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
        { rel: 'canonical', href: 'https://vertragsfrei.org' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'apple-touch-icon', href: '/icon.png' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'vertragsfrei',
            description: 'Kündigungsschreiben Generator',
            url: 'https://vertragsfrei.org',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR'
            }
          })
        }
      ]
    }
  }
})