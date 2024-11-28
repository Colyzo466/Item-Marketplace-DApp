const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("ItemListingModule", (m) => {
  // Set default parameters
  const listingFee = m.getParameter("listingFee", ethers.parseUnits("0.01", 18)); // Default to 0.01 ETH as listing fee

  // Deploy the ItemListing contract
  const itemListing = m.contract("ItemListing", [listingFee]);

  // Return the deployed contract instance
  return { itemListing };
});