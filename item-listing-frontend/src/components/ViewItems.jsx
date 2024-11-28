import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

        const itemCount = await contract.getSellerItemCount(address);
        const fetchedItems = [];
        for (let i = 0; i < itemCount; i++) {
          const item = await contract.getItemDetails(address, i);
          fetchedItems.push(item);
        }
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h4>Your Listed Items</h4>
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item[0]}</strong> - {item[1]} | {ethers.formatEther(item[2])} ETH | Quantity: {item[3]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items listed.</p>
      )}
    </div>
  );
};

export default ViewItems;