import { ParsedUrlQuery } from "querystring";

export default interface IParsedURL {
    route: () => string;
    query: () => ParsedUrlQuery;
};

