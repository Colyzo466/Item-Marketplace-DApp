import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

const Reports = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

      const salesReport = await contract.generateSalesReport();
      setReports(salesReport);
    } catch (error) {
      console.error("Error generating reports:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchReports} className="btn btn-primary">Generate Sales Report</button>
      {reports.length > 0 && (
        <ul className="mt-3 list-group">
          {reports.map((report, index) => (
            <li key={index} className="list-group-item">
              <strong>Item:</strong> {report.itemName}, <strong>Price:</strong> {ethers.formatEther(report.price)} ETH, <strong>Sold:</strong> {report.quantitySold}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reports;