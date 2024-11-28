import React from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const WithdrawFunds = () => {
  const handleWithdraw = async () => {
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

      // Call the withdrawFunds function
      const tx = await contract.withdrawFunds();
      await tx.wait();
      alert("Funds withdrawn successfully!");
    } catch (error) {
      console.error("Error withdrawing funds:", error);
      alert("Error withdrawing funds: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleWithdraw} className="btn btn-danger">
        Withdraw Funds
      </button>
    </div>
  );
};

export default WithdrawFunds;