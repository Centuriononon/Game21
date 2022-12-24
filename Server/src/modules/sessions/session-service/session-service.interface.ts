import IClient from "../../client/client.interface";

export default interface ISessionService {
    /** 
    * @throws {Error}
    */
    connect: (client: IClient, sessionID: string) => void;
}