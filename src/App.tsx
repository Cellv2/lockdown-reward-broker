import React, { useCallback, useState } from "react";
import { HashRouter, Link } from "react-router-dom";

import RouterSwitch from "./routes/RouterSwitch";

import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import electronRuntime from "./electronRuntime";
import { createReward } from "./shared/utils/db.factory";
import UserContext from "./app/UserContext";
import { Beneficiary } from "./shared/store.types";

const electronTestEvent = () => {
    console.log("button clicked");
    const message = "this is the front end!";
    // electronRuntime.subscribe("testChannel", (data) => {
    //     console.log(data)
    // });

    electronRuntime.send("testChannel", message);
};

const testAddReward = () => {
    const name = "Test Reward";
    const cost = 30;
    const reward = createReward(name, cost);

    electronRuntime.send("testAddReward", reward);
};

function App() {
    const [user, setUser] = useState<Beneficiary | undefined>();

    //TODO: make a call to the db service to extract the whole user based on the userId
    const updateUser = useCallback(
        (userId: string) => {
            const testUser: Beneficiary = {
                id: "6ce580d2-8955-43d4-828f-8651992f5db7",
                name: "child1",
                currentFunds: 10,
                purchaseHistory: [
                    {
                        timestamp: "thisisatimeIswear",
                        fundsBefore: 25,
                        redeemedReward: "magic",
                        rewardCost: 15,
                        fundsAfter: 10,
                    },
                ],
                fundingHistory: [
                    {
                        timestamp: "thisisatimeIswear",
                        wasAuthorized: true,
                        fundsBefore: 0,
                        fundsAdded: 25,
                        fundsAfter: 25,
                    },
                    {
                        timestamp: "thisisatimeIswear",
                        wasAuthorized: false,
                        fundsBefore: 0,
                        fundsAdded: 1337,
                        fundsAfter: 0,
                    },
                ],
                allowedRewards: ["40852072-c3b6-4533-ab9f-2f5716a70ad4"],
            };
            setUser(testUser);
        },
        [setUser]
    );

    return (
        <HashRouter>
            <UserContext.Provider value={{ user, updateUser }}>
                <Link to="/">Home</Link>
                <br />
                <Link to="/admin">Admin</Link>
                <br />
                <Link to="/addfunds">Add Funds</Link>
                <br />
                <Link to="/rewards">Rewards</Link>
                <br />
                <Link to="/qwerty">Dead end</Link>
                <RouterSwitch />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        <button onClick={testAddReward}>
                            Click me for an Electron event
                        </button>
                    </header>
                </div>
            </UserContext.Provider>
        </HashRouter>
    );
}

export default App;
