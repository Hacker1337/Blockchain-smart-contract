// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// source: https://101blockchains.com/create-nfts-with-hardhat/
contract MyCryptoNFT is ERC721 {

    struct NFT {
        string author;
        string title;
        string text;
    }
    
    NFT public nft;

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    
    function issueNFT(string memory author, string memory title, string memory text) public {
        nft = NFT(author, title, text);
        uint256 tokenId = uint256(keccak256(abi.encodePacked(author, title, text)));
        _mint(msg.sender, tokenId);
    }

}