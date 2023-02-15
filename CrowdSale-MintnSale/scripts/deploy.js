async function main() {
    [owner, signer2, signer3] = await ethers.getSigners();
  
    DraplyCoin = await ethers.getContractFactory('DraplyCoin', owner);
    DraplyCoin = await DraplyCoin.deploy();
  
    Crowdsale = await ethers.getContractFactory('Crowdsale', owner);
    crowdSale = await Crowdsale.deploy(2, owner.address, DraplyCoin.address);
  
    await DraplyCoin.connect(owner).mint(
      crowdSale.address,
      ethers.utils.parseEther('10000')
    )
  
    console.log("Crowdsale:",      crowdSale.address);
    console.log("DraplyCoin:",        DraplyCoin.address);
    console.log("signer2:",        signer2.address);
  }
  
  // npx hardhat run --network localhost scripts/deploy.js
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });