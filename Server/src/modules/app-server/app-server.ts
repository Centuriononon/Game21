import http from "http";
import ws from 'ws';
import { parse as parseUrl } from 'url';
import IAppServer from "./app-server.interface";
import ISessionService from "../session-service/session-service.interface";

export default class AppServer implements IAppServer {
    private _wss: ws.Server;

    constructor(
        private _server: http.Server, 
        private sessionService: ISessionService,
        options?: ws.ServerOptions
    ) {
        this._wss = new ws.Server({ ...options, noServer: true });
    };

    private connection(sessionId: string, ws: ws.WebSocket) {
        console.log('connection!');
        this.sessionService.enterSession(sessionId, ws);
    };

    run(port: number, handler: () => void) {
        this._server.on('upgrade', (request, socket, head) => {
            const url = parseUrl(request.url || '', true);
            const id = String(url.query.id);
            const pathname = url.pathname;
        
            if (pathname === '/session' && id) {
                this._wss.handleUpgrade(
                    request, socket, head,
                    (ws) => this.connection(id, ws)
                );
            };
        })
        
        this._server.listen({ port }, handler);
    };
}