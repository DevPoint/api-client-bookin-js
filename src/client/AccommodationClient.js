
import CacheEntryClient from './CacheEntryClient';

class AccommodationClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'accommodation');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/accommodations/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/accommodations${paramsStr}`;
    }

    _buildApiLoadHotelUrl(apiHost, hotelId, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/accommodations/${slug}${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/accommodations${paramsStr}`;
    }

    loadHotelBySlug(apiHost, hotelId, slug, eagerType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiLoadHotelUrl(apiHost, hotelId, slug, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }
}

export default AccommodationClient;
