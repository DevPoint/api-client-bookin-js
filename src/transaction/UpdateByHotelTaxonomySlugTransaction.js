
import { Transaction } from 'api-client-core';

class UpdateByHotelTaxonomySlugTransaction extends Transaction {

    constructor(transactionId, itemType, hotelId, taxonomy, slug, data) {
        super(transactionId, itemType, 'updateByHotelTaxonomySlug');
        this._hotelId = hotelId;
        this._taxonomy = taxonomy;
        this._slug = slug;
        this._data = data;
        this._validationErrors = {};
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

    get data() {
        return this._data;
    }

    get hasValidationErrors() {
        return (Object.keys(this.validationErrors).length > 0);
    }

    get validationErrors() {
        return this._validationErrors;
    }

    setValidationErrors(errors) {
        this._validationErrors = validationErrors;
        this.markAsChanged();
        return this;
    }
}

export default UpdateByHotelTaxonomySlugTransaction;
