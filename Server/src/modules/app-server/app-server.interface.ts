export default interface IAppServer {
    run: (port: number, handler: () => void) => void;
}