
import { CacheDispatcherFactory as BaseCacheDispatcherFactory } from 'api-client-core';
import AccommodationDispatcher from './AccommodationDispatcher';
import BookingDispatcher from './BookingDispatcher';
import HotelDispatcher from './HotelDispatcher';
import RoomDispatcher from './RoomDispatcher';
import TermDispatcher from './TermDispatcher';

class CacheDispatcherFactory extends BaseCacheDispatcherFactory {

    createDispatchers() {
        const cacheDispatchers = {
        	'accommodation' => new AccommodationDispatcher(),
        	'booking' => new BookingDispatcher(),
        	'hotel' => new HotelDispatcher(),
        	'room' => new RoomDispatcher(),
        	'term' => new TermDispatcher()
        };
        return cacheDispatchers;
    }
}

export default CacheDispatcherFactory;
