import { WebSocket } from 'ws';
import IClient, { MessageEventHandler } from './client.interface';

export default class Client implements IClient {
    constructor(private ws: WebSocket) {}

    send(m: any) { 
        this.ws.send(m) 
    };
    subMessageEvent(cb: MessageEventHandler) {
        this.ws.onmessage = cb;
    }
}