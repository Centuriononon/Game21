import http, { IncomingMessage } from "http";
import IServer from "./server.interface";
import { Duplex } from "stream";
import IService from "../service/service.interface";
import IWSService from "../wsService/wsService.interface";
import ParsedURL from "../../../common/parsed-url/parsed-url";
import ServerUpgrade from "../requests/server-upgrade/server-upgrade";

export default class Server implements IServer {
    constructor(
        private readonly server: http.Server, 
        private readonly service: IService,
        private readonly wsService: IWSService
    ) {};

    run(port: number, log: string) {
        const instanceWS = this.wsService.ws;
        
        this.server
            .listen({ port }, () => console.log(log))
            .on('upgrade',  
                async (request: IncomingMessage, socket: Duplex, head: Buffer) => {
                    const ws = await instanceWS(request, socket, head);
                    const upgrade = new ServerUpgrade(request, ws);
                    const url = new ParsedURL(request.url);
                    const route = url.route();
                    const sessionID = url.query().id.toString();

                    if (route === '/session' && sessionID) 
                        this.service.connectToSession(upgrade, sessionID);
                }
            )
            .on('error', 
                err => {
                    console.error('Server running is crashed 💥');
                    console.info('Error:\n', err);
                    process.exit(1);
                }
            )
    };
};