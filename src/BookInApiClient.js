
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

    loadBookingView(viewId, bookingId, builder) {
        return this._cacheEntryClients[builder.itemType].loadBookingMany(viewId, bookingId, builder);
    }

    loadHotelView(viewId, hotelId, builder) {
        return this._cacheEntryClients[builder.itemType].loadHotelMany(viewId, hotelId, builder);
    }

    loadHotelViewBySlug(viewId, itemType, hotelId, slug, eagerType) {
        return this._cacheEntryClients[itemType].loadHotel(viewId, hotelId, slug, eagerType);
    }

    loadHotelTaxonomyTermView(viewId, hotelId, taxonomy, builder) {
        return this._cacheEntryClients['term'].loadHotelTaxonomyMany(viewId, hotelId, taxonomy, builder);
    }

    loadHotelTaxonomyTermViewBySlug(viewId, hotelId, taxonomy, slug, eagerType) {
        return this._cacheEntryClients['term'].loadHotelTaxonomy(viewId, hotelId, taxonomy, slug, eagerType);
    }
}

export default BookInApiClient;
