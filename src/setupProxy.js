const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
  target: "https://www.pixiv.net",
  changeOrigin: true,
  headers: {
    Referer: "https://app-api.pixiv.net/",
  },
};

module.exports = function (app) {
  app.use("/api/*", createProxyMiddleware(options));
};
