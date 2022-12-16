import { UrlWithParsedQuery } from 'url';

export default interface IWSUpgrade {
    url: () => UrlWithParsedQuery
    destroy: () => void
}