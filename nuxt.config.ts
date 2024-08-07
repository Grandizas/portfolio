// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn-uicons.flaticon.com/2.4.2/uicons-regular-rounded/css/uicons-regular-rounded.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn-uicons.flaticon.com/2.4.2/uicons-brands/css/uicons-brands.css',
        },
      ],
      meta: [
        {
          property: 'og:image',
          content: '/thumbnail.png',
        },
        {
          property: 'og:title',
          content: 'Gražvydas Žilius portfolio',
        },
        {
          property: 'og:description',
          content: 'Step into the world where pixels come to life!',
        },
        {
          property: 'og:url',
          content: 'http://grazvydas.me',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    },
  },
  modules: ['@pinia/nuxt'],
  css: ['@/assets/sass/main.scss'],
  plugins: ['~/plugins/clickOutside.d.ts'],
});
