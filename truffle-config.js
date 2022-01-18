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
      network_id: "1912", 
      gas: "900000",         
      from: "0x300161eAF6E38E5d555c9Ce17413A42DdC421Ae8" 
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
