
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
}

export default EnquiryClient;
