
import CacheEntryClient from './CacheEntryClient';

class HotelClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'hotel');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/hotels/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/hotels${paramsStr}`;
    }
}

export default HotelClient;
