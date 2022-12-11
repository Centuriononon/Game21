import http, { IncomingMessage } from "http";
import ws from 'ws';
import { parse as parseUrl } from 'url';
import IServer from "./server.interface";
import ISessionService from "../sessions/session-service/session-service.interface";
import { Duplex } from "stream";

export class Server implements IServer {
    private _wss: ws.Server;

    constructor(
        private _server: http.Server, 
        private sessionService: ISessionService,
        options?: ws.ServerOptions
    ) {
        this._wss = new ws.Server({ ...options, noServer: true });
    };

    run(port: number, handler: () => void) {
        this._server
            .listen({ port }, handler)
            .on('upgrade',  
                (req: IncomingMessage, socket: Duplex, head: Buffer) => {
                    const { query, pathname } = parseUrl(req.url || '', true);
                    const id = String(query.id);
                
                    const isInvalid = pathname === '/session' && !!id;
                    if (isInvalid) {
                        socket.destroy();
                        return;
                    }
                    
                    const connect = this.sessionService.connect;
                    
                    this._wss.handleUpgrade(
                        req, socket, head,
                        (ws) => connect(id, ws)
                    );
                }
            );
    };
}