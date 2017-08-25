
import { CacheEntryClient as BaseCacheEntryClient } from 'api-client-core';

class CacheEntryClient extends BaseCacheEntryClient {

    /**
     * Append filters to api params string
     *
     * @param  {string} paramsStr
     * @param  {array}  filters
     * @return {string}
     */
    _appendApiFiltersStr(paramsStr, filters) {
        let paramsStr = paramsStr || '';
        if (filters && filters.length) {
            paramsStr += (paramsStr.length) ? '&filters=' : '?filters=';
            paramsStr +=  encodeURIComponent(filters.join());
        }
        return paramsStr;
    }

    /**
     * Append search string to api params string
     *
     * @param  {string} paramsStr
     * @param  {string} q
     * @return {string}
     */
    _appendApiSearchStr(paramsStr, q) {
        let paramsStr = paramsStr || '';
        if (q && q.length) {
            paramsStr += (paramsStr.length) ? '&q=' : '?q=';
            paramsStr +=  encodeURIComponent(q);
        }
        return paramsStr;
    }

    /**
     * Append lang to api params string
     *
     * @param  {string} paramsStr
     * @param  {string} lang
     * @return {string}
     */
    _appendApiLangStr(paramsStr, lang) {
        let paramsStr = paramsStr || '';
        if (lang && lang.length) {
            paramsStr += (paramsStr.length) ? '&lang=' : '?lang=';
            paramsStr += encodeURIComponent(lang);
        }
        return paramsStr;
    }

    /**
     * Append limit to api params string
     *
     * @param  {string} paramsStr
     * @param  {string} limit
     * @return {string}
     */
    _appendApiLimitStr(paramsStr, limit) {
        let paramsStr = paramsStr || '';
        if (limit && limit.length) {
            paramsStr += (paramsStr.length) ? '&limit=' : '?limit=';
            paramsStr += encodeURIComponent(limit);
        }
        return paramsStr;
    }

    /**
     * Append sort fields and order to api params string
     *
     * @param  {string} paramsStr
     * @param  {array}  sortBy
     * @return {string}
     */
    _appendApiSortByStr(paramsStr, sortBy) {
        let paramsStr = paramsStr || '';
        if (sortBy && sortBy.length) {
            paramsStr += (paramsStr.length) ? '&sort=' : '?sort=';
            paramsStr += encodeURIComponent(sortBy.join());
        }
        return paramsStr;
    }

    /**
     * Append included fields to api params string
     *
     * @param  {string} paramsStr
     * @param  {array}  fields
     * @return {string}
     */
    _appendApiFieldsStr(paramsStr, fields) {
        let paramsStr = paramsStr || '';
        if (fields && fields.length) {
            paramsStr += (paramsStr.length) ? '&fields=' : '?fields=';
            paramsStr +=  encodeURIComponent(fields.join());
        }
        return paramsStr;
    }

    /**
     * Append token to api params string
     *
     * @param  {string} paramsStr
     * @param  {string} token
     * @return {string}
     */
    _appendApiTokenStr(paramsStr, token) {
        let paramsStr = paramsStr || '';
        if (token && token.length) {
            paramsStr += (paramsStr.length) ? '&token=' : '?token=';
            paramsStr += encodeURIComponent(token);
        }
        return paramsStr;
    }

    /**
     * Build HTTP header for API call
     *
     * @param  {string} token
     * @return {object}
     */
    _buildApiHeaders(token) {
        const headers = {};
        if (token && token.length) {
            headers['Authorization'] = 'Bearer ' + token;
        }
        return headers;
    }
}

export default CacheEntryClient;
