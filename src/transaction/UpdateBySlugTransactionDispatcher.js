
import TransactionDispatcher from 'api-client-core';
import UpdateBySlugTransaction from './UpdateBySlugTransaction';

class UpdateBySlugTransactionDispatcher extends TransactionDispatcher {

    _createTransaction(action) {
        return new UpdateBySlugTransaction(
            action.id, action.itemType, action.slug, action.data);
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

export default UpdateTransactionDispatcher;