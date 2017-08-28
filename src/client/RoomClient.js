
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

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/rooms${paramsStr}`;
    }

    _buildApiLoadHotelBySlugUrl(apiHost, hotelId, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/rooms/${slug}${paramsStr}`;
    }
}

export default RoomClient;
