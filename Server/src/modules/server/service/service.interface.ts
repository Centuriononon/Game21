import ISessionConnection from '../requests/session-connection/session-connection.interface';

export default interface IService {
    connectToSession: (connection: ISessionConnection) => void;
}