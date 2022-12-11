import IClient from "../../client/client.interface";
import ISession from "../session/session.interface";

export default interface ISessionService {
    append: (s: ISession) => boolean
    session: (id: string) => ISession | undefined
    has: (id: string) => boolean
}