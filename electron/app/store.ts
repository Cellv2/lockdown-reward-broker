import Store from "electron-store";

import {
    accessLogSchema,
    beneficiariesSchema,
    rewardsSchema,
    dbSchema,
} from "./store.schemas";
import accessLogFixture from "./__tests__/access-log.fixture.json";
import beneficiariesFixture from "./__tests__/beneficiaries.fixture.json";
import rewardsFixture from "./__tests__/rewards.fixture.json";
import dbFixture from "./__tests__/db.fixture.json";

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

const rewardsStore = new Store({
    name: "rewards",
    schema: rewardsSchema,
});

const beneficiariesStore = new Store({
    name: "beneficiaries",
    schema: beneficiariesSchema,
});

const accessLogStore = new Store({
    name: "access-log",
    schema: accessLogSchema,
});

const dbStore = new Store({
    name: "db",
    schema: dbSchema,
});

if (createTestData) {
    // rewardsStore.clear();
    // rewardsStore.set("data", rewardsFixture);
    
    // beneficiariesStore.clear();
    // beneficiariesStore.set("data", beneficiariesFixture);
    
    // accessLogStore.clear();
    // accessLogStore.set("data", accessLogFixture);
    dbStore.clear();
    dbStore.set("accessLog", accessLogFixture);
    dbStore.set("beneficaries", beneficiariesFixture)
    dbStore.set("rewards", rewardsFixture);
}
