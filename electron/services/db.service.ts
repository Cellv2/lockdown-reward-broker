import { dbStore } from "../app/store";
import { DbStore } from "../app/store.types";

interface DbServiceConstructor {
    new (): DbServiceInterface;
}

interface DbServiceInterface {
    getAllRewards: () => DbStore["rewards"];
}

/**
 * An convenience abstraction over the electron-store methods to allow access to certain store elements via simple functions
 */
const dbService: DbServiceConstructor = class DbService
    implements DbServiceInterface {
    getAllRewards = () => {
        return dbStore.get("rewards");
    };
};

const dbServiceSingleton = new dbService();
export default dbServiceSingleton;
