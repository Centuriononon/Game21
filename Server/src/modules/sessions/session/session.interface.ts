import IClient from "../../client/client.interface";

export default interface ISession {
    enter: (c: IClient) => boolean;
    id: () => string;
    isOpen: () => boolean;
}