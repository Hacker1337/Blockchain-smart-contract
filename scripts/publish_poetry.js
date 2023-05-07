require ("@nomiclabs/hardhat-ethers");

async function main() {
    const MyNFT = await ethers.getContractFactory("MyCryptoNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const contract = await MyNFT.deploy("token name", "token symbol");
    console.log("Contract deployed to address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });



// For Hardhat 
const contract = require("../artifacts/contracts/poety_nft.sol/MyCryptoNFT.json");

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL_GOERLI, API_URL_SEPOLIA, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;



// Provider
const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL_SEPOLIA);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const poetryContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {

    console.log("Publishing poetry...");
    const nft = await poetryContract.issueNFT("A. C. Pushkin", "zvetok", "zvetok zacohshij bezuhannij vizhu ia...");
    await nft.wait();
    console.log("Poetry is published!");
}
main();
