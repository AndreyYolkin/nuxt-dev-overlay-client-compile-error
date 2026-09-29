export default defineNuxtConfig({
  compatibilityDate: 'latest',
  routeRules: {
    // rendered on the client only
    '/spa': { ssr: false },
  },
})
