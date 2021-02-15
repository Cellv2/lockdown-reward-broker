import Store from "electron-store";

const store = new Store();

// store.set("unicorn", "🦄");
// console.log(store.get("unicorn"));
// //=> '🦄'

// // Use dot-notation to access nested properties
// store.set("foo.bar", true);
// console.log(store.get("foo"));
// //=> {bar: true}

// store.delete("unicorn");
// console.log(store.get("unicorn"));
// //=> undefined

const logSchema = {};
const fundsSchema = {};

const rewards = [
    {
        name: "magic",
        redeemCost: 15,
    },
];

const beneficiaries = {
    child1: {
        currentFunds: 10,
        purchaseHistory: [
            {
                timestamp: "thisisatimeIswear",
                fundsBefore: 25,
                redeemedReward: "magic",
                rewardCost: 15,
                fundsAfter: 10,
            },
        ],
        fundingHistory: [
            {
                timestamp: "thisisatimeIswear",
                wasAuthorized: true,
                fundsBefore: 0,
                fundsAdded: 25,
                fundsAfter: 25,
            },
            {
                timestamp: "thisisatimeIswear",
                wasAuthorized: false,
                fundsBefore: 0,
                fundsAdded: 1337,
                fundsAfter: 0,
            },
        ],
    },
};

const accessLog = {
    page: "Admin",
    wasAuthorized: true,
    timestamp: "thisisatimeIswear",
};
