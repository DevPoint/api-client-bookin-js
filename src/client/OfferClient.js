
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

    _buildApiLoadBookingManyUrl(apiHost, bookingId, paramsStr) {
        return `${apiHost}/bookings/${bookingId}/offers${paramsStr}`;
    }

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/offers${paramsStr}`;
    }

    loadBookingMany(apiHost, bookingId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadBookingManyUrl(apiHost, bookingId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
}

export default OfferClient;
