# Item Marketplace DApp

This is a decentralized application (DApp) built using **React**, **Bootstrap**, and **Vite**. It provides an interface for interacting with a smart contract deployed on the Ethereum blockchain. The contract allows users to list, edit, purchase, and manage items, while providing additional features like generating reports, withdrawing funds, and viewing the contract owner.

---

## Features

1. **List Item**: Enables sellers to list their items on the marketplace.
2. **View Items**: Displays all items listed by the seller.
3. **Edit Item**: Allows sellers to update the name, price, and quantity of their items.
4. **Purchase Item**: Buyers can purchase items listed on the marketplace by providing the seller's address and item ID.
5. **Reports**: Generates detailed reports of sales and purchase histories.
6. **Withdraw Funds**: Allows the contract owner to withdraw accumulated funds from the contract.
7. **Delete Item**: Removes a listed item from the marketplace.
8. **Get Owner**: Fetches and displays the current contract owner.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive and modern design.
- **Vite**: A build tool for fast and efficient React development.
- **Ethers.js**: A library for interacting with the Ethereum blockchain.
- **Solidity**: The programming language used to create the smart contract.

---

## Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/) to run the application.
- **Metamask**: A browser-based Ethereum wallet to interact with the blockchain.
- **Smart Contract**: Deploy the smart contract provided in the repository and copy its address and ABI.

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/Colyzo466/item-marketplace-dapp.git
cd item-marketplace-dapp
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
1. Create a `.env` file in the project root.
2. Add the following keys:
   ```env
   VITE_CONTRACT_ADDRESS=<Your_Contract_Address>
   VITE_CONTRACT_ABI=<Your_Contract_ABI>
   ```

### Start the Development Server
```bash
npm run dev
```

Visit the application at `http://localhost:5173`.

---

## Smart Contract Deployment

Deploy the smart contract using Hardhat or Remix. Copy the deployed contract's address and ABI into the `.env` file as described above.

---

## File Structure

```plaintext
src/
├── components/
│   ├── DeleteItem.jsx         # Component to delete an item
│   ├── EditItem.jsx           # Component to edit an item
│   ├── GetOwner.jsx           # Component to fetch contract owner
│   ├── ListItem.jsx           # Component to list a new item
│   ├── PurchaseItem.jsx       # Component to purchase an item
│   ├── Reports.jsx            # Component to generate reports
│   ├── ViewItems.jsx          # Component to view all listed items
│   ├── WithdrawFunds.jsx      # Component to withdraw funds
│
├── constants/
│   └── index.js               # Contains contract address and ABI
│
├── App.jsx                    # Main application file
├── main.jsx                   # Entry point for React
```

---

## Usage Guide

### Interacting with the DApp

1. **List Item**  
   - Navigate to the "List Item" tab.
   - Enter the item details: name, description, price (ETH), and quantity.
   - Click "Submit" to list the item.

2. **View Items**  
   - Navigate to the "View Items" tab.
   - Displays all items listed by the connected seller's account.

3. **Edit Item**  
   - Navigate to the "Edit Item" tab.
   - Enter the item ID and the updated details: name, price (ETH), and quantity.
   - Click "Edit" to update the item.

4. **Purchase Item**  
   - Navigate to the "Purchase Item" tab.
   - Enter the seller's address and item ID.
   - Click "Purchase" to buy the item.

5. **Reports**  
   - Navigate to the "Reports" tab.
   - Displays sales and purchase history.

6. **Withdraw Funds**  
   - Navigate to the "Withdraw" tab.
   - If you are the contract owner, click "Withdraw" to transfer the contract's funds to your wallet.

7. **Delete Item**  
   - Navigate to the "Delete" tab.
   - Enter the item ID to remove it from the marketplace.

8. **Get Owner**  
   - Navigate to the "Get Owner" tab.
   - Displays the current owner of the contract.

---

## Customization

To customize the UI or add additional features:
1. Modify the components in the `src/components/` directory.
2. Update the contract interactions in `src/constants/index.js`.

---

## Deployment

To deploy the app for production:

### Build the Project
```bash
npm run build
```

### Serve the Build
Deploy the `dist/` directory to your hosting provider.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit and push your changes:
   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

Special thanks to the Ethereum and React communities for their resources and tools.

---

Feel free to suggest additional enhancements or issues in the [Issues](https://github.com/Colyzo466/item-marketplace-dapp/issues) section. 🚀


