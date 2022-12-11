import Client from "../../client/client";
import WebSocket from "ws";
import ISessionService from "./session-service.interface";
import Session from "../session/session";
import SessionRepo from "../session-repo/session-repo";
import ISession from "../session/session.interface";

export default class SessionService implements ISessionService {
    private repo = new SessionRepo();
    constructor() {}

    connect(id: string, ws: WebSocket) {
        const hasSession = this.repo.has(id);

        if (hasSession) {
            const client = new Client(ws);
            this.repo.session(id).enter(client);
        };
    };

    // addSession(s: ISession) {
    //     this.repo.add(s);
    // };
};