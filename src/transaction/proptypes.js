
import { 
    ObservablePropType as PropType,
    ObservablePropTypes as PropTypes } from 'api-client-core';

export const TransactionPropTransactionId = new PropType('string', '', null)
    .setReadOnly(true);

export const TransactionPropItemType = new PropType('string', '', null)
    .setReadOnly(true);

export const TransactionPropType = new PropType('string', '', null)
    .setReadOnly(true);

export const TransactionPropHotelId = new PropType('integer', 0, PropTypes.number)
    .setReadOnly(true);

export const TransactionPropTaxonomy = new PropType('string', '', null)
    .setReadOnly(true);

export const TransactionPropSlug = new PropType('string', '', null)
    .setReadOnly(true);

export const TransactionPropReady = new PropType('boolean', false, null)
    .setSetter('setReady');

export const TransactionPropProcessing = new PropType('boolean', false, null)
    .setSetter('setProcessing');

export const TransactionPropSucceeded = new PropType('boolean', false, null)
    .setSetter('setSucceeded');

export const TransactionPropFailed = new PropType('boolean', false, null)
    .setSetter('setFailed');

export const TransactionPropItemsIds = new PropType('array', [], PropTypes.object)
    .setSetter('setItemsIds');

export const TransactionPropErrors = new PropType('array', [], PropTypes.object)
    .setSetter('setErrors');

export const TransactionPropValidationErrors = new PropType('object', {}, null)
    .setSetter('setValidationErrors');

export default {

    transactionId: TransactionPropTransactionId,
    itemType: TransactionPropItemType,
    type: TransactionPropType,
    hotelId: TransactionPropHotelId,
    taxonomy: TransactionPropTaxonomy,
    slug: TransactionPropSlug,
    ready: TransactionPropReady,
    processing: TransactionPropProcessing,
    succeeded: TransactionPropSucceeded,
    failed: TransactionPropFailed,
    itemsIds: TransactionPropItemsIds,
    errors: TransactionPropErrors,
    validationErrors: TransactionPropValidationErrors

};
