
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

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/seasons${paramsStr}`;
    }

    _buildApiLoadHotelBySlugUrl(apiHost, hotelId, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/seasons/${slug}${paramsStr}`;
    }

    loadHotelBySlug(apiHost, hotelId, slug, eagerType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiLoadHotelBySlugUrl(apiHost, hotelId, slug, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }
}

export default SeasonClient;
