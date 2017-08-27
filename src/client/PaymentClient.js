
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
}

export default PaymentClient;
