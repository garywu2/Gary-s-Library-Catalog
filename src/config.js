let config = {
    api: {
      protocol: "http",
      host: "ec2-18-222-181-158.us-east-2.compute.amazonaws.com",
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
