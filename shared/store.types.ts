type AccessLog = {
    page: string;
    timestamp: string;
    wasAuthorized: boolean;
};

type Beneficary = {
    id: string;
    name: string;
    currentFunds: string;
    purchaseHistory: PurchaseHistory[];
    fundingHistory: FundingHistory[];
};

type FundingHistory = {
    timestamp: string;
    wasAuthorized: boolean;
    fundsBefore: number;
    rewardCost: number;
    fundsAfter: number;
};

type PurchaseHistory = {
    timestamp: string;
    fundsBefore: number;
    redeemedReward: string;
    rewardCost: number;
    fundsAfter: number;
};

export type Reward = RewardWithoutId & {
    id: string;
};

/**
 * The ID is added electron side, so we trim out the ID from anything front end facing
 */
export type RewardWithoutId = {
    name: string;
    redeemCost: number;
};

export type DbStore = {
    accessLog: AccessLog[];
    beneficiaries: Beneficary[];
    rewards: Reward[];
};
