import IStatusSessionConnection from "./status-session-connection.interface";

export default class StatusSessionConnection implements IStatusSessionConnection {
    private readonly _status: boolean;

    constructor(status: boolean) {
        this._status = status;
    };

    successful() {
        return this._status;
    };
}