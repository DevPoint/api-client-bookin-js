
import { CacheEntryClient as BaseCacheEntryClient } from 'api-client-core';

class CacheEntryClient extends BaseCacheEntryClient {

    _getCacheEntryId(cacheEntry) {
        return cacheEntry.id;
    }

    _getCacheEntriesIds(cacheEntries) {
        return cacheEntries.map(cacheEntry => cacheEntry.id);
    }

    _appendApiFiltersStr(paramsStr, filters) {
        let paramsStr = paramsStr || '';
        if (filters && filters.length) {
            paramsStr += (paramsStr.length) ? '&filters=' : '?filters=';
            paramsStr +=  encodeURIComponent(filters.join());
        }
        return paramsStr;
    }

    _appendApiSearchStr(paramsStr, q) {
        let paramsStr = paramsStr || '';
        if (q && q.length) {
            paramsStr += (paramsStr.length) ? '&q=' : '?q=';
            paramsStr +=  encodeURIComponent(q);
        }
        return paramsStr;
    }

    _appendApiLangStr(paramsStr, lang) {
        let paramsStr = paramsStr || '';
        if (lang && lang.length) {
            paramsStr += (paramsStr.length) ? '&lang=' : '?lang=';
            paramsStr += encodeURIComponent(lang);
        }
        return paramsStr;
    }

    _appendApiLimitStr(paramsStr, limit) {
        let paramsStr = paramsStr || '';
        if (limit && limit.length) {
            paramsStr += (paramsStr.length) ? '&limit=' : '?limit=';
            paramsStr += encodeURIComponent(limit);
        }
        return paramsStr;
    }

    _appendApiSortByStr(paramsStr, sortBy) {
        let paramsStr = paramsStr || '';
        if (sortBy && sortBy.length) {
            paramsStr += (paramsStr.length) ? '&sort=' : '?sort=';
            paramsStr += encodeURIComponent(sortBy.join());
        }
        return paramsStr;
    }

    _appendApiFieldsStr(paramsStr, fields) {
        let paramsStr = paramsStr || '';
        if (fields && fields.length) {
            paramsStr += (paramsStr.length) ? '&fields=' : '?fields=';
            paramsStr +=  encodeURIComponent(fields.join());
        }
        return paramsStr;
    }

    _appendApiTokenStr(paramsStr, token) {
        let paramsStr = paramsStr || '';
        if (token && token.length) {
            paramsStr += (paramsStr.length) ? '&token=' : '?token=';
            paramsStr += encodeURIComponent(token);
        }
        return paramsStr;
    }

    _buildApiHeaders(token) {
        const headers = {};
        if (token && token.length) {
            headers['Authorization'] = 'Bearer ' + token;
        }
        return headers;
    }

    _buildApiUpdateUrl(apiHost, itemId) {
        return this._buildApiLoadUrl(apiHost, itemId, '');
    }

    _buildApiHotelUpdateBySlugUrl(apiHost, hotelId, slug) {
        return this._buildApiHotelLoadBySlugUrl(apiHost, hotelId, slug, '');
    }

    _buildApiInsertUrl(apiHost) {
        return this._buildApiLoadManyUrl(apiHost, '');
    }

    _buildApiHotelInsertUrl(apiHost, hotelId) {
        return this._buildApiHotelLoadManyUrl(apiHost, hotelId, '');
    }

    _buildApiDeleteUrl(apiHost, itemId) {
        return this._buildApiLoadUrl(apiHost, itemId, '');
    }

    _buildApiLoadParamsStr(itemId, eagerType) {
        let apiParamsStr = '';
        apiParamsStr += this._appendApiTokenStr(apiParamsStr, this._api.getAuthToken());
        return apiParamsStr;
    }

    _buildApiLoadUrl(itemId, paramsStr) {
        return '';
    }

    _buildApiLoadManyParamsStr(builder) {
        let apiParamsStr = '';
        apiParamsStr += this._appendApiTokenStr(apiParamsStr, this._api.getAuthToken());
        return apiParamsStr;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return '';
    }

    _buildApiHotelLoadBySlugUrl(apiHost, hotelId, slug, paramsStr) {
        return '';
    }

    _buildApiHotelLoadManyUrl(apiHost, hotelId, paramsStr) {
        return '';
    }

    _buildApiBookingLoadManyUrl(apiHost, bookingId, paramsStr) {
        return '';
    }

    _buildApiCustomerLoadManyUrl(apiHost, customerId, paramsStr) {
        return '';
    }

    _insert(transactionId, startAction, data, apiUrl) {
        this._api.dispatch(startAction));
        if (!apiUrl) {
            return new Promise((resolve, reject) => {
                reject(this._api.dispatch(this._api.insertFailed(transactionId, ['not_implemented'], {})));
            });
        }
        const apiHeaders = this._buildApiHeaders(this._api.getAuthToken());
        return http({
            method: 'POST', 
            url: apiUrl, 
            headers: apiHeaders,
            data: data,
            withCredentials: false
        }).then(response => {
            const cacheEntry = response.data.cacheEntry;
            const itemId = this._getCacheEntryId(cacheEntry);
            this._api.beginDispatch();
            this._api.dispatch(this._api.setCacheEntry(this._itemType, itemId, cacheEntry));
            const result = this._api.dispatch(this._api.insertSucceeded(transactionId, itemId));
            this._api.endDispatch();
            return result;
        }).catch(errorResponse => {
            const { errors, validationErrors } = errorResponse.data;
            return this._api.dispatch(this._api.insertFailed(
                transactionId, errors, validationErrors
            ));
        });
    }

    _update(transactionId, startAction, data, apiUrl) {
        this._api.dispatch(startAction);
        if (!apiUrl) {
            return new Promise((resolve, reject) => {
                reject(this._api.dispatch(this._api.updateFailed(transactionId, ['not_implemented'], {})));
            });
        }
        const apiHeaders = this._buildApiHeaders(this._api.getAuthToken());
        return http({
            method: 'PUT', 
            url: apiUrl, 
            headers: apiHeaders,
            data: data,
            withCredentials: false
        }).then(response => {
            const cacheEntry = response.data.cacheEntry;
            const itemId = this._getCacheEntryId(cacheEntry);
            this._api.beginDispatch();
            this._api.dispatch(this._api.setCacheEntry(this._itemType, itemId, cacheEntry));
            const result = this._api.dispatch(this._api.updateSucceeded(transactionId));
            this._api.endDispatch();
            return result;
        }).catch(errorResponse => {
            const { errors, validationErrors } = errorResponse.data;
            return this._api.dispatch(this._api.updateFailed(
                transactionId, errors, validationErrors
            ));
        });
    }

    _delete(transactionId, itemId, apiDeleteUrl) {
        this._api.dispatch(this._api.deleteStart(transactionId, this._itemType, itemId));
        if (!apiDeleteUrl) {
            return new Promise((resolve, reject) => {
                reject(this._api.dispatch(this._api.deleteFailed(transactionId, ['not_implemented'])));
            });
        }
        const apiHeaders = this._buildApiHeaders(this._api.getAuthToken());
        return http({
            method: 'DELETE', 
            url: apiDeleteUrl, 
            headers: apiHeaders,
            withCredentials: false
        }).then(response => {
            this._api.beginDispatch();
            this._api.dispatch(this._api.removeCacheEntry(this._itemType, itemId));
            const result = this._api.dispatch(this._api.deleteSucceeded(transactionId));
            this._api.endDispatch();
            return result;
        }).catch(errorResponse => {
            const { errors, validationErrors } = errorResponse.data;
            return this._api.dispatch(this._api.deleteFailed(
                transactionId, errors
            ));
        });
    }

    _load(viewId, eagerType, apiLoadUrl) {
        this._api.dispatch(this._api.loadingStart(viewId, this._itemType, {
            eagerType: eagerType ? eagerType : 'full',
            offset: 0,
            count: 1,       
            pageSize: 0}));
        if (!apiLoadUrl) {
            return new Promise((resolve, reject) => {
                reject(this._api.dispatch(this._api.loadingFailed(viewId, ['not_implemented'])));
            });
        }
        return http({
            method: 'GET', 
            url: apiLoadUrl
        }).then(response => {
            const cacheEntry = response.data.cacheEntry;
            const itemId = this._getCacheEntryId(cacheEntry);
            this._api.beginDispatch();
            this._api.dispatch(this._api.setCacheEntry(this._itemType, itemId, cacheEntry));
            const result = this._api.dispatch(this._api.loadingSucceeded(
                viewId, [itemId], { totalCount: 1 }
            ));
            this._api.endDispatch();
            return result;
        }).catch(errorResponse => {
            return this._api.dispatch(this._api.loadingFailed(
                viewId, errorResponse.data.error
            ));
        });
    }

    _loadMany(viewId, apiLoadManyUrl) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        this._api.dispatch(this._api.loadingStart(viewId, this._itemType, {
            eagerType: builder.eagerType,
            offset: builder.offset,
            count: builder.count,
            pageSize: builder.pageSize}));
        if (!apiLoadManyUrl) {
            return new Promise((resolve, reject) => {
                reject(this._api.dispatch(this._api.loadingFailed(viewId, ['not_implemented'])));
            });
        }
        return http({
            method: 'GET', 
            url: apiLoadManyUrl
        }).then(response => {
            const cacheEntrys = response.data.cacheEntrys;
            this._api.beginDispatch();
            this._api.dispatch(this._api.setCacheEntries(this._itemType, cacheEntrys));
            const result = this._api.dispatch(this._api.loadingSucceeded(
                viewId, this._getCacheEntriesIds(cacheEntrys), { totalCount: cacheEntrys.length }
            ));
            this._api.endDispatch();
            return result;
        }).catch(errorResponse => {
            return this._api.dispatch(this._api.loadingFailed(
                viewId, errorResponse.data.error
            ));
        });
    }

    insert(transactionId, data) {
        const apiHost = this._api.getHost();
        const apiInsertUrl = this._buildApiInsertUrl(apiHost);
        const apiStartAction = this._api.insertStart(transactionId, this._itemType, data);
        return this._insert(transactionId, apiStartAction, data, apiInsertUrl);
    }

    update(transactionId, itemId, data) {
        const apiHost = this._api.getHost();
        const apiUpdateUrl = this._buildApiUpdateUrl(apiHost, itemId);
        const apiStartAction = this._api.updateStart(transactionId, this._itemType, itemId, data);
        return this._update(transactionId, apiStartAction, data, apiUpdateUrl);
    }

    delete(transactionId, itemId) {
        const apiHost = this._api.getHost();
        const apiDeleteUrl = this._buildApiDeleteUrl(apiHost, itemId);
        return this._delete(transactionId, itemId, apiDeleteUrl);
    }

    load(viewId, itemId, eagerType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiLoadUrl(apiHost, itemId, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }

    loadMany(viewId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadUrl = this._buildApiLoadManyUrl(apiHost, apiParamsStr);
        return this._loadMany(viewId, apiLoadUrl);
    }

    bookingLoadMany(apiHost, bookingId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadUrl = this._buildApiBookingLoadManyUrl(apiHost, bookingId, apiParamsStr);
        return this._loadMany(viewId, apiLoadUrl);
    } 
    
    customerLoadMany(apiHost, customerId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadUrl = this._buildApiCustomerLoadManyUrl(apiHost, customerId, apiParamsStr);
        return this._loadMany(viewId, apiLoadUrl);
    } 

    hotelInsert(transactionId, hotelid, data) {
        const apiHost = this._api.getHost();
        const apiInsertUrl = this._buildApiHotelInsertUrl(apiHost, hotelid);
        const apiStartAction = this._api.insertStart(transactionId, this._itemType, data);
        return this._insert(transactionId, apiStartAction, data, apiInsertUrl);
    }

    hotelUpdateBySlug(transactionId, hotelid, slug, data) {
        const apiHost = this._api.getHost();
        const apiUpdateUrl = this._buildApiHotelUpdateBySlugUrl(apiHost, hotelid, slug);
        const apiStartAction = this._api.updateByHotelSlugStart(transactionId, this._itemType, hotelId, slug, data);
        return this._update(transactionId, apiStartAction, data, apiUpdateUrl);
    }

    hotelLoadBySlug(apiHost, hotelId, slug, eagerType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiHotelLoadBySlugUrl(apiHost, hotelId, slug, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }

    hotelLoadMany(apiHost, hotelId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadUrl = this._buildApiHotelLoadManyUrl(apiHost, hotelId, apiParamsStr);
        return this._loadMany(viewId, apiLoadUrl);
    } 
}

export default CacheEntryClient;
