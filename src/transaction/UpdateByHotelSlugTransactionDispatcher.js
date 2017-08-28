
import { TransactionDispatcher } from 'api-client-core';
import UpdateByHotelSlugTransaction from './UpdateByHotelSlugTransaction';

class UpdateByHotelSlugTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new UpdateByHotelSlugTransaction(
            action.id, action.itemType, action.hotelId, action.slug, action.data);
    }

    _updateTransaction(transition, payload) {
    	super._updateTransaction(transaction, payload);
        for (let propsKey in payload) {
            switch (propsKey) {
                case 'validationErrors':
                    transaction.setValidationErrors(this._cloneObject(payload[propsKey]));
                    break;
            }
        }
    }
}

export default UpdateByHotelSlugTransactionDispatcher;