
import { Transaction } from 'api-client-core';

class UpdateByHotelSlugTransaction extends Transaction {

    constructor(transactionId, itemType, hotelId, slug, data) {
        super(transactionId, itemType, 'updateByHotelSlug');
        this._hotelId = hotelId;
        this._slug = slug;
        this._data = data;
        this._validationErrors = {};
    }

    get hotelId()) {
        return this._hotelId;
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

export default UpdateByHotelSlugTransaction;
