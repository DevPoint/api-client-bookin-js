
import CacheEntryClient from './CacheEntryClient';

class TermClient extends CacheEntryClient {

    constructor(api) {
        super(api, 'term');
    }

    _buildApiLoadUrl(apiHost, itemId, paramsStr) {
        return `${apiHost}/terms/${itemId}${paramsStr}`;
    }

    _buildApiLoadManyUrl(apiHost, paramsStr) {
        return `${apiHost}/terms${paramsStr}`;
    }
}

export default TermClient;
