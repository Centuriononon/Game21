import http, { IncomingMessage } from "http";
import ws from 'ws';
import IAppServer from "./app-server.interface";
import ISessionService from "../sessions/session-service/session-service.interface";
import { Duplex } from "stream";
import WSUpgrade from "common/ws-upgrade/ws-upgrade";

export class AppServer implements IAppServer {
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
                    const upgrade = new WSUpgrade(req, socket);
                    const url = upgrade.url();
                    const   pathname    = url.pathname, 
                            id          = String(url.query.id);

                    const isInvalid = pathname === '/session' && !!id;
                    if (isInvalid) 
                        return upgrade.destroy(new Error('Invalid connection format.'));
                    
                    this._wss.handleUpgrade(
                        req, socket, head,
                        (ws) => { 
                            const status = this.sessionService.connect(ws, id);

                            if (!status.successful())
                                ws.close(1008, 'Required session is not available or is closed.');
                        }
                    );
                }
            );
    };


}