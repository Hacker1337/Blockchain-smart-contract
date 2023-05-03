// For Hardhat 
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL_GOERLI, API_URL_SEPOLIA, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;



// Provider
const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL_SEPOLIA);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message.");
    await tx.wait();


    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}
main();
