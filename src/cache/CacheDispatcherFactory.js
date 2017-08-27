
import { 
    CacheEntryDispatcher, 
    CacheDispatcherFactory as BaseCacheDispatcherFactory } from 'api-client-core';
import CacheTypes from './types';

class CacheDispatcherFactory extends BaseCacheDispatcherFactory {

    createDispatchers() {
        const cacheDispatchers = {
        	'accommodation' => new CacheEntryDispatcher(CacheTypes.accommodation),
        	'hotel' => new CacheEntryDispatcher(CacheTypes.hotel),
        	'room' => new CacheEntryDispatcher(CacheTypes.room),
            'roomprice' => new CacheEntryDispatcher(CacheTypes.roomprice),
            'season' => new CacheEntryDispatcher(CacheTypes.season),
        	'term' => new CacheEntryDispatcher(CacheTypes.term),
            'invoice' => new CacheEntryDispatcher(CacheTypes.invoice),
            'offer' => new CacheEntryDispatcher(CacheTypes.offer),
            'payment' => new CacheEntryDispatcher(CacheTypes.payment),
            'booking' => new CacheEntryDispatcher(CacheTypes.booking),
            'enquiry' => new CacheEntryDispatcher(CacheTypes.enquiry),
        };
        return cacheDispatchers;
    }
}

export default CacheDispatcherFactory;
