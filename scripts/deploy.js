async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const VoterRegistration = await ethers.getContractFactory("VoterRegistration");
    const voterRegistration = await VoterRegistration.deploy();
    await voterRegistration.deployed(); // Wait for the contract to be deployed
    console.log("VoterRegistration deployed to:", voterRegistration.address);
  
    const VoteCasting = await ethers.getContractFactory("VoteCasting");
    const voteCasting = await VoteCasting.deploy(voterRegistration.address);
    await voteCasting.deployed(); // Wait for the contract to be deployed
    console.log("VoteCasting deployed to:", voteCasting.address);
  
    const ResultTallying = await ethers.getContractFactory("ResultTallying");
    const resultTallying = await ResultTallying.deploy(voteCasting.address);
    await resultTallying.deployed(); // Wait for the contract to be deployed
    console.log("ResultTallying deployed to:", resultTallying.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  