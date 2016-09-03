export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Sliders',
    head: {
      titleTemplate: '%s - Sliders',
      meta: [
        {
          name: 'description',
          content: 'Big distribution store',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },
};
