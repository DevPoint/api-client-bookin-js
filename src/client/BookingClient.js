
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
}

export default BookingClient;
