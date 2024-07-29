const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VoterRegistration", function () {
  let voterRegistration;

  beforeEach(async function () {
    const VoterRegistration = await ethers.getContractFactory("VoterRegistration");
    voterRegistration = await VoterRegistration.deploy();
    await voterRegistration.deployed();
  });

  it("Should register a voter", async function () {
    const [owner] = await ethers.getSigners();
    await voterRegistration.registerVoter(owner.address, ethers.utils.formatBytes32String("VoterID"));
    expect(await voterRegistration.verifyVoter(owner.address)).to.equal(true);
  });
});

describe("VoteCasting", function () {
  let voterRegistration;
  let voteCasting;

  beforeEach(async function () {
    const VoterRegistration = await ethers.getContractFactory("VoterRegistration");
    voterRegistration = await VoterRegistration.deploy();
    await voterRegistration.deployed();

    const VoteCasting = await ethers.getContractFactory("VoteCasting");
    voteCasting = await VoteCasting.deploy(voterRegistration.address);
    await voteCasting.deployed();
  });

  it("Should allow a registered voter to cast a vote", async function () {
    const [owner] = await ethers.getSigners();
    await voterRegistration.registerVoter(owner.address, ethers.utils.formatBytes32String("VoterID"));
    await voteCasting.castVote(ethers.utils.formatBytes32String("CandidateID"));

    expect(await voteCasting.candidateVotes(ethers.utils.formatBytes32String("CandidateID"))).to.equal(1);
  });
});
