import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const ListItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const [isRequesting, setIsRequesting] = useState(false); // Track connection request status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isRequesting) return; // Prevent multiple requests

    try {
      // Check if the user has connected their wallet
      if (!window.ethereum) {
        alert("Please install MetaMask or another Ethereum wallet.");
        return;
      }

      setIsRequesting(true); // Set requesting state to true

      // Create a provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); // Await the signer

      // Create the contract instance
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Send the transaction
      const tx = await contract.listItem(
        formData.name,
        formData.description,
        ethers.parseEther(formData.price),
        parseInt(formData.quantity),
        { value: ethers.parseEther("0.01") } // Replace with actual listing fee
      );
      
      await tx.wait();
      alert("Item listed successfully!");
    } catch (error) {
      console.error("Error listing item:", error);
      alert("An error occurred while listing the item.");
    } finally {
      setIsRequesting(false); // Reset requesting state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Item Name</label>
        <input type="text" name="name" className="form-control" onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input type="text" name="description" className="form-control" onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Price (ETH)</label>
        <input type="text" name="price" className="form-control" onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input type="number" name="quantity" className="form-control" onChange={handleInputChange} required />
      </div>
      <button type="submit" className="btn btn-primary ml-4" disabled={isRequesting}>List Item</button>
    </form>
  );
};

export default ListItem;