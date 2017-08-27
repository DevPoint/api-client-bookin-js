
import { 
    CacheEntryDispatcher, 
    CacheDispatcherFactory as BaseCacheDispatcherFactory } from 'api-client-core';
import AccommodationDispatcher from './AccommodationDispatcher';
import BookingDispatcher from './BookingDispatcher';
import HotelDispatcher from './HotelDispatcher';
import RoomDispatcher from './RoomDispatcher';
import TermDispatcher from './TermDispatcher';

class CacheDispatcherFactory extends BaseCacheDispatcherFactory {

    createDispatchers() {
        const cacheDispatchers = {
        	'accommodation' => new CacheEntryDispatcher(),
        	'booking' => new CacheEntryDispatcher(),
        	'hotel' => new CacheEntryDispatcher(),
        	'room' => new CacheEntryDispatcher(),
        	'term' => new CacheEntryDispatcher()
        };
        return cacheDispatchers;
    }
}

export default CacheDispatcherFactory;
