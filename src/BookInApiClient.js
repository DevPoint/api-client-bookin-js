
import { ApiClient } from 'api-client-core';
import http from 'axios';
import { 
    HotelClient, TermClient, 
    AccommodationClient, RoomClient, SeasonClient,
    BookingClient, EnquiryClient,
    InvoiceClient, OfferClient, PaymentClient,
    UserClient } from './client';

class BookInApiClient extends ApiClient {

    _createCacheEntryClients(api) {
        return {
            'hotel': new HotelClient(api),
            'accommodation': new AccommodationClient(api),
            'room': new RoomClient(api),
            'season': new SeasonClient(api),
            'term': new TermClient(api),
            'booking': new BookingClient(api),
            'enquiry': new EnquiryClient(api),
            'invoice': new InvoiceClient(api),
            'offer': new OfferClient(api),
            'payment': new PaymentClient(api),
            'user': new UserClient(api),
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

    loadHotelTaxonomyTermViewBySlug(viewId, hotelId, taxonomy, slug, eagerType) {
        return this._cacheEntryClients['term'].loadHotelTaxonomy(viewId, hotelId, taxonomy, slug, eagerType);
    }

    loadHotelAccommodationView(viewId, hotelId, builder) {
        return this._cacheEntryClients['accommodation'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelAccommodationViewBySlug(viewId, hotelId, slug, eagerType) {
        return this._cacheEntryClients['accommodation'].loadHotel(viewId, hotelId, slug, eagerType);
    }

    loadHotelRoomView(viewId, hotelId, builder) {
        return this._cacheEntryClients['room'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelRoomViewBySlug(viewId, hotelId, slug, eagerType) {
        return this._cacheEntryClients['room'].loadHotel(viewId, hotelId, slug, eagerType);
    }

    loadHotelSeasonView(viewId, hotelId, builder) {
        return this._cacheEntryClients['season'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelSeasonViewBySlug(viewId, hotelId, slug, eagerType) {
        return this._cacheEntryClients['season'].loadHotel(viewId, hotelId, slug, eagerType);
    }

    loadHotelBookingView(viewId, hotelId, builder) {
        return this._cacheEntryClients['booking'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelEnquiryView(viewId, hotelId, builder) {
        return this._cacheEntryClients['enquiry'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelInvoiceView(viewId, hotelId, builder) {
        return this._cacheEntryClients['invoice'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelOfferView(viewId, hotelId, builder) {
        return this._cacheEntryClients['offer'].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelPaymentView(viewId, hotelId, builder) {
        return this._cacheEntryClients['payment'].loadHotelMany(viewId, hotelId, builder);
    }

    loadBookingInvoiceView(viewId, bookingId, builder) {
        return this._cacheEntryClients['invoice'].loadBookingMany(viewId, bookingId, builder);
    }

    loadBookingOfferView(viewId, bookingId, builder) {
        return this._cacheEntryClients['offer'].loadBookingMany(viewId, bookingId, builder);
    }

    loadBookingPaymentView(viewId, bookingId, builder) {
        return this._cacheEntryClients['payment'].loadBookingMany(viewId, bookingId, builder);
    }

    loadHotelUserView(viewId, hotelId, builder) {
        return this._cacheEntryClients['user'].loadHotelMany(viewId, hotelId, builder);
    }

}

export default BookInApiClient;
