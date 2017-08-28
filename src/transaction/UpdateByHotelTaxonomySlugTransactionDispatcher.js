
import { TransactionDispatcher } from 'api-client-core';
import UpdateByHotelTaxonomySlugTransaction from './UpdateByHotelTaxonomySlugTransaction';

class UpdateByHotelTaxonomySlugTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new UpdateByHotelTaxonomySlugTransaction(
            action.id, action.itemType, 
            action.hotelId, action.taxonomy, action.slug, 
            action.data);
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

export default UpdateByHotelTaxonomySlugTransactionDispatcher;