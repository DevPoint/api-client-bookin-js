
import { Transaction } from 'api-client-core';

class UpdateByHotelSlugTransaction extends Transaction {

    constructor(transactionId, itemType, hotelId, slug) {
        super(transactionId, itemType, 'updateByHotelSlug');
        this._hotelId = hotelId;
        this._slug = slug;
    }

    get hotelId()) {
        return this._hotelId;
    }

    get slug() {
        return this._slug;
    }
}

export default UpdateByHotelSlugTransaction;
