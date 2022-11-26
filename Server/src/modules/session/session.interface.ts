import IClient from "../client/client.interface";

export default interface ISession {
    addClient: (c: IClient) => void;
}