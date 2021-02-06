// Thank you! https://github.com/SzybkiSasza/gdg-react-workshop/blob/master/electron/connect-electron.ts

import * as net from "net";
import * as childProcess from "child_process";

// Adjust port so that Electron hits React
const port: number = process.env.PORT
    ? Number.parseInt(process.env.PORT, 10) - 100
    : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();
let startedElectron = false;

const tryConnection = () => {
    client.connect({ port }, () => {
        client.end();

        if (!startedElectron) {
            startedElectron = true;
            console.log("starting electron");

            // FIXME: Fix the child process not being killed on app exit
            // perhaps save out the PID and kill it in main once done?
            childProcess.exec(
                'nodemon --watch "build"  --exec "electron ." --inspect=5858',
                {
                    windowsHide: true,
                }
            );
        }
    });
};

tryConnection();

client.on("error", (err) => {
    console.log("Retrying...", err);
    setTimeout(tryConnection, 1000);
});
