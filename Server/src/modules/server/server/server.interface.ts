export default interface IServer {
    run: (port: number, handler: () => void) => void;
}