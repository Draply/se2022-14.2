// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DADNFT is ERC721URIStorage, ERC721Enumerable  {
    constructor () ERC721("Draply","DAD") {

    }
    function giveaway(address to) public returns (uint) {   

    }

}