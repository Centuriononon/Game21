import WebSocket from 'ws';

export type MessageEventHandler = (ev: WebSocket.MessageEvent) => void;

export default interface IClient {
    send: (m: any) => void;
    subMessageEvent: (cb: MessageEventHandler) => void;
}