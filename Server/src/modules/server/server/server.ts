import http, { IncomingMessage } from "http";
import IServer from "./server.interface";
import { Duplex } from "stream";
import IService from "../service/service.interface";
import SessionConnection from "../requests/session-connection/session-connection";
import IWSService from "../wsService/wsService.interface";

export default class Server implements IServer {

    constructor(
        private readonly server: http.Server, 
        private readonly service: IService,
        private readonly wsService: IWSService
    ) {};

    run(port: number, cb: () => void) {
        const instanceWS = this.wsService.ws;

        this.server
            .listen({ port }, cb)
            .on('upgrade',  
                async (request: IncomingMessage, socket: Duplex, head: Buffer) => 
                    this.service.connectToSession(
                        new SessionConnection(
                            await instanceWS(request, socket, head)
                        )
                    )
            );
    };
};