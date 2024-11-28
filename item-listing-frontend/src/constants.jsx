export const CONTRACT_ADDRESS = "0xd000eB0F1d6f41Ab1AAEf714959119cae1c80026";
export const CONTRACT_ABI = [
    {
        "inputs":[
        {"internalType":"uint256",
            "name":"_fee",
            "type":"uint256"
        }
    ],
        "stateMutability":"nonpayable",
        "type":"constructor"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"seller",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"itemId",
                "type":"uint256"
            }
        ],
        "name":"ItemDeleted",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"seller",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"itemId",
                "type":"uint256"
            },
            {"indexed":false,
                "internalType":"string",
                "name":"name",
                "type":"string"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"price",
                "type":"uint256"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"quantity",
                "type":"uint256"
            }
        ],
        "name":"ItemEdited",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"seller",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"string",
                "name":"name",
                "type":"string"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"price",
                "type":"uint256"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"quantity",
                "type":"uint256"
            }
        ],
        "name":"ItemListed",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"buyer",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"string",
                "name":"name",
                "type":"string"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"price",
                "type":"uint256"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"quantity",
                "type":"uint256"
            }
        ],
        "name":"ItemPurchased",
        "type":"event"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"_itemId",
                "type":"uint256"
            }
        ],
        "name":"deleteItem",
        "outputs":[],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"_itemId",
                "type":"uint256"
            },
            {
                "internalType":"string",
                "name":"_name",
                "type":"string"
            },
            {
                "internalType":"uint256",
                "name":"_price",
                "type":"uint256"
            },
            {
                "internalType":"uint256",
                "name":"_quantity",
                "type":"uint256"
            }
        ],
        "name":"editItem",
        "outputs":[],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"_buyer",
                "type":"address"}
            ],
            "name":"generatePurchaseHistory",
            "outputs":[
                {
                    "components":[
                        {
                            "internalType":"address",
                            "name":"buyer",
                            "type":"address"
                        },
                        {
                            "internalType":"string",
                            "name":"itemName",
                            "type":"string"
                        },
                        {
                            "internalType":"uint256",
                            "name":"price",
                            "type":"uint256"
                        },
                        {
                            "internalType":"uint256",
                            "name":"quantityPurchased",
                            "type":"uint256"
                        }
                    ],
                    "internalType":"struct MarketplaceReports.PurchaseHistory[]",
                    "name":"",
                    "type":"tuple[]"
                }
            ],
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[],
            "name":"generateSalesReport",
            "outputs":[
                {
                    "components":[
                        {
                            "internalType":"address",
                            "name":"seller",
                            "type":"address"
                        },
                        {
                            "internalType":"string",
                            "name":"itemName",
                            "type":"string"
                        },
                        {
                            "internalType":"uint256",
                            "name":"price",
                            "type":"uint256"
                        },
                        {
                            "internalType":"uint256",
                            "name":"quantitySold",
                            "type":"uint256"
                        }
                    ],
                    "internalType":"struct MarketplaceReports.SalesReport[]",
                    "name":"",
                    "type":"tuple[]"
                }
            ],
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[
                {
                    "internalType":"address",
                    "name":"_seller",
                    "type":"address"
                },
                {
                    "internalType":"uint256",
                    "name":"_itemId",
                    "type":"uint256"
                }
            ],
            "name":"getItemDetails",
            "outputs":[
                {
                    "internalType":"string",
                    "name":"",
                    "type":"string"
                },
                {
                    "internalType":"string",
                    "name":"",
                    "type":"string"
                },
                {
                    "internalType":"uint256",
                    "name":"",
                    "type":"uint256"
                },
                {
                    "internalType":"uint256",
                    "name":"",
                    "type":"uint256"
                }
            ],
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[],
            "name":"getOwner",
            "outputs":[
                {
                    "internalType":"address",
                    "name":"",
                    "type":"address"
                }
            ],
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[
                {
                    "internalType":"address",
                    "name":"_seller",
                    "type":"address"
                }
            ],
            "name":"getSellerItemCount",
            "outputs":[
                {
                    "internalType":"uint256",
                    "name":"","type":"uint256"
                }
            ],
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[
                {
                    "internalType":"string",
                    "name":"_name","type":"string"
                },
                {
                    "internalType":"string",
                    "name":"_description",
                    "type":"string"
                },
                {
                    "internalType":"uint256",
                    "name":"_price",
                    "type":"uint256"
                },
                {
                    "internalType":"uint256",
                    "name":"_quantity",
                    "type":"uint256"
                }
            ],
            "name":"listItem",
            "outputs":[],
            "stateMutability":"payable",
            "type":"function"
        },
        {
            "inputs":[],
            "name":"listingFee",
            "outputs":[
                {
                    "internalType":"uint256",
                    "name":"",
                    "type":"uint256"
                }
            ],
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[
                {
                    "internalType":"address",
                    "name":"_seller",
                    "type":"address"
                },
                {
                    "internalType":"uint256",
                    "name":"_itemId",
                    "type":"uint256"
                }
            ],
            "name":"purchaseItem",
            "outputs":[],
            "stateMutability":"payable",
            "type":"function"
        },
        {
            "inputs":[],
            "name":"withdrawFunds",
            "outputs":[],
            "stateMutability":"nonpayable",
            "type":"function"
        }
    ];
     
