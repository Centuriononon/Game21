import Client from "../../client/client";
import ISessionService from "./session-service.interface";
import StatusSessionConnection from "../connection/status-session-connection/status-session-connection";
import ISessionRepo from "../session-repo/session-repo.interface";
import { WebSocket } from "ws";

export default class SessionService implements ISessionService {
    constructor(private readonly repo: ISessionRepo) {}

    connect(ws: WebSocket, sessionID: string) {
        const session = this.repo.session(sessionID);
        const entered = session?.enter(new Client(ws));

        return new StatusSessionConnection(entered);
    };
};