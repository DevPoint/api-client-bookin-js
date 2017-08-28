
import CacheEntryClient from './CacheEntryClient';

class EnquiryClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'enquiry');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/enquiries/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/enquiries${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/enquiries${paramsStr}`;
    }

    _buildApiLoadBookingManyUrl(apiHost, bookingId, paramsStr) {
        return `${apiHost}/bookings/${bookingId}/enquiries${paramsStr}`;
    }

    _buildApiLoadCustomerManyUrl(apiHost, customerId, paramsStr) {
        return `${apiHost}/customers/${customerId}/enquiries${paramsStr}`;
    }
}

export default EnquiryClient;
