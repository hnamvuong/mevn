module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: process.env.SERVER_URI
  }
};
