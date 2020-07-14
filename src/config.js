let config = {
    api: {
      protocol: "http",
      host: "ec2-3-21-113-3.us-east-2.compute.amazonaws.com",
      port: 5000,
    }
  };
  
  config.endpoint =
    config.api.protocol +
    "://" +
    config.api.host +
    ":" +
    config.api.port +
    "/" ;
  
  module.exports = config;
