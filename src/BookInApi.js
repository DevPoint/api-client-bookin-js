
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { CacheDispatcherFactory } from './cache';
import CacheTypes from './cache/types';

class BookInApi extends Api {

    _createCaches() {
        return {
            'accommodation': new CacheMap('accommodation', CacheTypes.accommodation, true),
            'booking': new CacheMap('booking', CacheTypes.booking, true),
            'hotel': new CacheMap('hotel', CacheTypes.hotel, true),
            'invoice': new CacheMap('invoice', CacheTypes.invoice, true),
            'offer': new CacheMap('offer', CacheTypes.offer, true),
            'payment': new CacheMap('payment', CacheTypes.payment, true),
            'room': new CacheMap('room', CacheTypes.room, true),
            'roomprice': new CacheMap('roomprice', CacheTypes.roomprice, true),
            'season': new CacheMap('season', CacheTypes.season, true),
            'term': new CacheMap('term', CacheTypes.term, true),
            'user': new CacheMap('user', CacheTypes.user, true),
        };
    }

    _createClient() {
        return new BookInApiClient(this);
    }

    _createCacheDispatcherFactory() {
        return new CacheDispatcherFactory();
    }

    getHost() {
        return '';
    }

    getAuthToken() {
        return '';
    }
}

export default BookInApi;
