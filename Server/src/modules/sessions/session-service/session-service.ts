import Client from "../../client/client";
import WebSocket from "ws";
import ISessionService from "./session-service.interface";
import Session from "../session/session";
import SessionRepo from "../session-repo/session-repo";

export default class SessionService implements ISessionService {
    private repo = new SessionRepo();
    constructor() {}

    connect(id: string, ws: WebSocket) {
        const hasSession = this.repo.has(id);

        if (hasSession) {
            const client = new Client(ws);
            this.repo.enter(client, id);
        };
    };

    createSession(handleSessionID: (id: string) => void) {
        const session = new Session([]); 
        this.repo.add(session);

        handleSessionID(session.id());
    };
};