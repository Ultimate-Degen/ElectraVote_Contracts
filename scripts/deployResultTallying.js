const voteCastingAddress = "your_vote_casting_address"; // Replace this with the actual address

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying ResultTallying with the account:", deployer.address);

  const ResultTallying = await ethers.getContractFactory("ResultTallying");
  const resultTallying = await ResultTallying.deploy(voteCastingAddress);
  await resultTallying.deployed(); // Wait for the contract to be mined and deployed
  console.log("ResultTallying deployed to:", resultTallying.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
