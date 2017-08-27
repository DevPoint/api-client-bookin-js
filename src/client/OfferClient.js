
import CacheEntryClient from './CacheEntryClient';

class OfferClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'offer');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/offers/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/offers${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/offers${paramsStr}`;
    }

    loadHotelMany(apiHost, hotelId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadHotelManyUrl(apiHost, hotelId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
}

export default OfferClient;
