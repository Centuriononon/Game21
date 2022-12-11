import ISessionRepo from "./session-repo.interface";
import ISession from "../session/session.interface";

export default class SessionRepo implements ISessionRepo {
    private sessions: Map<string, ISession> = new Map();
    constructor() {}

    append(s: ISession) {
        const id = s.id();
        const noSession = !this.sessions.has(id);

        if (noSession) this.sessions.set(id, s);
    };

    session(id: string) {
        return this.sessions.get(id);
    };
};