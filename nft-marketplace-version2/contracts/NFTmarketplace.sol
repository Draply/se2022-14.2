//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketplace is ERC721URIStorage { 

    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds ;
    Counters.Counter private _itemsSold;
    address payable owner ;
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
    function createListedToken(uint256 tokenId,uint256 price) private {
        idToListedToken(tokenId) = ListedToken(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );
        _transfer(msg.sender,address(this),tokenId);
        
    }
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
        require(msg.value == listPrice);                                           //Check người dùng có trả đủ phí list cho NFT hay không ?                 
        require(price > 0)  ;                                                      //Giá niêm yết luôn luôn lớn hơn 0
        _tokenIds.increment();
        uint256 crTokenId = _tokenIds.current();
        _safeMint(msg.sender,crTokenId);

        _setTokenURI(crTokenId,tokenURI);
        createListedToken(crTokenId,price);
        return crTokenId;
    }
    function getAllNFTs() public view returns (ListedToken[] memory) {
        uint nftCount = _tokenIds.current();
        ListedToken[] memory tokens = new ListedToken[] (nftCount);

        uint crIndex = 0;
        for (uint i = 0 ;i < nftCount; i ++){
            uint crId = i+1;
            ListedToken storage crItem = idToListedToken[crId];
            tokens[crIndex] = crItem;
            crIndex +=1;
        }
        return tokens;
    }
    function getMyNFTs() public view returns(ListedToken[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint crIndex = 0;
        for(uint i =0;i<totalItemCount;i++){
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender) {
                itemCount +=1;
            }
        }
        ListedToken[] memory items = new ListedToken[](itemCount);

        for(uint i =0;i < totalItemCount; i++) {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender ) {
                uint crId = i+1;
                ListedToken storage crItem = idToListedToken[crId];
                items[crIndex] = crItem;
                crIndex += 1;
            }
        }
        return items;

    } 
    function executeSale(uint256 tokenId) public payable {
        uint price = idToListedToken[tokenId].price;
        address seller = idToListedToken[tokenId].seller;
        require(msg.value == price);

        idToListedToken[tokenId].currentlyListed = true;
        idToListedToken[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

        _transfer(address(this),msg.sender,tokenId);
        approve(address(this),tokenId);

        payable(owner).transfer(listPrice);
        payable(seller).transfer(msg.value);
    }

}

      