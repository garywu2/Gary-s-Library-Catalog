import config from "./config" 
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/catalog',
    createProxyMiddleware({
      target: 'http://ec2-3-21-113-3.us-east-2.compute.amazonaws.com:5000',
      changeOrigin: true,
    })
  );
};