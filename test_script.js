import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "k2CRUiBivK8MPXTyBfMJOjPvbYTHQF9M",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);