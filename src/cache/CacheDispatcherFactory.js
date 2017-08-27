
import { 
    CacheEntryDispatcher, 
    CacheDispatcherFactory as BaseCacheDispatcherFactory } from 'api-client-core';
import CacheTypes from './types';

class CacheDispatcherFactory extends BaseCacheDispatcherFactory {

    createDispatchers() {
        const cacheDispatchers = {
        	'accommodation' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.accommodation)),
        	'hotel' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.hotel)),
        	'room' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.room)),
            'roomprice' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.roomprice)),
            'season' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.season)),
        	'term' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.term)),
            'invoice' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.invoice)),
            'offer' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.offer)),
            'payment' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.payment)),
            'booking' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.booking)),
            'enquiry' => new CacheEntryDispatcher(
                this._createCacheEntryClass(CacheTypes.enquiry)),
        };
        return cacheDispatchers;
    }
}

export default CacheDispatcherFactory;
