import ISession from "../session/session.interface";

export default interface ISessionRepo {
    add: (s: ISession) => boolean;
    session: (id: string) => ISession | undefined;
}