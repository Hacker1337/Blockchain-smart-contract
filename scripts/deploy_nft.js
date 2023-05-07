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