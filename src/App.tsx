import React from "react";
import { HashRouter, Link } from "react-router-dom";

import RouterSwitch from "./routes/RouterSwitch";

import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import electronRuntime from "./electronRuntime";
import { createReward } from "./shared/utils/db.factory";
import UserContext from "./app/UserContext";

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
    return (
        <HashRouter>
            <UserContext.Provider value={"12345"}>
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
