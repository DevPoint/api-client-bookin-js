
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

    _buildApiLoadBookingManyUrl(apiHost, bookingId, paramsStr) {
        return `${apiHost}/bookings/${bookingId}/invoices${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/invoices${paramsStr}`;
    }

    loadBookingMany(apiHost, bookingId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadBookingManyUrl(apiHost, bookingId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
    
}

export default InvoiceClient;
