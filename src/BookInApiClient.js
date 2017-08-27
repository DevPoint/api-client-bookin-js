
import { ApiClient } from 'api-client-core';
import http from 'axios';
import { 
    HotelClient, TermClient, RoomClient,
    BooingClient } from './client';

class BookInApiClient extends ApiClient {

    _createCacheEntryClients(api) {
        return {
            'hotel': new HotelClient(api)
            'room': new RoomClient(api)
            'term': new TermClient(api)
            'booking': new BooingClient(api)
        };
    }

    loginTransaction(transactionId, credentials) {
        this._api.beginDispatch();
        this._api.dispatch(this._api.loginStart(transactionId, credentials));
        this._api.dispatch(this._api.loginFailed(transactionId, ['not_implemented'], {}));
        this._api.endDispatch();
        return this._api.transactions().find(transactionId);
    }

    registerTransaction(transactionId, credentials) {
        this._api.beginDispatch();
        this._api.dispatch(this._api.registerStart(transactionId, credentials));
        this._api.dispatch(this._api.registerFailed(transactionId, ['not_implemented'], {}));
        this._api.endDispatch();
        return this._api.transactions().find(transactionId);
    }

    loadHotelTaxonomyTermView(viewId, hotelId, taxonomy, builder) {
        return this._cacheEntryClients['term'].loadHotelTaxonomyMany(viewId, hotelId, taxonomy, builder);
    }

    loadHotelTaxonomyTermViewBySlug(viewId, hotelId, taxonomy, slug) {
        return this._cacheEntryClients['term'].loadHotelTaxonomy(viewId, hotelId, taxonomy, slug);
    }

    loadHotelRoomView(viewId, hotelId, taxonomy, builder) {
        return this._cacheEntryClients['room'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelRoomViewBySlug(viewId, hotelId, slug) {
        return this._cacheEntryClients['room'].loadHotel(viewId, hotelId, slug);
    }

    loadHotelBookingView(viewId, hotelId, taxonomy, builder) {
        return this._cacheEntryClients['booking'].loadHotelMany(viewId, hotelId, builder);
    }

}

export default BookInApiClient;
