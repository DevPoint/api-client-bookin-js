
import BookInCacheDispatcher from './BookInCacheDispatcher';
import Term from './Term';

class TermDispatcher extends BookInCacheDispatcher {

    _createCacheEntry(action) {
        return new Term(action.itemId, action.hotel_id, action.taxonomy);
    }

    _updateCacheEntry(cacheEntry, payload) {
        for (let propsKey in payload) {
            cacheEntry[propsKey] = payload[propsKey];
        }
    }
}

export default TermDispatcher;