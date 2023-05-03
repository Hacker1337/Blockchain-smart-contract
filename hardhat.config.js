/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
};

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL_GOERLI, API_URL_SEPOLIA, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL_SEPOLIA,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    goerli: {
      url: API_URL_GOERLI,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}