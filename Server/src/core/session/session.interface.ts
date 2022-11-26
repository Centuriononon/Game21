import IClient from "../client/client.interface";

export default interface ISession {
    connect: (c: IClient) => void;
}