const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ItemListing", function () {
  const LISTING_FEE = ethers.parseEther("0.01");

  async function deployItemListingFixture() {
    const [owner, seller, buyer] = await ethers.getSigners();
    const ItemListing = await ethers.getContractFactory("ItemListing");
    const itemListing = await ItemListing.deploy(LISTING_FEE);

    return { itemListing, owner, seller, buyer, LISTING_FEE };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { itemListing, owner } = await loadFixture(deployItemListingFixture);
      expect(await itemListing.getOwner()).to.equal(owner.address);
    });

    it("Should set the correct listing fee", async function () {
      const { itemListing, LISTING_FEE } = await loadFixture(deployItemListingFixture);
      expect(await itemListing.listingFee()).to.equal(LISTING_FEE);
    });
  });

  describe("Item Management", function () {
    describe("Listing", function () {
      it("Should list an item successfully", async function () {
        const { itemListing, seller, LISTING_FEE } = await loadFixture(deployItemListingFixture);
        
        await expect(itemListing.connect(seller).listItem(
          "Test Item",
          "Test Description",
          ethers.parseEther("1"),
          10,
          { value: LISTING_FEE }
        )).to.emit(itemListing, "ItemListed")
          .withArgs(seller.address, "Test Item", ethers.parseEther("1"), 10);
      });

      it("Should fail if listing fee is incorrect", async function () {
        const { itemListing, seller } = await loadFixture(deployItemListingFixture);
        
        await expect(itemListing.connect(seller).listItem(
          "Test Item",
          "Test Description",
          ethers.parseEther("1"),
          10,
          { value: 0 }
        )).to.be.revertedWith("Listing fee must be paid");
      });
    });

    describe("Editing", function () {
      it("Should edit an item successfully", async function () {
        const { itemListing, seller, LISTING_FEE } = await loadFixture(deployItemListingFixture);
        
        await itemListing.connect(seller).listItem(
          "Test Item",
          "Test Description",
          ethers.parseEther("1"),
          10,
          { value: LISTING_FEE }
        );

        await expect(itemListing.connect(seller).editItem(
          0,
          "Updated Item",
          ethers.parseEther("2"),
          5
        )).to.emit(itemListing, "ItemEdited")
          .withArgs(seller.address, 0, "Updated Item", ethers.parseEther("2"), 5);
      });
    });

    describe("Purchasing", function () {
      it("Should allow purchasing an item", async function () {
        const { itemListing, seller, buyer, LISTING_FEE } = await loadFixture(deployItemListingFixture);
        const price = ethers.parseEther("1");
        
        await itemListing.connect(seller).listItem(
          "Test Item",
          "Test Description",
          price,
          10,
          { value: LISTING_FEE }
        );

        await expect(itemListing.connect(buyer).purchaseItem(
          seller.address,
          0,
          { value: price }
        )).to.emit(itemListing, "ItemPurchased")
          .withArgs(buyer.address, "Test Item", price, 1);

        await expect(itemListing.connect(buyer).purchaseItem(
          seller.address,
          0,
          { value: price }
        )).to.changeEtherBalances(
          [buyer, seller],
          [-price, price]
        );
      });
    });

    describe("Reports", function () {
      it("Should generate sales report", async function () {
        const { itemListing, seller, LISTING_FEE } = await loadFixture(deployItemListingFixture);
        
        await itemListing.connect(seller).listItem(
          "Test Item",
          "Test Description",
          ethers.parseEther("1"),
          10,
          { value: LISTING_FEE }
        );

        const salesReport = await itemListing.generateSalesReport();
        expect(salesReport.length).to.be.greaterThan(0);
      });

      it("Should generate purchase history", async function () {
        const { itemListing, seller, buyer, LISTING_FEE } = await loadFixture(deployItemListingFixture);
        
        await itemListing.connect(seller).listItem(
          "Test Item",
          "Test Description",
          ethers.parseEther("1"),
          10,
          { value: LISTING_FEE }
        );

        const purchaseHistory = await itemListing.generatePurchaseHistory(buyer.address);
        expect(purchaseHistory).to.not.be.undefined;
      });
    });
  });

  describe("Withdrawals", function () {
    it("Should allow owner to withdraw funds", async function () {
      const { itemListing, owner, seller, LISTING_FEE } = await loadFixture(deployItemListingFixture);
      
      await itemListing.connect(seller).listItem(
        "Test Item",
        "Test Description",
        ethers.parseEther("1"),
        10,
        { value: LISTING_FEE }
      );

      await expect(itemListing.connect(owner).withdrawFunds())
        .to.changeEtherBalance(owner, LISTING_FEE);
    });

    it("Should prevent non-owner from withdrawing funds", async function () {
      const { itemListing, seller } = await loadFixture(deployItemListingFixture);
      
      await expect(itemListing.connect(seller).withdrawFunds())
        .to.be.revertedWith("Only the owner can perform this action");
    });
  });
});




