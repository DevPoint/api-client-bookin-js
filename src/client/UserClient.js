
import CacheEntryClient from './CacheEntryClient';

class UserClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'user');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/users/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/users${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/users${paramsStr}`;
    }
}

export default UserClient;
