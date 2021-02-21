type Unsubscribe = () => void;
type Listener = (...args: any[]) => void;

interface ElectronRuntime {
    send: (channel: string, data: any) => void;
    subscribe: (channel: string, listener: Listener) => Unsubscribe;
}

const electronRuntime = (window as any).electronRuntime as ElectronRuntime;
export default electronRuntime;
