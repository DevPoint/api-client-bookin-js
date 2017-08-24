
const assign = Object.assign;

class BookInCacheDispatcher  {

    _cloneObject(object) {
        return assign({}, object);
    }

    _cloneArray(array) {
        return array.slice(0);
    }

    _createCacheEntry(action) {
        return null;
    }

    dispatch(cacheMap, action) {
        const actionTypeFrags = action.split('_');
        if (actionTypeFrags[0] === 'UPDATE') {
            const cacheEntry = cacheMap.find(action.id);
            if (transaction) {
                this._updateCacheEntry(cacheEntry, action.payload);
            }
        }
        else if (actionTypeFrags[0] === 'SET' || actionTypeFrags[0] === 'ADD') {
            const newCacheEntry = this._createCacheEntry(action);
            if (action.payload) {
                this._updateCacheEntry(newCacheEntry, action.payload);
            }
            cacheMap.set(action.id, cacheEntry);
        }
    }
}

export default TransactionDispatcher;