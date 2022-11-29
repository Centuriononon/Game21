import IClient from "../client.interface";
import ICoreGame from "../game.interface";

export default class Game21 implements ICoreGame {
    constructor() {}

    start(players: IClient[]) {
        console.log("Game started!");
    }
}