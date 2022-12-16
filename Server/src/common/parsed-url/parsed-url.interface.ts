import { UrlWithParsedQuery } from 'url';

export default interface IParsedURL {
    url: () => UrlWithParsedQuery;
};

