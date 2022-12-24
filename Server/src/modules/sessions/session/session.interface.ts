import IClient from "../../client/client.interface";

export default interface ISession {
    /** 
    * @throws The required session is closed.
    */
    connect: (c: IClient) => void;
    id: () => string;
}