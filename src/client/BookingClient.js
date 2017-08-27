
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

    loadHotelMany(apiHost, hotelId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadHotelManyUrl(apiHost, hotelId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
}

export default BookingClient;
