var devConfig = {
  apizor: {
    port: '8080'
  },
  mongo: {
    address: '192.168.56.50'
  },
  cube: {
    collector: 'http://192.168.56.50:1080',
    evaluator: 'http://192.168.56.50:1081'
  }
};

module.exports = devConfig;
