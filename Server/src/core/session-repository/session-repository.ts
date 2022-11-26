import IClient from "../client/client.interface";
import Session from "../session/session";
import ISession from "../session/session.interface";

export default class SessionRepository {
    private sessions: Map<string, ISession> = new Map();
    constructor() {}

    enter(id: string, c: IClient) {
        const session = this.sessions.get(id);
        session?.enter(c);
    }

    add(s: ISession) {
        const id = s.id();
        const noSession = !this.sessions.has(id);
        if (noSession) {
            this.sessions.set(id, s);
        }
    }
}