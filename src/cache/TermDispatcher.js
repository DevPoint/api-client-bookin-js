
import CacheEntryDispatcher from './CacheEntryDispatcher';
import Term from './Term';

class TermDispatcher extends CacheEntryDispatcher {

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