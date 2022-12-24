import IClient from "../../client/client.interface";

export default interface ISessionService {
    /** 
    * @throws
    */
    connect: (client: IClient, sessionID: string) => void;
}