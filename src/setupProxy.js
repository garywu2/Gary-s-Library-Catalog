const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/catalog',
    createProxyMiddleware({
      target: 'http://ec2-18-222-181-158.us-east-2.compute.amazonaws.com:5000',
      changeOrigin: true,
    })
  );
};
