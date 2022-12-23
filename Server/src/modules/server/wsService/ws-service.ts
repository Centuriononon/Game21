import { IncomingMessage } from 'http';
import { Duplex } from 'stream';
import IWSService from "./wsService.interface";
import ws, { WebSocket } from "ws";

export default class WSService implements IWSService {
    private readonly wss = new ws.Server({ noServer: true });
    constructor() {};

    ws(request: IncomingMessage, socket: Duplex, head: Buffer): Promise<WebSocket> {
        return new Promise(handleWS => 
            this.wss.handleUpgrade(request, socket, head, handleWS)
        );
    };
};