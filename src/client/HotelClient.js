
import CacheEntryClient from './CacheEntryClient';

class HotelClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'hotel');
    }

    loadMany(viewId, builder) {
        this._api.beginDispatch();
        this._api.dispatch(this._api.loadingStart(viewId, this._itemType, {
            eagerType: builder.eagerType,
            offset: builder.offset,
            count: builder.count,
            pageSize: builder.pageSize}));
        this._api.dispatch(this._api.loadingFailed(viewId, ['not_implemented']));
        this._api.endDispatch();
        return this._api.views().find(viewId);
    }

    load(viewId, itemId, eagerType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._appendApiTokenStr(apiParamsStr, this._api.getAuthToken());
        this._api.dispatch(this._api.loadingStart(viewId, this._itemType, {
            eagerType: eagerType ? eagerType : 'full',
            offset: 0,
            count: 1,       
            pageSize: 0}));
        http.get(`${apiHost}/hotels/${id}${apiParamsStr}`)
        .then(response => {
            this._api.beginDispatch();
            this._api.dispatch(this._api.setCacheEntry(
                this._itemType, id, response.data.hotel));
            this._api.dispatch(this._api.loadingSucceeded(viewId, [id], { 
                totalCount: 1 }));
            this._api.endDispatch();
        })
        .catch(errorResponse => {
            this._api.dispatch(this._api.loadingFailed(viewId, errorResponse.data.error));
        });
        return this._api.views().find(viewId);
    }
}

export default HotelClient;
