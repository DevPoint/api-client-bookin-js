
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
}

export default SeasonClient;
