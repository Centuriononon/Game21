import { randomUUID } from "crypto";
import IClient from "modules/client/client.interface";
import ISession from "./session.interface";

export default class Session implements ISession {
    private readonly _id = randomUUID();
    private clients: IClient[] = [];

    constructor(clients: IClient[]) {
        this.clients = clients;
    };
  
    enter(c: IClient) {
        const isOpen = this.clients.length <= 2;
        if (isOpen) {
            this.clients = [...this.clients, c];

            c.subMessageEvent(({ data }) => {
                c.send(data)
            });
        };

        return isOpen;
    };

    id() { return this._id };
};