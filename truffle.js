// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {

  networks: {
    ganachegui: {
      gas: 500,
      host: "localhost",
      port: 6545,
      network_id: "*"
    },
    ganachecli: {
      gas: 4712388,
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      gas: 50000,
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    azure: {
      gas: 500000,
      host: "weiood-dns-reg1.eastus2.cloudapp.azure.com",
      port: 8545,
      network_id: "*"
    }
  }

};

mocha: {
  useColors: true
};