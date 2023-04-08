// hardhat.config.js
const { alchemyApiKey, mnemonic } = require('./secrets.json');

require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.18",
  namedAccounts: {
    deployer: 1,
    tokenOwner: 1,
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    },
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId: 97,
      // gasPrice: 20000000000,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }
  }
};