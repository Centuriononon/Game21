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

            const status = this.sessionService.connect(client, sessionID);

            if (!status.successful())
                connection.reject('The required session is not available.');
        }
        else 
            connection.reject('Invalid connection format.');
    };
};