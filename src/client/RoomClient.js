
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
}

export default RoomClient;
