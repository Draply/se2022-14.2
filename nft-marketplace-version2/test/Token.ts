// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
import { expect } from"chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// @ts-ignore
import { ethers } from "hardhat";
describe("Token contract", function () {

  async function deployTokenFixture() {

    const Token = await ethers.getContractFactory("Token");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await Token.deploy();

    await hardhatToken.deployed();

    return { Token, hardhatToken, owner, addr1, addr2 };
  }

  describe("Deployment", function () {

    it("Should set the right owner", async function () {

      const { hardhatToken, owner,addr1 } = await loadFixture(deployTokenFixture);
      hardhatToken.give

      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

  });
      
});
