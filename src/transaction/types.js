
import { 
    ObservablePropType,
    ObservablePropTypes as PropTypes } from 'api-client-core';
import PropTypes from './proptypes';

export default {

    'insert': {
        transactionId: PropTypes.transactionId,
        itemType: PropTypes.itemType,
        type: PropTypes.type,
        ready: PropTypes.ready,
        processing: PropTypes.processing,
        succeeded: PropTypes.succeeded,
        failed: PropTypes.failed,
        itemId: PropTypes.itemId,
        data: PropTypes.data,
        errors: PropTypes.errors,
        validationErrors: PropTypes.validationErrors
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
