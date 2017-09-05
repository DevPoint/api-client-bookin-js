
import { Transaction } from 'api-client-core';

class UpdateByHotelTaxonomySlugTransaction extends Transaction {

    constructor(transactionId, itemType, hotelId, taxonomy, slug) {
        super(transactionId, itemType, 'updateByHotelTaxonomySlug');
        this._hotelId = hotelId;
        this._taxonomy = taxonomy;
        this._slug = slug;
    }

    get hotelId()) {
        return this._hotelId;
    }

    get taxonomy() {
        return this._taxonomy;
    }

    get slug() {
        return this._slug;
    }
}

export default UpdateByHotelTaxonomySlugTransaction;
