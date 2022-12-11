import ISessionRepo from "./session-repo.interface";
import ISession from "../session/session.interface";

export default class SessionRepo implements ISessionRepo {
    private sessions: Map<string, ISession> = new Map();
    constructor() {}

    append(s: ISession) {
        const id = s.id();
        const noSession = !this.sessions.has(id);

        if (noSession) this.sessions.set(id, s);

        return noSession;
    };

    has(id: string) {
        return this.sessions.has(id);
    };

    session(id: string) {
        return this.sessions.get(id);
    };
};