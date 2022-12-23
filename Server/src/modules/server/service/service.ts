import Client from "../../client/client";
import ISessionService from "../../sessions/session-service/session-service.interface";
import IService from "./service.interface";
import ISessionConnection from "../requests/session-connection/session-connection.interface";

export default class Service implements IService {
    constructor(private sessionService: ISessionService) {};

    connectToSession(connection: ISessionConnection) {
        if (connection.valid()) {
            const client = new Client(connection.ws());
            const sessionID = connection.sessionID();

            this.sessionService.connect(client, sessionID);
        }
        else 
            connection.reject();
    };
};