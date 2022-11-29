import { randomUUID } from "crypto";
import IClient from "../../core/client.interface";
import ICoreGame from "../../core/game.interface";

export default class Session {
    private clients: IClient[] = [];
    private _id = randomUUID();

    constructor(client: IClient, private game: ICoreGame) {
        this.clients = [client];
    };
  
    enter(c: IClient) {
        this.clients = [...this.clients, c];
        c.subMessageEvent(({ data }) => {
            c.send(data)
        });
    };

    id() {
        return this._id;
    };
}