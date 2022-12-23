import { Duplex } from 'stream';
import { IncomingMessage } from 'http';
import { WebSocket } from "ws";

export default interface IWSService {
    ws: (request: IncomingMessage, socket: Duplex, head: Buffer) => Promise<WebSocket>
};