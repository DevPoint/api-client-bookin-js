
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { CacheDispatcherFactory } from './cache';

class BookInApi extends Api {

    _createCaches() {
        return {
            'accommodation': new CacheMap('accommodation'),
            'booking': new CacheMap('booking'),
            'hotel': new CacheMap('hotel'),
            'invoice': new CacheMap('invoice'),
            'offer': new CacheMap('offer'),
            'payment': new CacheMap('payment'),
            'room': new CacheMap('room'),
            'roomprice': new CacheMap('roomprice'),
            'season': new CacheMap('season'),
            'term': new CacheMap('term'),
            'user': new CacheMap('user'),
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
