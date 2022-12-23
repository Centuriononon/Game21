import ISessionService from "./session-service.interface";
import StatusSessionConnection from "../connection/status-session-connection/status-session-connection";
import ISessionRepo from "../session-repo/session-repo.interface";
import IClient from "../../client/client.interface";

export default class SessionService implements ISessionService {
    constructor(private readonly repo: ISessionRepo) {}

    connect(client: IClient, sessionID: string) {
        const session = this.repo.session(sessionID);
        const entered = session?.enter(client);

        return new StatusSessionConnection(entered);
    };
};