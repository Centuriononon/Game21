import { IncomingMessage } from 'http';
import IServerUpgrade from "./server-upgrade.interface";
import { WebSocket } from 'ws';

export default class ServerUpgrade implements IServerUpgrade {
    constructor(
        private readonly _request: IncomingMessage,
        private readonly _ws: WebSocket
    ) {};

    socket() {
        return this._ws;
    };

    request() {
        return this._request;
    };
};