import { contextBridge, ipcRenderer } from "electron";

type Unsubscribe = () => void;
type Listener = (...args: any[]) => void;

contextBridge.exposeInMainWorld("electronRuntime", {
    send: (channel: string, data: any) => {
        console.log("send was hit!")
        let validChannels = ["testChannel"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    subscribe: (channel: string, listener: Listener): Unsubscribe => {
        let validChannels = ["testChannel_sub"];
        // if (validChannels.includes(channel)) {};
        const subscription = (
            event: Electron.IpcRendererEvent,
            ...args: any[]
        ) => listener(...args);

        ipcRenderer.on(channel, subscription);

        return () => {
            ipcRenderer.removeListener(channel, subscription);
        };
    },
});
