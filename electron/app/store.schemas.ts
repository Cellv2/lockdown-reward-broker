import { Schema } from "electron-store";
import { DbStore } from "../../src/shared/store.types";

// export const dbSchema: Schema<Record<string, unknown>> = {
export const dbSchema: Schema<DbStore> = {
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
                id: { type: "string" },
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
                allowedRewards: {
                    type: "array",
                    items: { type: "string" },
                },
            },
        },
    },
    rewards: {
        type: "array",
        items: {
            type: "object",
            properties: {
                id: { type: "string" },
                name: { type: "string" },
                redeemCost: { type: "number" },
            },
        },
    },
};
