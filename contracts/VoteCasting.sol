// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./VoterRegistration.sol";

contract VoteCasting {
    mapping(bytes32 => uint256) public candidateVotes;
    mapping(address => bool) private hasVoted;
    VoterRegistration voterRegistration;

    event VoteCast(address voterAddress, bytes32 candidateID);

    constructor(address _voterRegistrationAddress) {
        voterRegistration = VoterRegistration(_voterRegistrationAddress);
    }

    function castVote(bytes32 candidateID) public {
        require(voterRegistration.verifyVoter(msg.sender), "Voter is not registered");
        require(!hasVoted[msg.sender], "Voter has already voted");
        candidateVotes[candidateID]++;
        hasVoted[msg.sender] = true;
        emit VoteCast(msg.sender, candidateID);
    }
}
