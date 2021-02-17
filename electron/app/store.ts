import Store, { Schema } from "electron-store";

import accessLogFixture from "./__tests__/access-log.fixture.json";
import beneficiariesFixture from "./__tests__/beneficiaries.fixture.json";
import rewardsFixture from "./__tests__/rewards.fixture.json";

const createTestData: boolean = true;

// const store = new Store();

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

if (createTestData) {
    rewardsStore.clear();
    rewardsStore.set("data", rewardsFixture);

    beneficiariesStore.clear();
    beneficiariesStore.set("data", beneficiariesFixture);

    accessLogStore.clear();
    accessLogStore.set("data", accessLogFixture);
}
