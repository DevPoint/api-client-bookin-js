
import { TransactionDispatcherFactory as BaseTransactionDispatcherFactory } from 'api-client-core';
import UpdateBySlugTransactionDispatcher from './UpdateBySlugTransactionDispatcher';

class TransactionDispatcherFactory extends BaseTransactionDispatcherFactory {

    _createUpdateBySlugTransactionDispatcher() {
        return new UpdateBySlugTransactionDispatcher();
    }

    createDispatchers() {
        const transactionDispatchers = {
            insert: this._createInsertTransactionDispatcher(),
            update: this._createUpdateTransactionDispatcher(),
            updateBySlug: this._createUpdateBySlugTransactionDispatcher(),
            delete: this._createDeleteTransactionDispatcher(),
            login: this._createLoginTransactionDispatcher(),
            register: this._createRegisterTransactionDispatcher()
        };
        return transactionDispatchers;
    }
}
