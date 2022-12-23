import { WebSocket } from "ws";

export default interface ISessionConnection {
    valid: () => boolean;
    sessionID: () => string;
    ws: () => WebSocket;
    reject: (test?: string) => void;
}