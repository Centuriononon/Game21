import IClient from "./client.interface";

export default interface IGame {
    start: (players: IClient[]) => void
}