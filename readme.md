# Simple smart contract

B task. Publish poetry and return nft token.

To deploy:
1. add .env file to workdir with wallet private key and API_URL.
2. run `npx hardhat run scripts/deploy_nft.js --network sepolia`
3. Add contract address to .env file
   
To interact with smart contract, run `npx hardhat run scripts/publish_poetry.js`


### set-up the environment

```bash
npm init --yes
npm install --save-dev hardhat  
npm install --save-dev @openzeppelin/contracts
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```
