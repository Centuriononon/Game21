import { UrlWithParsedQuery } from 'url';

export default interface IServerUpgrade {
    url: () => UrlWithParsedQuery
    destroy: (err: Error) => void
}