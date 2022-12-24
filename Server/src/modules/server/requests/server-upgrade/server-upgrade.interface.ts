import { IncomingMessage } from 'http';
import { WebSocket } from "ws";

export default interface IServerUpgrade {
    request: () => IncomingMessage;
    socket: () => WebSocket;
}