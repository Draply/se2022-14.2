import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

export default function Marketplace() {
const sampleData = [
    {
        "name": "DigiDaigaku#1",
        "price":"0.11ETH",
        "website":"https://rarible.com",
        "image":"https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9kaWdpZGFpZ2FrdS5jb20vaW1hZ2UvMTYzNy5wbmc=",
        "description": "DigiDaigaku's NFT",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "Dreadfulz#2",
        "description": "Dreadfulz's NFT",
        "website":"https://rarible.com",
        "image":"https://ipfs.io/ipfs/QmWkwea1rcKspv5FB7ApvFec68rL3ZaDEgSovFjudgFnfu/4799.png",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "Otherdeed#3",
        "description": "NFT",
        "website":"https://rarible.com",
        "image":"https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9hc3NldHMub3RoZXJzaWRlLnh5ei9vdGhlcmRlZWRzLzdlOTk5YTc2ZmRhNDMwODk4MGM0NTlmYjU2ZjczZWNhZmY1MTYyNmYzNzA0YjMwOTljYzY0YzBhMGM1YTdjOGQuanBn",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "Bitcoin Punk#4",
        "description": "Bitcoin Punk's NFT",
        "website":"https://rarible.com",
        "image":"https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9jcnlwdG9wdW5rcy5hcHAvY3J5cHRvcHVua3MvY3J5cHRvcHVuazk4NzgucG5nP3NpemU9MjUwMCZjdXN0b21Db2xvcj1GNzkzMUE=",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "CloneX#5",
        "description": "CloneX's NFT",
        "website":"https://rarible.com",
        "image":"https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9jbG9uZXgtYXNzZXRzLnJ0Zmt0LmNvbS9pbWFnZXMvMTEwNTUucG5n",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "Potatoz#6",
        "description": "Potatoz's NFT",
        "website":"https://rarible.com",
        "image":"https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9ncm93LWFwaS5tZW1lbGFuZC5jb20vdG9rZW4vaW1hZ2VzLzU1ODMuZ2lm",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
];
const [data, updateData] = useState(sampleData);
const [dataFetched, updateFetched] = useState(false);

async function getAllNFTs() {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    let transaction = await contract.getAllNFTs()

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(transaction.map(async i => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        let meta = await axios.get(tokenURI);
        meta = meta.data;

        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.image,
            name: meta.name,
            description: meta.description,
        }
        return item;
    }))

    updateFetched(true);
    updateData(items);
}

if(!dataFetched)
    getAllNFTs();

return (
    <div>
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-20">
            <div className="md:text-xl font-bold text-white">
                Top NFTs
            </div>
            <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
                {data.map((value, index) => {
                    return <NFTTile data={value} key={index}></NFTTile>;
                })}
            </div>
        </div>            
    </div>
);
}