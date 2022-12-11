import ISession from "../session/session.interface";

export default interface ISessionService {
    append: (s: ISession) => void
    session: (id: string) => ISession | undefined
}