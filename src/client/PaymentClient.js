
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

    _buildApiLoadHotelManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/payments${paramsStr}`;
    }

    loadHotelMany(apiHost, hotelId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadHotelManyUrl(apiHost, hotelId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
}

export default PaymentClient;
