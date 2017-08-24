
import BookInCacheDispatcher from './BookInCacheDispatcher';
import Booking from './Booking';

const assign = Object.assign;

class BookingDispatcher extends BookInCacheDispatcher {

    constructor() {
        this._arrayPropsKeys = ['accommodations', 'guests'];
    }

    _createCacheEntry(action) {
        return new Booking(action.itemId, action.hotel_id);
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

export default BookingDispatcher;