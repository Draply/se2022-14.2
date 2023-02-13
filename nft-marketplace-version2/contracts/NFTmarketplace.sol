//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketplace is ERC721URIStorage { 

    address payable owner ;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds ;
    Counters.Counter private _itemsSold;
    uint256 listPrice = 0.1 ether;
    constructor() ERC721("Draply","DAD") {
        owner = payable(msg.sender);

    }
    struct ListedToken {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool isListed;

    }
    mapping(uint256 => ListedToken) private idToListedToken;

    function updateListPricce(uint256 _listPrice) public payable {
        require(owner == msg.sender);
        listPrice = _listPrice; 
    }
    function getListPrice() public view returns (uint256) {
        return listPrice;

    }
    function getLastestIdToListedToken() public view returns (ListedToken memory) {
        uint256 crTokenId = _tokenIds.current();
        return idToListedToken(crTokenId);
    }
    function getListedForTokenId(uint256 tokenId) public view returns (ListedToken memory) {
        return idToListedToken(tokenId);
    }
    function getCurrentToken() public view returns (uint256) {
        return _tokenIds.current();
    }
    function createNFT(string memory tokenURI, uint256 price) public payable returns (uint) {
        require(msg.value == listPrice);                                           //Check người dùng có trả đủ phí list cho NFT hay không ?                 
        require(price > 0)  ;                                                      //Giá niêm yết luôn luôn lớn hơn 0
        _tokenIds.increment();
        uint256 crTokenId = _tokenIds.current();
        _safeMint(msg.sender,crTokenId);
    }

}

      