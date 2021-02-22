import { dbStore } from "../app/store";
import { DbStore, Reward, RewardWithoutId } from "../../shared/store.types";
import { v4 as uuidv4 } from "uuid";
interface DbServiceConstructor {
    new (): DbServiceInterface;
}

interface DbServiceInterface {
    getAllRewards: () => DbStore["rewards"];
    addReward: (reward: RewardWithoutId) => void;
}

/**
 * A convenience abstraction over the electron-store methods to allow access to certain store elements via simple functions
 */
const dbService: DbServiceConstructor = class DbService
    implements DbServiceInterface {
    getAllRewards = () => {
        return dbStore.get("rewards");
    };
    addReward = (reward: RewardWithoutId): void => {
        const rewardWithId = { id: uuidv4(), ...reward };
        const updatedRewards = [...this.getAllRewards(), rewardWithId];
        dbStore.set("rewards", updatedRewards);
    };
};

const dbServiceSingleton = new dbService();
export default dbServiceSingleton;
