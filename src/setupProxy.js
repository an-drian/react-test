const { createProxyMiddleware } = require('http-proxy-middleware');

const baseURL = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3000'
  : 'https://www.visitorqueue.com';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: baseURL,
      changeOrigin: true,
    })
  );
};
