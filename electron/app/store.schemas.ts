import { Schema } from "electron-store";

export const dbSchema: Schema<Record<string, unknown>> = {
    accessLog: {
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
    beneficiaries: {
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
    rewards: {
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
