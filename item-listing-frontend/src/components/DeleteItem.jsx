import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const DeleteItem = () => {
  const [itemId, setItemId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Check for MetaMask
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Call the deleteItem function
      const tx = await contract.deleteItem(parseInt(itemId));
      await tx.wait();
      
      alert("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item: " + error.message);
    }
  };

  return (
    <form onSubmit={handleDelete}>
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
      <button type="submit" className="btn btn-danger">Delete Item</button>
    </form>
  );
};

export default DeleteItem;
