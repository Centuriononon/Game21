import { MessageEvent } from 'ws';
export type MessageEventHandler = (ev: MessageEvent) => void

export default interface IClient {
    send: (m: any) => void;
    subMessageEvent: (cb: MessageEventHandler) => void;
}