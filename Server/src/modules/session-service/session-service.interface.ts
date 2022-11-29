import ISession from "../session/session.interface"
import { WebSocket } from "ws"

export default interface ISessionService {
    enterSession: (id: string, ws: WebSocket) => void
    add: (s: ISession) => void
}