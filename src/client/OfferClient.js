
import CacheEntryClient from './CacheEntryClient';

class OfferClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'offer');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/offers/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/offers${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/offers${paramsStr}`;
    }

    _buildApiLoadBookingManyUrl(apiHost, bookingId, paramsStr) {
        return `${apiHost}/bookings/${bookingId}/offers${paramsStr}`;
    }

    _buildApiLoadCustomerManyUrl(apiHost, customerId, paramsStr) {
        return `${apiHost}/customers/${customerId}/offers${paramsStr}`;
    }

}

export default OfferClient;
