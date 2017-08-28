
import CacheEntryClient from './CacheEntryClient';

class CustomerClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'customer');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/customers/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/customers${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/customers${paramsStr}`;
    }
}

export default CustomerClient;
