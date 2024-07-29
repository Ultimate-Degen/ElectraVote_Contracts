const voterRegistrationAddress = "your_voter_registration_address"; // Replace this with the actual address

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying VoteCasting with the account:", deployer.address);

  const VoteCasting = await ethers.getContractFactory("VoteCasting");
  const voteCasting = await VoteCasting.deploy(voterRegistrationAddress);
  await voteCasting.deployed(); // Wait for the contract to be mined and deployed
  console.log("VoteCasting deployed to:", voteCasting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
