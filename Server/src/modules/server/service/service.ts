import Client from "../../client/client";
import ISessionService from "../../sessions/session-service/session-service.interface";
import IService from "./service.interface";
import IServerUpgrade from "../requests/server-upgrade/server-upgrade.interface";

export default class Service implements IService {
    constructor(private sessionService: ISessionService) {};

    connectToSession(upgrade: IServerUpgrade, sessionID: string) {
        const ws = upgrade.socket();

        try {
            const client = new Client(ws);
            this.sessionService.connect(client, sessionID);
        } catch (e) {
            if (e instanceof Error) {
                ws.close(1008, e.message);
            } else {
                ws.close(0, 'Something went wrong.');
                throw e
            }
        };
    };
};