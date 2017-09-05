
import { TransactionDispatcher } from 'api-client-core';
import InsertByHotelTaxonomyTransaction from './InsertByHotelTaxonomyTransaction';

class InsertByHotelTaxonomyTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new InsertByHotelTaxonomyTransaction(
            action.id, action.itemType, 
            action.hotelId, action.taxonomy);
    }
}

export default InsertByHotelTaxonomyTransactionDispatcher;