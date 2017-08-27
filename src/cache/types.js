
import { 
    CacheConstructorType,
    CachePropTypes as PropTypes } from 'api-client-core';

export default {

    'accommodation': {
        construct: new CacheConstructorType('id', 'hotel_id', 'slug'),
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
        construct: new CacheConstructorType('id', 'hotel_id', 'slug'),
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
        construct: new CacheConstructorType('id', 'hotel_id'),
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'season': {
        construct: new CacheConstructorType('id', 'hotel_id', 'slug'),
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
        construct: new CacheConstructorType('id', 'hotel_id', 'taxonomy', 'slug'),
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
        construct: new CacheConstructorType('id', 'hotel_id'),
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
        construct: new CacheConstructorType('id'),
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
        construct: new CacheConstructorType('id', 'hotel_id'),
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
        construct: new CacheConstructorType('id', 'hotel_id'),
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'offer': {
        construct: new CacheConstructorType('id', 'hotel_id'),
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'payment': {
        construct: new CacheConstructorType('id', 'hotel_id'),
        id: PropTypes.nullableInteger,
        hotel_id: PropTypes.nullableInteger,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    },

    'user': {
        construct: new CacheConstructorType('id'),
        id: PropTypes.nullableInteger,
        username: PropTypes.string,
        email: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string
    }

};
