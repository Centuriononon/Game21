import IClient from "../client/client.interface";

export default interface ISession {
    enter: (c: IClient) => void;
    id: () => string;
}