
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { CacheDispatcherFactory } from './cache';

class BookInApi extends Api {

    _createCaches() {
        return {
            'accommodation': new CacheMap('accommodation', {}, true),
            'booking': new CacheMap('booking', {}, true),
            'hotel': new CacheMap('hotel', {}, true),
            'invoice': new CacheMap('invoice', {}, true),
            'offer': new CacheMap('offer', {}, true),
            'payment': new CacheMap('payment', {}, true),
            'room': new CacheMap('room', {}, true),
            'roomprice': new CacheMap('roomprice', {}, true),
            'season': new CacheMap('season', {}, true),
            'term': new CacheMap('term', {}, true),
            'user': new CacheMap('user', {}, true),
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
