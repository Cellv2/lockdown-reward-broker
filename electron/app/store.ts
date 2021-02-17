import Store, { Schema } from "electron-store";

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

const rewardsSchema: Schema<Record<string, unknown>> = {
    data: {
        type: "array",
        items: {
            type: "object",
            properties: {
                name: { type: "string" },
                redeemCost: { type: "number" },
            },
        },
    },
};

const rewardsStore = new Store({
    name: "rewards",
    schema: rewardsSchema,
});

const rewards = [
    {
        name: "magic",
        redeemCost: 15,
    },
];

// need to have a top level key ("data") due to electron-store
const beneficiariesSchema: Schema<Record<string, unknown>> = {
    data: {
        type: "array",
        items: {
            type: "object",
            properties: {
                name: { type: "string" },
                currentFunds: { type: "number" },
                purchaseHistory: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            timestamp: { type: "string" },
                            fundsBefore: { type: "number" },
                            redeemedReward: { type: "string" },
                            rewardCost: { type: "number" },
                            fundsAfter: { type: "number" },
                        },
                    },
                },
                fundingHistory: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            timestamp: { type: "string" },
                            wasAuthorized: { type: "boolean" },
                            fundsBefore: { type: "number" },
                            rewardCost: { type: "number" },
                            fundsAfter: { type: "number" },
                        },
                    },
                },
            },
        },
    },
};

const beneficiariesStore = new Store({
    name: "beneficiaries",
    schema: beneficiariesSchema,
});

const beneficiaries = {
    data: [
        {
            name: "child1",
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
    ],
};

const accessLogSchema: Schema<Record<string, unknown>> = {
    data: {
        type: "array",
        items: {
            type: "object",
            properties: {
                page: { type: "string" },
                timestamp: { type: "string" },
                wasAuthorized: { type: "boolean" },
            },
        },
    },
};

const accessLogStore = new Store({
    name: "accessLog",
    schema: accessLogSchema,
});

const accessLog = {
    page: "Admin",
    timestamp: "thisisatimeIswear",
    wasAuthorized: true,
};
