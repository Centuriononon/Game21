export default interface IServer {
    run: (port: number, log: string) => void;
}