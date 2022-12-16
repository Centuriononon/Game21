import { WebSocket } from "ws"
import ISession from "../session/session.interface";

export default interface ISessionService {
    connect: (ws: WebSocket, id: string) => boolean;
    // addSession: (s: ISession) => void;
}