import Store from "electron-store";
import { dbSchema } from "./store.schemas";
import { DbStore } from "../../shared/store.types";
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

export const dbStore = new Store<DbStore>({
    name: "db",
    schema: dbSchema,
});

if (createTestData) {
    dbStore.clear();
    dbStore.set("accessLog", accessLogFixture);
    dbStore.set("beneficaries", beneficiariesFixture);
    dbStore.set("rewards", rewardsFixture);
}
