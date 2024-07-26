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
    },
  },
  modules: ['@pinia/nuxt'],
  css: ['@/assets/sass/main.scss'],
  plugins: ['~/plugins/clickOutside.d.ts'],
});
