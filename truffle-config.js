require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    my_local: {
      host: "127.0.0.1",     
      port: 8501,            
      network_id: "7777", // Rinkeby's id          
      from: "0x5f32A86Fa285E80E0fbE071ca82395A1EAF52B2B",  // your Ethereum account address here, we will get back to this soon
      gas:8000000,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
