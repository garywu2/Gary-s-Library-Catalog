let config = {
    api: {
      protocol: "http",
      host: "localhost",
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