
import BookInCacheEntryDispatcher from './BookInCacheEntryDispatcher';
import Hotel from './Hotel';

class HotelDispatcher extends BookInCacheEntryDispatcher {

    constructor() {
        this._arrayPropsKeys = [
            'accommodations', 'boards', 'furnishings',
            'titles', 'rooms', 'seasons'];
    }

    _createCacheEntry(payload) {
        return new Hotel(payload.id);
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

export default HotelDispatcher;