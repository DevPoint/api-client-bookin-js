
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

    hotelInsertTransaction(transactionId, itemType, hotelid, data) {
        return this._client.hotelInsertTransaction(transactionId, itemType, hotelid, data);
    }

    hotelUpdateTransactionBySlug(transactionId, itemType, hotelid, slug, data) {
        return this._client.hotelUpdateTransactionBySlug(transactionId, itemType, hotelid, slug, data);
    }

    loadHotelView(viewId, hotelId, builder) {
        return this._client.loadHotelView(viewId, hotelId, builder);
    }

    loadHotelViewBySlug(viewId, itemType, hotelId, slug, eagerType) {
        return this._client.loadHotelViewBySlug(viewId, itemType, hotelId, slug, eagerType);
    }

    loadBookingView(viewId, bookingId, builder) {
        return this._client.loadBookingView(viewId, bookingId, builder);
    }

    loadCustomerView(viewId, customerId, builder) {
        return this._client.loadCustomerView(viewId, customerId, builder);
    }

    hotelTaxonomyTermInsertTransaction(transactionId, hotelid, data) {
        return this._client.hotelTaxonomyTermInsertTransaction(transactionId, hotelid, data);
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
