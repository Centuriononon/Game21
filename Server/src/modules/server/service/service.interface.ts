import IServerUpgrade from "../requests/server-upgrade/server-upgrade.interface";

export default interface IService {
    /** 
    * @throws {Error}
    */
    connectToSession: (upgrade: IServerUpgrade, sessionID: string) => void;
}