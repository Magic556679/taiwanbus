module.exports = {
  publicPath: '/taiwanbus/dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/all.scss";
        `,
      },
    },
  },
};
