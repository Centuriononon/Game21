import ParsedURL from '../../../../common/parsed-url/parsed-url';
import ISessionConnection from "./session-connection.interface";
import { WebSocket } from 'ws';

export default class SessionConnection implements ISessionConnection {
    private readonly url: ParsedURL;
    private readonly _sessionID: string;

    constructor(private readonly _ws: WebSocket) {
        this.url = new ParsedURL(_ws.url);
        this._sessionID = String(this.url.query().id);
    };

    valid() {
        return !!this._sessionID && this.url.route() === '/session';
    };

    sessionID() {
        return this._sessionID;
    };

    ws() {
        return this._ws;
    };

    reject() {
        this._ws.close(1008);
    };
};