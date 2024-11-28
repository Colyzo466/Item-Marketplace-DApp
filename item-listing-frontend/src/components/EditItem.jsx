import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const EditItem = () => {
  const [itemId, setItemId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditItem = async (e) => {
    e.preventDefault();
    try {
        // Check if window.ethereum is available
        if (!window.ethereum) {
            alert("Please install MetaMask!");
            return;
        }

        // Create a new provider
        const provider = new ethers.BrowserProvider(window.ethereum);
        
        // Request account access if needed
        await provider.send("eth_requestAccounts", []);
        
        // Get the signer
        const signer = await provider.getSigner();
        
        // Create the contract instance
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        // Call the editItem function on the contract
        const tx = await contract.editItem(
            parseInt(itemId),
            formData.name,
            ethers.parseEther(formData.price),
            parseInt(formData.quantity)
        );
        
        // Wait for the transaction to be mined
        await tx.wait();
        alert("Item edited successfully!");
    } catch (error) {
        console.error("Error editing item:", error);
        alert("An error occurred while editing the item.");
    }
};

  return (
    <form onSubmit={handleEditItem}>
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
      <div className="mb-3">
        <label className="form-label">New Item Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">New Price (ETH)</label>
        <input
          type="text"
          name="price"
          className="form-control"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">New Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Edit Item</button>
    </form>
  );
};

export default EditItem;