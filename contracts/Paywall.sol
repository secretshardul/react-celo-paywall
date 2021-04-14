// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Paywall {
    event NewPurchase(address user, string articleId);

    // Map users to articles
    mapping(address => string[]) public userPurchases;
    // Map articles to users
    mapping(string => address[]) public articlePurchasers;

    function purchaseAccess(string calldata articleId) public payable {
        // require(msg.value == 0.00001 ether);

        userPurchases[msg.sender].push(articleId);
        articlePurchasers[articleId].push(msg.sender);

        emit NewPurchase(msg.sender, articleId);
    }

    function getUserPurchaseCount(address userAddress) public view returns (uint) {
        return userPurchases[userAddress].length;
    }

     function getArticlePurchaserCount(string calldata articleId) public view returns (uint) {
        return articlePurchasers[articleId].length;
    }
}
