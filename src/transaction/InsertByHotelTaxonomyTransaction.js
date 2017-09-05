
import { Transaction } from 'api-client-core';

class InsertByHotelTaxonomyTransaction extends Transaction {

    constructor(transactionId, itemType, hotelId, taxonomy) {
        super(transactionId, itemType, 'insertByHotelTaxonomy');
        this._hotelId = hotelId;
        this._taxonomy = taxonomy;
    }

    get hotelId()) {
        return this._hotelId;
    }

    get taxonomy() {
        return this._taxonomy;
    }
}

export default InsertByHotelTaxonomyTransaction;
