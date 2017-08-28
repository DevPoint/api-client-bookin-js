
import { TransactionDispatcherFactory as BaseTransactionDispatcherFactory } from 'api-client-core';
import InsertUpdateByHotelTaxonomyTransactionDispatcher from './InsertUpdateByHotelTaxonomyTransactionDispatcher';
import UpdateByHotelSlugTransactionDispatcher from './UpdateByHotelSlugTransactionDispatcher';
import UpdateByHotelTaxonomySlugTransactionDispatcher from './UpdateByHotelTaxonomySlugTransactionDispatcher';

class TransactionDispatcherFactory extends BaseTransactionDispatcherFactory {

    _createInsertUpdateByHotelTaxonomyTransactionDispatcher() {
        return new InsertUpdateByHotelTaxonomyTransactionDispatcher();
    }

    _createUpdateByHotelSlugTransactionDispatcher() {
        return new UpdateByHotelSlugTransactionDispatcher();
    }

    _createUpdateByHotelTaxonomySlugTransactionDispatcher() {
        return new UpdateByHotelTaxonomySlugTransactionDispatcher();
    }

    createDispatchers() {
        const transactionDispatchers = {
            insert: this._createInsertTransactionDispatcher(),
            insertByHotelTaxonomy: this._createInsertUpdateByHotelTaxonomyTransactionDispatcher(),
            update: this._createUpdateTransactionDispatcher(),
            updateByHotelSlug: this._createUpdateByHotelSlugTransactionDispatcher(),
            updateByHotelTaxonomySlug: this._createUpdateByHotelTaxonomySlugTransactionDispatcher(),
            delete: this._createDeleteTransactionDispatcher(),
            login: this._createLoginTransactionDispatcher(),
            register: this._createRegisterTransactionDispatcher()
        };
        return transactionDispatchers;
    }
}
