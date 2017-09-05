
import TransactionPropTypes from './proptypes';

export default {

    'insert': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'insertByHotelTaxonomy': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        hotelId: TransactionPropTypes.hotelId,
        taxonomy: TransactionPropTypes.taxonomy,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'update': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'updateByHotelSlug': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        hotelId: TransactionPropTypes.hotelId,
        slug: TransactionPropTypes.slug,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'updateByHotelTaxonomySlug': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        hotelId: TransactionPropTypes.hotelId,
        taxonomy: TransactionPropTypes.taxonomy,
        slug: TransactionPropTypes.slug,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'delete': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'login': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

    'registerByHotel': {
        transactionId: TransactionPropTypes.transactionId,
        itemType: TransactionPropTypes.itemType,
        type: TransactionPropTypes.type,
        hotelId: TransactionPropTypes.hotelId,
        ready: TransactionPropTypes.ready,
        processing: TransactionPropTypes.processing,
        succeeded: TransactionPropTypes.succeeded,
        failed: TransactionPropTypes.failed,
        itemsIds: TransactionPropTypes.itemsIds,
        errors: TransactionPropTypes.errors,
        validationErrors: TransactionPropTypes.validationErrors
    },

};
