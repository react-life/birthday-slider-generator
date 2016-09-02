export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Nutrilogic',
    head: {
      titleTemplate: '%s - Nutrilogic',
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
