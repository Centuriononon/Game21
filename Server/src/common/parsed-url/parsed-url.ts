import { UrlWithParsedQuery } from 'url';
import { parse as parseUrl } from 'url';
import IParsedURL from './parsed-url.interface';

export default class ParsedURL implements IParsedURL {
    private readonly _url: UrlWithParsedQuery;

    constructor(url: string) {
        this._url = parseUrl(url || '', true);
    };

    url() {
        return this._url;
    };
};

