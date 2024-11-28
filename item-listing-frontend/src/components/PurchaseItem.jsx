import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const PurchaseItem = () => {
  const [sellerAddress, setSellerAddress] = useState("");
  const [itemId, setItemId] = useState("");

  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
        // Ensure the user has connected their wallet
        if (!window.ethereum) {
            alert("Please install MetaMask!");
            return;
        }

        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        // Fetch the item details to get the price
        const itemDetails = await contract.getItemDetails(sellerAddress, parseInt(itemId));
        const price = itemDetails[2]; // Price is the 3rd returned value

        const tx = await contract.purchaseItem(sellerAddress, parseInt(itemId), {
            value: price, // Send the item's price in ETH
        });
        await tx.wait();
        alert("Item purchased successfully!");
    } catch (error) {
        console.error("Error purchasing item:", error);
        alert("Error purchasing item: " + error.message);
    }
};
  return (
    <form onSubmit={handlePurchase}>
      <div className="mb-3">
        <label className="form-label">Seller Address</label>
        <input
          type="text"
          name="sellerAddress"
          className="form-control"
          onChange={(e) => setSellerAddress(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Item ID</label>
        <input
          type="number"
          name="itemId"
          className="form-control"
          onChange={(e) => setItemId(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Purchase Item</button>
    </form>
  );
};

export default PurchaseItem;