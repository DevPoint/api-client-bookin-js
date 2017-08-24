
import Api from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { BookInCacheDispatcherFactory } from './cache';

class BookInApi extends Api {

    _createCaches() {
        return {};
    }

    _createClient() {
        return new BookInApiClient(this);
    }

    _createCacheDispatcherFactory() {
        return new BookInCacheDispatcherFactory();
    }
}

export default BookInApi;
