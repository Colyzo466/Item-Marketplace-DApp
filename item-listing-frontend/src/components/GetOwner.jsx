import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const GetOwner = () => {
  const [owner, setOwner] = useState("");

  const fetchOwner = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

      const ownerAddress = await contract.getOwner();
      setOwner(ownerAddress);

    } catch (error) {
      console.error("Error fetching owner:", error);
      alert("Error fetching owner: " + error.message);
    }
  };

  useEffect(() => {
    fetchOwner();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Marketplace Owner</h5>
        <p className="card-text">
          {owner ? (
            <span>Owner Address: {owner}</span>
          ) : (
            <span>Loading owner address...</span>
          )}
        </p>
        <button 
          className="btn btn-primary" 
          onClick={fetchOwner}
        >
          Refresh Owner
        </button>
      </div>
    </div>
  );
};

export default GetOwner;