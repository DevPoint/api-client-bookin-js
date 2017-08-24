
import BookInCacheDispatcher from './BookInCacheDispatcher';
import Room from './Room';

const assign = Object.assign;

class RoomDispatcher extends BookInCacheDispatcher {

    constructor() {
        this._arrayPropsKeys = [];
    }

    _createCacheEntry(action) {
        return new Room(action.itemId, action.hotel_id);
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

export default RoomDispatcher;