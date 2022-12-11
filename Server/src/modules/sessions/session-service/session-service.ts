import Client from "../../client/client";
import WebSocket from "ws";
import ISessionService from "./session-service.interface";
import SessionRepo from "../session-repo/session-repo";
import ISession from "../session/session.interface";

export default class SessionService implements ISessionService {
    private repo = new SessionRepo();
    constructor() {}

    connect(id: string, ws: WebSocket) {
        const session = this.repo.session(id);
        
        if (session) {
            const client = new Client(ws);
            session.enter(client);
        };
    };

    // addSession(s: ISession) {
    //     this.repo.add(s);
    // };
};