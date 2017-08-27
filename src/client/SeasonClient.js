
import CacheEntryClient from './CacheEntryClient';

class SeasonClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'season');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/seasons/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/seasons${paramsStr}`;
    }

    _buildApiLoadHotelUrl(apiHost, hotelId, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/seasons/${slug}${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/seasons${paramsStr}`;
    }

    loadHotel(apiHost, hotelId, slug) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiLoadHotelUrl(apiHost, hotelId, slug, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }

    loadHotelMany(apiHost, hotelId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadHotelManyUrl(apiHost, hotelId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 

}

export default SeasonClient;
