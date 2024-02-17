// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css',
        },
      ],
    },
  },
  css: ['@/assets/sass/main.scss'],
});
