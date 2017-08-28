
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { CacheDispatcherFactory } from './cache';

class BookInApi extends Api {

    _createCaches() {
        return {
            'hotel': new CacheMap('hotel'),
            'accommodation': new CacheMap('accommodation'),
            'room': new CacheMap('room'),
            'roomprice': new CacheMap('roomprice'),
            'season': new CacheMap('season'),
            'term': new CacheMap('term'),
            'booking': new CacheMap('booking'),
            'enquiry': new CacheMap('enquiry'),
            'invoice': new CacheMap('invoice'),
            'offer': new CacheMap('offer'),
            'payment': new CacheMap('payment'),
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
