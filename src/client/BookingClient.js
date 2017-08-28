
import CacheEntryClient from './CacheEntryClient';

class BookingClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'booking');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/bookings/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/bookings${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/bookings${paramsStr}`;
    }

    _buildApiLoadCustomerManyUrl(apiHost, customerId, paramsStr) {
        return `${apiHost}/customers/${customerId}/bookings${paramsStr}`;
    }
}

export default BookingClient;
