
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { CacheDispatcherFactory } from './cache';

class BookInApi extends Api {

    _createCaches() {
        return {
            'accommodation': new CacheMap(),
            'booking': new CacheMap(),
            'hotel': new CacheMap(),
            'invoice': new CacheMap(),
            'offer': new CacheMap(),
            'payment': new CacheMap(),
            'room': new CacheMap(),
            'roomprice': new CacheMap(),
            'season': new CacheMap(),
            'term': new CacheMap(),
            'user': new CacheMap(),
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
