
import BookInCacheDispatcher from './BookInCacheDispatcher';
import Hotel from './Hotel';

class HotelDispatcher extends BookInCacheDispatcher {

    constructor() {
        this._arrayPropsKeys = [
            'accommodations', 'boards', 'furnishings',
            'titles', 'rooms', 'seasons'];
    }

    _createCacheEntry(action) {
        return new Hotel(action.itemId);
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