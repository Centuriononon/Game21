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

    run(port: number, handler: () => void) {
        this.server
            .listen({ port }, handler)
            .on('upgrade',  
                async (request: IncomingMessage, socket: Duplex, head: Buffer) => {
                    const ws = await this.wsService.ws(request, socket, head);
                    const connection = new SessionConnection(ws);

                    if (connection.valid())
                        this.service.connectToSession(connection)
                    else 
                        socket.destroy(new Error('Invalid connection.'));
                }
            );
    };
};