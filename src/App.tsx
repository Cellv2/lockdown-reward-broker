import React from "react";
import { HashRouter, Link } from "react-router-dom";

import RouterSwitch from "./routes/RouterSwitch";

import logo from "./logo.svg";
import "./App.css";

import electronRuntime from "./electronRuntime";

const electronTestEvent = () => {
    console.log("button clicked");
    const message = "this is the front end!";
    // electronRuntime.subscribe("testChannel", (data) => {
    //     console.log(data)
    // });

    electronRuntime.send("testChannel", message);
};

function App() {
    return (
        <HashRouter>
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
                    <button onClick={electronTestEvent}>
                        Click me for an Electron event
                    </button>
                </header>
            </div>
        </HashRouter>
    );
}

export default App;
