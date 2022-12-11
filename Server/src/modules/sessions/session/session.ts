import { randomUUID } from "crypto";
import IClient from "modules/client/client.interface";
import ISession from "./session.interface";

export default class Session implements ISession {
    private clients: IClient[] = [];
    private readonly _id = randomUUID();

    constructor(clients: IClient[]) {
        this.clients = clients;
    };
  
    enter(c: IClient) {
        this.clients = [...this.clients, c];

        c.subMessageEvent(({ data }) => {
            c.send(data)
        });

        return true;
    };

    id() { return this._id };
};