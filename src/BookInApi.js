
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import { CacheDispatcherFactory } from './cache';
import { TransactionDispatcherFactory } from './transaction';
import transactionActions from './transaction/actions';

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

    _createTransactionDispatcherFactory() {
        return new TransactionDispatcherFactory();
    }

    getHost() {
        return '';
    }

    getAuthToken() {
        return '';
    }

    updateBySlugStart(transactionId, itemType, slug, data) {
        return transactionActions.updateBySlugStart(this.nameSpace, transactionId, itemType, slug, data);
    }

    bookingLoadView(viewId, bookingId, builder) {
        return this._client.bookingLoadView(viewId, bookingId, builder);
    }

    customerLoadView(viewId, customerId, builder) {
        return this._client.customerLoadView(viewId, customerId, builder);
    }

    hotelInsertTransaction(transactionId, itemType, hotelid, data) {
        return this._client.hotelInsertTransaction(transactionId, itemType, hotelid, data);
    }

    hotelUpdateTransactionBySlug(transactionId, itemType, hotelid, slug, data) {
        return this._client.hotelUpdateTransactionBySlug(transactionId, itemType, hotelid, slug, data);
    }

    hotelLoadView(viewId, hotelId, builder) {
        return this._client.hotelLoadView(viewId, hotelId, builder);
    }

    hotelLoadViewBySlug(viewId, itemType, hotelId, slug, eagerType) {
        return this._client.hotelLoadViewBySlug(viewId, itemType, hotelId, slug, eagerType);
    }

    hotelTaxonomyTermInsertTransaction(transactionId, hotelid, taxonomy, data) {
        return this._client.hotelTaxonomyTermInsertTransaction(transactionId, hotelid, taxonomy, data);
    }

    hotelTaxonomyTermUpdateTransactionBySlug(transactionId, hotelid, taxonomy, slug, data) {
        return this._client.hotelTaxonomyTermUpdateTransactionBySlug(transactionId, hotelid, taxonomy, slug, data);
    }

    loadHotelTaxonomyTermView(viewId, hotelId, taxonomy, builder) {
        return this._client.loadHotelTaxonomyTermView(viewId, hotelId, taxonomy, builder);
    }

    loadHotelTaxonomyTermViewBySlug(viewId, hotelId, taxonomy, slug, eagerType) {
        return this._client.loadHotelTaxonomyTermViewBySlug(viewId, hotelId, taxonomy, slug, eagerType);
    }    
}

export default BookInApi;
