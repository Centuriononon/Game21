import Client from "../../client/client";
import WebSocket from "ws";
import ISessionService from "./session-service.interface";
import SessionRepo from "../session-repo/session-repo";
import ISession from "../session/session.interface";

export default class SessionService implements ISessionService {
    private repo = new SessionRepo();
    constructor() {}

    connect(ws: WebSocket, id: string) {
        const session = this.repo.session(id);
        const isOpen = session?.isOpen();
        
        if (isOpen)
            session.enter(new Client(ws));

        return isOpen;
    };

    addSession(s: ISession) {
        this.repo.add(s);
    };
};