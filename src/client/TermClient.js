
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

    _buildApiHotelLoadManyUrl(apiHost, hotelId, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/terms${paramsStr}`;
    }

    _buildApiHotelTaxonomyLoadManyUrl(apiHost, hotelId, taxonomy, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/taxonomies/${taxonomy}/terms${paramsStr}`;
    }

    _buildApiHotelTaxonomyLoadBySlugUrl(apiHost, hotelId, taxonomy, slug, paramsStr) {
        return `${apiHost}/hotels/${hotelId}/taxonomies/${taxonomy}/terms/${slug}${paramsStr}`;
    }

    _buildApiHotelTaxonomyInsertUrl(apiHost, hotelId, taxonomy) {
        return this._buildApiHotelTaxonomyLoadManyUrl(apiHost, hotelId, taxonomy, '');
    }

    _buildApiHotelTaxonomyUpdateBySlugUrl(apiHost, hotelId, taxonomy, slug) {
        return this._buildApiHotelTaxonomyLoadBySlugUrl(apiHost, hotelId, taxonomy, slug, '');
    }

    hotelTaxonomyInsert(transactionId, hotelid, taxonomy, data) {
        const apiHost = this._api.getHost();
        const apiInsertUrl = this._buildApiHotelTaxonomyInsertUrl(apiHost, hotelid, taxonomy);
        return this._insert(transactionId, data, apiInsertUrl);
    }

    hotelTaxonomyUpdateBySlug(transactionId, hotelid, taxonomy, slug, data) {
        const apiHost = this._api.getHost();
        const apiUpdateUrl = this._buildApiHotelTaxonomyUpdateBySlugUrl(apiHost, hotelid, taxonomy, slug, '');
        return this._updateBySlug(transactionId, data, apiUpdateUrl);
    }

    hotelTaxonomyLoadBySlug(apiHost, hotelId, taxonomy, slug, eagerType) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadParamsStr(itemType, eagerType);
        const apiLoadUrl = this._buildApiHotelTaxonomyLoadBySlugUrl(apiHost, hotelId, taxonomy, slug, apiParamsStr);
        return this._load(viewId, eagerType, apiLoadUrl);
    }

    hotelTaxonomyLoadMany(apiHost, hotelId, taxonomy, builder) {
        const apiHost = this._api.getHost();
        const apiParamsStr = this._buildApiLoadManyParamsStr(builder);
        const apiLoadUrl = this._buildApiHotelTaxonomyLoadManyUrl(apiHost, hotelId, taxonomy, apiParamsStr);
        return this._loadMany(viewId, apiLoadUrl);
    }
}

export default TermClient;
