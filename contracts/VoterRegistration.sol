// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract VoterRegistration {
    mapping(address => bool) public registeredVoters;
    mapping(address => bytes32) private voterIDs;

    event VoterRegistered(address voterAddress, bytes32 voterID);

    function registerVoter(address voterAddress, bytes32 voterID) public {
        require(!registeredVoters[voterAddress], "Voter is already registered");
        registeredVoters[voterAddress] = true;
        voterIDs[voterAddress] = voterID;
        emit VoterRegistered(voterAddress, voterID);
    }

    function verifyVoter(address voterAddress) public view returns (bool) {
        return registeredVoters[voterAddress];
    }
}
