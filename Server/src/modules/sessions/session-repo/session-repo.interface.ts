import ISession from "../session/session.interface";

export default interface ISessionRepo {
    add: (s: ISession) => void;
    /** 
    * @throws There is no required session.
    */
    session: (id: string) => ISession;
}