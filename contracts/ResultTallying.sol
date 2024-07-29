// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./VoteCasting.sol";

contract ResultTallying {
    VoteCasting voteCasting;

    constructor(address _voteCastingAddress) {
        voteCasting = VoteCasting(_voteCastingAddress);
    }

    function tallyVotes(bytes32[] memory candidateList) public view returns (uint256[] memory) {
        uint256[] memory results = new uint256[](candidateList.length);
        for (uint256 i = 0; i < candidateList.length; i++) {
            results[i] = voteCasting.candidateVotes(candidateList[i]);
        }
        return results;
    }
}
