
import { TransactionDispatcher } from 'api-client-core';
import UpdateByHotelTaxonomySlugTransaction from './UpdateByHotelTaxonomySlugTransaction';

class UpdateByHotelTaxonomySlugTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new UpdateByHotelTaxonomySlugTransaction(
            action.id, action.itemType, 
            action.hotelId, action.taxonomy, action.slug);
    }
}

export default UpdateByHotelTaxonomySlugTransactionDispatcher;