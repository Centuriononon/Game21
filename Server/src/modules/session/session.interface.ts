import IClient from "../../core/client.interface";

export default interface ISession {
    enter: (c: IClient) => void;
    id: () => string;
}