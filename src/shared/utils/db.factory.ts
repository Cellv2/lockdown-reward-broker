import { v4 as uuidv4 } from "uuid";
import { Reward } from "../store.types";

export const createReward = (name: string, redeemCost: number): Reward => {
    const reward: Reward = {
        id: uuidv4(),
        name,
        redeemCost,
    };

    return reward;
};
