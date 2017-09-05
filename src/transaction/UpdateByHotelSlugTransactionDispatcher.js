
import { TransactionDispatcher } from 'api-client-core';
import UpdateByHotelSlugTransaction from './UpdateByHotelSlugTransaction';

class UpdateByHotelSlugTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new UpdateByHotelSlugTransaction(
            action.id, action.itemType, 
            action.hotelId, action.slug);
    }
}

export default UpdateByHotelSlugTransactionDispatcher;