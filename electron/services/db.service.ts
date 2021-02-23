import { dbStore } from "../app/store";
import { DbStore, Reward } from "../../src/shared/store.types";
import { v4 as uuidv4 } from "uuid";
interface DbServiceConstructor {
    new (): DbServiceInterface;
}

interface DbServiceInterface {
    getAllRewards: () => DbStore["rewards"];
    addReward: (reward: Reward) => void;
    deleteReward: (rewardId: string) => void;
}

/**
 * A convenience abstraction over the electron-store methods to allow access to certain store elements via simple functions
 */
const dbService: DbServiceConstructor = class DbService
    implements DbServiceInterface {
    getAllRewards = (): Reward[] => {
        return dbStore.get("rewards");
    };
    addReward = (reward: Reward): void => {
        const rewardWithId = { id: uuidv4(), ...reward };
        const updatedRewards = [...this.getAllRewards(), rewardWithId];
        dbStore.set("rewards", updatedRewards);
    };
    deleteReward = (rewardId: string): void => {
        const rewardsToKeep = this.getAllRewards().filter(
            (reward) => reward.id !== rewardId
        );
        dbStore.set("rewards", rewardsToKeep);
    };
};

const dbServiceSingleton = new dbService();
export default dbServiceSingleton;
