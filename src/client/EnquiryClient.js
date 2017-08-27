
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

    loadHotelMany(apiHost, hotelId, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadHotelManyUrl(apiHost, hotelId, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    } 
}

export default EnquiryClient;
