import ISession from "../session/session.interface";

export default interface ISessionService {
    add: (s: ISession) => boolean;
    session: (id: string) => ISession | undefined;
}