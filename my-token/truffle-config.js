const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync("./secrets.json").toString().trim();
const infuraProjectId = 'https://mainnet.infura.io/v3/bcae9aaf78c8441896816c37385d3224';

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
      network_id: 5,
      gas: 10000000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200,
    },
  },
  // その他の設定
};
