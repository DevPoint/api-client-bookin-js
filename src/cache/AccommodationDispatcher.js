
import CacheEntryDispatcher from './CacheEntryDispatcher';
import Accommodation from './Accommodation';

class AccommodationDispatcher extends CacheEntryDispatcher {

    constructor() {
        this._arrayPropsKeys = [];
    }

    _createCacheEntry(payload) {
        return new Accommodation(payload.id, payload.hotel_id);
    }

    _updateCacheEntry(cacheEntry, payload) {
        for (let propsKey in payload) {
            if (this._arrayPropsKeys.indexOf(propsKey) >= 0) {
                cacheEntry[propsKey] = this._cloneArray(payload[propsKey]);
            }
            else {
                cacheEntry[propsKey] = payload[propsKey];
            }
        }
    }
}

export default AccommodationDispatcher;