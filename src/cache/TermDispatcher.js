
import BookInCacheEntryDispatcher from './BookInCacheEntryDispatcher';
import Term from './Term';

class TermDispatcher extends BookInCacheEntryDispatcher {

    _createCacheEntry(payload) {
        return new Term(payload.id, payload.hotel_id, payload.taxonomy);
    }

    _updateCacheEntry(cacheEntry, payload) {
        for (let propsKey in payload) {
            cacheEntry[propsKey] = payload[propsKey];
        }
    }
}

export default TermDispatcher;