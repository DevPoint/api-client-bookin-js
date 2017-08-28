
import { ApiDispatcher } from 'api-client-core';

class BookInApiDispatcher extends ApiDispatcher {

    dispatch(action) {
        const actionTypeFrags = action.type.split('_');
        if (actionTypeFrags.length >= 2) {
            if (actionTypeFrags[1] === 'TRANSACTION') {
                let transactionType = actionTypeFrags[2].toLowerCase();
                if (actionTypeFrags.length >= 5 && actionTypeFrags[3] === 'BY' && actionTypeFrags[4] === 'SLUG') {
                	transactionType += 'BySlug';
                }
                const transactionDispatcher = this._getTransactionDispatcher(transactionType);
                transactionDispatcher.dispatch(this._api.transactions(), action);
            }
            else if (actionTypeFrags[1] === 'VIEW') {
                const viewDispatcher = this._getViewDispatcher();
                viewDispatcher.dispatch(this._api.views(), action);
            }
            else if (actionTypeFrags[1] === 'CACHE') {
                const itemType = actionTypeFrags[2].toLowerCase();
                const cacheDispatcher = this._getCacheDispatcher(itemType);
                cacheDispatcher.dispatch(this._api.cache(itemType), action);
            }
        }
        return action;
    }
}

export default BookInApiDispatcher;
