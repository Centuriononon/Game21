import { IncomingMessage } from 'http';
import { UrlWithParsedQuery } from 'url';
import { Duplex } from "stream";
import IWSUpgrade from "./ws-upgrade.interface";
import ParsedURL from 'common/parsed-url/parsed-url';

export default class WSUpgrade implements IWSUpgrade {
    private readonly _url: UrlWithParsedQuery;
    private readonly _socket: Duplex;

    constructor(req: IncomingMessage, socket: Duplex) {
        this._socket = socket;
        this._url = new ParsedURL(req.url).url();
    };

    url() {
        return this._url;
    };

    destroy(err: Error) {
        this._socket.destroy(err)
    };
}