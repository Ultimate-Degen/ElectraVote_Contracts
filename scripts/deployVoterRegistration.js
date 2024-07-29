const { ethers } = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const VoterRegistration = await ethers.getContractFactory("VoterRegistration");
  console.log("Contract factory obtained.");

  const voterRegistration = await VoterRegistration.deploy();
  console.log("Contract deployed at:", voterRegistration.address);
}

main()
  .then(() => {
    console.log("Deployment script finished.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
