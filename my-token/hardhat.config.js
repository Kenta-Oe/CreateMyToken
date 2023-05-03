require("@nomiclabs/hardhat-waffle");

const { projectId, mnemonic } = require("./secrets.json");

module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: { mnemonic: mnemonic },
    },
  },
};
