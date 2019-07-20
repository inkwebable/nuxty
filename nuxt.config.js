import Fiber from 'fibers';
import Sass from 'sass';

const customSass = {
    implementation: Sass,
    fiber: Fiber,
};

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            {
                'property': 'og:title',
                'content': 'Test title',
                'template': chunk => `${ chunk } - My page`, //or as string template: '%s - My page',
                'vmid': 'og:title',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        // SCSS file in the project
        '@/assets/sass/main.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
    ],
    axios: {
        // proxyHeaders: false
        retry: { retries: 1 },
        debug: false,
        baseURL: process.env.API_URL || 'http://localhost:3000'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        vendor: ['axios'],
        loaders: {
            scss: customSass,
        },
        extend(config, ctx) {
        },
    },
    router: {
        middleware: 'browser',
    },
    serverMiddleware: [
        // API middleware
        '~/api/index.js',
    ],
};
