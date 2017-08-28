
import { TransactionDispatcher } from 'api-client-core';
import InsertByHotelTaxonomyTransaction from './InsertByHotelTaxonomyTransaction';

class InsertByHotelTaxonomyTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new InsertByHotelTaxonomyTransaction(
            action.id, action.itemType, 
            action.hotelId, action.taxonomy, 
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

export default InsertByHotelTaxonomyTransactionDispatcher;