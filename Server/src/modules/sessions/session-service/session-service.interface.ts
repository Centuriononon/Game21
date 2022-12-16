import { WebSocket } from "ws";
import IStatusSessionConnection from "../connection/status-session-connection/status-session-connection.interface";

export default interface ISessionService {
    connect: (ws: WebSocket, sessionID: string) => IStatusSessionConnection;
}