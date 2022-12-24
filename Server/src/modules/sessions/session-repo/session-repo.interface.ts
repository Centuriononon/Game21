import ISession from "../session/session.interface";

export default interface ISessionRepo {
    add: (s: ISession) => void;
    /** 
    * @throws {Error}
    */
    session: (id: string) => ISession;
}