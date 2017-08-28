
import { ApiClient } from 'api-client-core';
import http from 'axios';
import { 
    HotelClient, TermClient, 
    AccommodationClient, RoomClient, SeasonClient,
    CustomerClient, BookingClient, EnquiryClient,
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
            'customer': new CustomerClient(api),
            'enquiry': new EnquiryClient(api),
            'invoice': new InvoiceClient(api),
            'offer': new OfferClient(api),
            'payment': new PaymentClient(api),
            'user': new UserClient(api),
        };
    }

    bookingLoadView(viewId, bookingId, builder) {
        return this._cacheEntryClients[builder.itemType].bookingLoadMany(viewId, bookingId, builder);
    }

    customerLoadView(viewId, customerId, builder) {
        return this._cacheEntryClients[builder.itemType].customerLoadMany(viewId, customerId, builder);
    }

    hotelInsertTransaction(transactionId, itemType, hotelid, data) {
        return this._cacheEntryClients[itemType].hotelInsert(transactionId, hotelId, data);
    }

    hotelUpdateTransactionBySlug(transactionId, itemType, hotelid, slug, data) {
        return this._cacheEntryClients[itemType].hotelUpdateBySlug(transactionId, hotelId, slug, data);
    }

    hotelLoadView(viewId, hotelId, builder) {
        return this._cacheEntryClients[builder.itemType].loadHotelMany(viewId, hotelId, builder);
    }

    hotelLoadViewBySlug(viewId, itemType, hotelId, slug, eagerType) {
        return this._cacheEntryClients[itemType].loadHotelBySlug(viewId, hotelId, slug, eagerType);
    }

    hotelTaxonomyTermInsertTransaction(transactionId, hotelid, taxonomy, data) {
        return this._cacheEntryClients['term'].hotelTaxonomyInsert(transactionId, hotelId, taxonomy, data);
    }

    hotelTaxonomyTermUpdateTransactionBySlug(transactionId, hotelid, taxonomy, slug, data) {
        return this._cacheEntryClients['term'].hotelTaxonomyUpdateBySlug(transactionId, hotelId, taxonomy, slug, data);
    }

    hotelTaxonomyLoadTermView(viewId, hotelId, taxonomy, builder) {
        return this._cacheEntryClients['term'].hotelTaxonomyLoadMany(viewId, hotelId, taxonomy, builder);
    }

    hotelTaxonomyLoadTermViewBySlug(viewId, hotelId, taxonomy, slug, eagerType) {
        return this._cacheEntryClients['term'].hotelTaxonomyLoadBySlug(viewId, hotelId, taxonomy, slug, eagerType);
    }
}

export default BookInApiClient;
