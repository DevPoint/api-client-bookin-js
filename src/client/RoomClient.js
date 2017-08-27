
import CacheEntryClient from './CacheEntryClient';

class RoomClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'room');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/rooms/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/rooms${paramsStr}`;
    }

    _buildApiLoadHotelUrl(apiHost, hotelId, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/rooms/${slug}${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/rooms${paramsStr}`;
    }

    loadHotel(apiHost, hotelId, slug, eagerType) {
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

export default RoomClient;
