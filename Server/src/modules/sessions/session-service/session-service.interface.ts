import { WebSocket } from "ws"
import ISession from "../session/session.interface";

export default interface ISessionService {
    connect: (id: string, ws: WebSocket) => void;
    // addSession: (s: ISession) => void;
}