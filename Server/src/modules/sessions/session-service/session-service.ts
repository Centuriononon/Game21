import ISessionService from "./session-service.interface";
import ISessionRepo from "../session-repo/session-repo.interface";
import IClient from "../../client/client.interface";

export default class SessionService implements ISessionService {
    constructor(private readonly repo: ISessionRepo) {}

    connect(client: IClient, sessionID: string) {
        const session = this.repo.session(sessionID);
        session.connect(client);
    };
};