type AccessLog = {
    page: string;
    timestamp: string;
    wasAuthorized: boolean;
};

export type Beneficiary = {
    id: string;
    name: string;
    currentFunds: number;
    purchaseHistory: PurchaseHistory[];
    fundingHistory: FundingHistory[];
    allowedRewards?: Reward["id"][];
};

type FundingHistory = {
    timestamp: string;
    wasAuthorized: boolean;
    fundsBefore: number;
    fundsAdded: number;
    fundsAfter: number;
};

type PurchaseHistory = {
    timestamp: string;
    fundsBefore: number;
    redeemedReward: string;
    rewardCost: number;
    fundsAfter: number;
};

export type Reward = {
    id: string;
    name: string;
    redeemCost: number;
};

export type DbStore = {
    accessLog: AccessLog[];
    beneficiaries: Beneficiary[];
    rewards: Reward[];
};
