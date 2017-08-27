
import { 
    CachePropTypes as PropTypes } from 'api-client-core';

export default {

    'accommodation': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        room: PropTypes.nullableInteger,
        slug: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        hidden: PropTypes.boolean,
        locked: PropTypes.boolean
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'room': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        slug: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        hidden: PropTypes.boolean,
        locked: PropTypes.boolean
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'roomprice': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'season': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        slug: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        hidden: PropTypes.boolean,
        locked: PropTypes.boolean,
        periods: PropTypes.array
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'term': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        parent_id: PropTypes.nullableInteger,
        taxonomy: PropTypes.string,
        slug: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        hidden: PropTypes.boolean,
        locked: PropTypes.boolean
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'booking': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        enquiry_id: PropTypes.nullableInteger,
        state: PropTypes.string,
        arrival: PropTypes.nullableString,
        departure: PropTypes.nullableString,
        board: PropTypes.nullableInteger,
        totalPrice: PropTypes.nullableInteger,
        paymentState: PropTypes.string,
        advancePayment: PropTypes.nullableNumber,
        title: PropTypes.nullableInteger,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        extraName: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        zip: PropTypes.string,
        country: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        accommodations: PropTypes.array,
        guests: PropTypes.array,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'hotel': {
        id: PropTypes.nullableInteger,
        name: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        zip: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'enquiry': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        title: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        extraName: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        zip: PropTypes.string,
        country: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'invoice': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'offer': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'payment': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'user': {
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        username: PropTypes.string,
        email: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    }

};
