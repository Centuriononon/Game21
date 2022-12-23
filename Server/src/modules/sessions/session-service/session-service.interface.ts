import IClient from "../../client/client.interface";
import IStatusSessionConnection from "../connection/status-session-connection/status-session-connection.interface";

export default interface ISessionService {
    connect: (client: IClient, sessionID: string) => IStatusSessionConnection;
}