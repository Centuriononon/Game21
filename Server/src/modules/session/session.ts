import IClient from "../client/client.interface";

export default class Session {
    private clients: IClient[] = [];
    constructor() {};

    addClient(c: IClient) {
        this.clients = [...this.clients, c];
        c.subMessageEvent((e) => c.send(e))
    };
}