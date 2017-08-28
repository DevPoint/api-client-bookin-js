
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

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/accommodations${paramsStr}`;
    }

    _buildApiLoadHotelBySlugUrl(apiHost, hotelId, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/accommodations/${slug}${paramsStr}`;
    }
}

export default AccommodationClient;
