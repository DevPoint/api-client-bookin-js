
import CacheEntryClient from './CacheEntryClient';

class InvoiceClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'invoice');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/invoices/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/invoices${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/invoices${paramsStr}`;
    }    

    _buildApiLoadBookingManyUrl(apiHost, bookingId, paramsStr) {
        return `${apiHost}/bookings/${bookingId}/invoices${paramsStr}`;
    }

    _buildApiLoadCustomerManyUrl(apiHost, customerId, paramsStr) {
        return `${apiHost}/customers/${customerId}/invoices${paramsStr}`;
    }
}

export default InvoiceClient;
