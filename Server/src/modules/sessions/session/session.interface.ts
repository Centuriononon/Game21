import IClient from "../../client/client.interface";

export default interface ISession {
    /** 
    * @throws {Error}
    */
    connect: (c: IClient) => void;
    id: () => string;
}