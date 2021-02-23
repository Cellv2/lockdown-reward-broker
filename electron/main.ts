import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as isDev from "electron-is-dev";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

import "./app/store";
import { Reward } from "../src/shared/store.types";
import dbServiceSingleton from "./services/db.service";

let win: BrowserWindow | null = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, "preload.js"),
        },
    });

    if (isDev) {
        win.loadURL("http://localhost:3000/index.html");
    } else {
        // 'build/index.html'
        win.loadURL(`file://${__dirname}/../index.html`);
    }

    //@ts-ignore
    win.on("closed", () => (win = null));

    // Hot Reloading
    if (isDev) {
        // 'node_modules/.bin/electronPath'
        require("electron-reload")(__dirname, {
            electron: path.join(
                __dirname,
                "..",
                "..",
                "node_modules",
                ".bin",
                "electron" + (process.platform === "win32" ? ".cmd" : "")
            ),
            forceHardReset: true,
            hardResetMethod: "exit",
        });
    }

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log("An error occurred: ", err));

    if (isDev) {
        win.webContents.openDevTools();
    }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

ipcMain.on("testChannel", async (event, message: string) => {
    console.log(message);
    console.log("testChannel");
    event.reply("hi there from electron!");
});

ipcMain.on("testAddReward", async (event, reward: Reward) => {
    dbServiceSingleton.addReward(reward);
    console.log("Reward was added");
});
