
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

    _buildApiLoadHotelTaxonomyUrl(apiHost, hotelId, taxonomy, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/taxonomies/${taxonomy}/terms/${slug}${paramsStr}`;
    }

    _buildApiLoadHotelTaxonomyManyUrl(apiHost, hotelId, taxonomy, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/taxonomies/${taxonomy}/terms${paramsStr}`;
    }

    loadHotelTaxonomy(apiHost, hotelId, taxonomy, slug, eagetType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiLoadHotelTaxonomyUrl(apiHost, hotelId, taxonomy, slug, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }

    loadHotelTaxonomyMany(apiHost, hotelId, taxonomy, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadManyUrl = this._buildApiLoadHotelTaxonomyManyUrl(apiHost, hotelId, taxonomy, apiParamsStr);
        return this._loadMany(viewId, apiLoadManyUrl);
    }
}

export default TermClient;