import Client from "../client/client";
import WebSocket from "ws";
import ISessionService from "./session-service.interface";
import ISession from "../session/session.interface";

export default class SessionService implements ISessionService {
    private sessions: Map<string, ISession> = new Map();
    constructor() {}

    enterSession(id: string, ws: WebSocket) {
        if (!this.sessions.has(id)) {
            ws.close(1008);
            return;
        };
        const session = this.sessions.get(id);
        session.enter(new Client(ws));
    };

    add(s: ISession) {
        const id = s.id();
        if (!this.sessions.has(id)) {
            this.sessions.set(id, s);
        };
    };
};