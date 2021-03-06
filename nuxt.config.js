export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Moovere',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', 'animate.css/animate.compat.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/aos-client.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    'nuxt-vite',

    '@nuxtjs/fontawesome',

    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',
    // https://go.nuxtjs.dev/axios
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
  ],

  server: {
    host: '0.0.0.0',
  },

  fontawesome: {
    icons: {
      solid: [
        'faPhone',
        'faMapMarkedAlt',
        'faArrowDown',
        'faUserTie',
        'faFileMedical',
        'faHeartbeat',
        'faGem',
        'faLungs',
        'faLeaf',
        'faSpa',
        'faRunning',
        'faSortDown',
        'faSortUp',
        'faHands',
        'faFistRaised',
        'faHandHoldingMedical',
        'faUniversalAccess',
        'faDumbbell',
        'faCheckSquare',
        'faBan',
        'faClock',
        'faHandsHelping',
        'faHandSparkles',
      ],
      brands: ['faWhatsapp', 'faInstagram', 'faFacebook'],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { extractCSS: true },
}
