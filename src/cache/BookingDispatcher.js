
import CacheEntryDispatcher from './CacheEntryDispatcher';
import Booking from './Booking';

class BookingDispatcher extends CacheEntryDispatcher {

    constructor() {
        this._arrayPropsKeys = ['accommodations', 'guests'];
        this._objectPropsKeys = [];
    }

    _createCacheEntry(payload) {
        return new Booking(payload.id, payload.hotel_id);
    }

    _updateCacheEntry(cacheEntry, payload) {
        for (let propsKey in payload) {
            if (this._arrayPropsKeys.indexOf(propsKey) >= 0) {
                cacheEntry[propsKey] = this._cloneArray(payload[propsKey]);
            }
            else if (this._objectPropsKeys.indexOf(propsKey) >= 0) {
                cacheEntry[propsKey] = this._cloneObject(payload[propsKey]);
            }
            else {
                cacheEntry[propsKey] = payload[propsKey];
            }
        }
    }
}

export default BookingDispatcher;