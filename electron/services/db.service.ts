import { dbStore } from "../app/store";
import { DbStore, Reward } from "../../shared/store.types";

interface DbServiceConstructor {
    new (): DbServiceInterface;
}

interface DbServiceInterface {
    getAllRewards: () => DbStore["rewards"];
    addReward: (reward: Reward) => void;
}

/**
 * An convenience abstraction over the electron-store methods to allow access to certain store elements via simple functions
 */
const dbService: DbServiceConstructor = class DbService
    implements DbServiceInterface {
    getAllRewards = () => {
        return dbStore.get("rewards");
    };
    addReward = (reward: Reward): void => {
        const updatedRewards = [...this.getAllRewards(), reward];
        dbStore.set("rewards", updatedRewards);
    };
};

const dbServiceSingleton = new dbService();
export default dbServiceSingleton;
