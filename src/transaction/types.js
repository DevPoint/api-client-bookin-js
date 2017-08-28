
import { 
    ObservablePropType,
    ObservablePropTypes as PropTypes } from 'api-client-core';

const TransactionPropTransactionId = new PropType('string', '', null).setReadOnly(true);
const TransactionPropItemType = new PropType('string', '', null).setReadOnly(true);
const TransactionPropType = new PropType('string', '', null).setReadOnly(true);
const TransactionPropItemId = new PropType('integer', 0, PropTypes.number).setReadOnly(true);
const TransactionPropHotelId = new PropType('integer', 0, PropTypes.number).setReadOnly(true);
const TransactionPropTaxonomy = new PropType('string', '', null).setReadOnly(true);
const TransactionPropSlug = new PropType('string', '', null).setReadOnly(true);

const TransactionPropReady = new PropType('boolean', false, null).setSetter('setReady');
const TransactionPropProcessing = new PropType('boolean', false, null).setSetter('setProcessing');
const TransactionPropSucceeded = new PropType('boolean', false, null).setSetter('setSucceeded');
const TransactionPropFailed = new PropType('boolean', false, null).setSetter('setFailed');
const TransactionPropData = new PropType('object', {}, null).setSetter('setData');
const TransactionPropItemIdNullable = new PropType('nullableInteger', null, PropTypes.integer).setSetter('setItemId');
const TransactionPropErrors = new PropType('array', [], PropTypes.object).setSetter('setErrors');
const TransactionPropValidationErrors = new PropType('object', {}, null).setSetter('setValidationErrors');

export default {

    'insert': {
        transactionId: TransactionPropTransactionId,
        itemType: TransactionPropItemType,
        type: TransactionPropType,
        ready: TransactionPropReady,
        processing: TransactionPropProcessing,
        succeeded: TransactionPropSucceeded,
        failed: TransactionPropFailed,
        itemId: TransactionPropItemIdNullable,
        data: TransactionPropData,
        errors: TransactionPropErrors,
        validationErrors: TransactionPropValidationErrors
    },

    'insertByHotelTaxonomy': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        hotelId: PropTypes.integer,
        taxonomy: PropTypes.string,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        itemId: PropTypes.nullableInteger,
        data: PropTypes.object,
        errors: PropTypes.array,
        validationErrors: PropTypes.object
    },

    'update': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        data: PropTypes.object,
        errors: PropTypes.array,
        validationErrors: PropTypes.object
    },

    'updateByHotelSlug': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        hotelId: PropTypes.integer,
        slug: PropTypes.string,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        data: PropTypes.object,
        errors: PropTypes.array,
        validationErrors: PropTypes.object
    },

    'updateByHotelTaxonomySlug': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        hotelId: PropTypes.integer,
        taxonomy: PropTypes.string,
        slug: PropTypes.string,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        data: PropTypes.object,
        errors: PropTypes.array,
        validationErrors: PropTypes.object
    },

    'delete': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        itemId: PropTypes.integer,
        errors: PropTypes.array
    },

    'login': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        credentials: PropTypes.object,
        errors: PropTypes.array,
        validationErrors: PropTypes.object
    },

    'registerByHotel': {
        transactionId: PropTypes.string,
        itemType: PropTypes.string,
        type: PropTypes.string,
        hotelId: PropTypes.integer,
        ready: PropTypes.boolean,
        processing: PropTypes.boolean,
        succeeded: PropTypes.boolean,
        failed: PropTypes.boolean,
        credentials: PropTypes.object,
        errors: PropTypes.array,
        validationErrors: PropTypes.object
    },

};
