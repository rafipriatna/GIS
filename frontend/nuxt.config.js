export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'frontend',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
            src: "~plugins/vue-tags.js",
            ssr: false,
            src: '~plugins/aos',
            ssr: false,
            mode: 'client'
        },
        "~plugins/vue-modal.js",
        "~plugins/vue-file-agent.js",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg',
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],

    // Axios
    axios: {
        baseURL: 'http://localhost:7000/api',
    },

    // Public
    publicRuntimeConfig: {
        serverURL: "http://localhost:7000/",
    },

    // Auth module configuration
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    required: true,
                    type: 'Bearer'
                },
                user: {
                    property: 'user',
                },
                endpoints: {
                    login: { url: 'auth/login', method: 'post' },
                    user: { url: 'auth', method: 'get' },
                    logout: false,
                },
            },
        },
        redirect: {
            login: '/admin/login',
            logout: '/',
            home: '/admin',
        },
    },


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'nuxt-leaflet',
        'vue-sweetalert2/nuxt'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}