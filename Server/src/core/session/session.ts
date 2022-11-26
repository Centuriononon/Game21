import { randomUUID } from "crypto";
import IClient from "../client/client.interface";

export default class Session {
    private clients: IClient[] = [];
    private _id = randomUUID();

    constructor() {};

    enter(c: IClient) {
        this.clients = [...this.clients, c];
        c.subMessageEvent(({ data }) => {
            c.send(data)
        });
    };

    id() {
        return this._id;
    }
}