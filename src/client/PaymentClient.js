
import CacheEntryClient from './CacheEntryClient';

class PaymentClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'payment');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/payments/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/payments${paramsStr}`;
    }

    _buildApiLoadBookingManyUrl(apiHost, bookingId, paramsStr) {
        return `${apiHost}/bookings/${bookingId}/payments${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/payments${paramsStr}`;
    }

    loadBookingMany(apiHost, bookingId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadBookingManyUrl(apiHost, bookingId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
}

export default PaymentClient;
