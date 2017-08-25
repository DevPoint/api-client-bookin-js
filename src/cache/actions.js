
export default {

    /*
     * Accommodation SET, UPDATE, REMOVE actions
     */

    setAccommodation(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_ACCOMMODATION',
            id: cacheId,
            payload: data
        };
    },

    setAccommodations(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_ACCOMMODATION_MANY',
            payload: data
        };
    },

    updateAccommodation(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_ACCOMMODATION',
            id: cacheId,
            payload: data
        };
    },

    removeAccommodation(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_ACCOMMODATION',
            id: cacheId
        };
    },

    /*
     * Booking SET, UPDATE, REMOVE actions
     */

    setBooking(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_BOOKING',
            id: cacheId,
            payload: data
        };
    },

    setBookings(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_BOOKING_MANY',
            payload: data
        };
    },

    updateBooking(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_BOOKING',
            id: cacheId,
            payload: data
        };
    },

    removeBooking(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_BOOKING',
            id: cacheId
        };
    },

    /*
     * Hotel SET, UPDATE, REMOVE actions
     */

    setHotel(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_HOTEL',
            id: cacheId,
            payload: data
        };
    },

    setHotels(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_HOTEL_MANY',
            payload: data
        };
    },

    updateHotel(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_HOTEL',
            id: cacheId,
            payload: data
        };
    },

    removeHotel(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_HOTEL',
            id: cacheId
        };
    },

    /*
     * Invoice SET, UPDATE, REMOVE actions
     */

    setInvoice(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_INVOICE',
            id: cacheId,
            payload: data
        };
    },

    setInvoices(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_INVOICE_MANY',
            payload: data
        };
    },

    updateInvoice(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_INVOICE',
            id: cacheId,
            payload: data
        };
    },

    removeInvoice(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_INVOICE',
            id: cacheId
        };
    },

    /*
     * Offer SET, UPDATE, REMOVE actions
     */

    setOffer(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_OFFER',
            id: cacheId,
            payload: data
        };
    },

    setOffers(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_OFFER_MANY',
            payload: data
        };
    },

    updateOffer(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_OFFER',
            id: cacheId,
            payload: data
        };
    },

    removeOffer(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_OFFER',
            id: cacheId
        };
    },

    /*
     * Payment SET, UPDATE, REMOVE actions
     */

    setPayment(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_PAYMENT',
            id: cacheId,
            payload: data
        };
    },

    setPayments(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_PAYMENT_MANY',
            payload: data
        };
    },

    updatePayment(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_PAYMENT',
            id: cacheId,
            payload: data
        };
    },

    removePayment(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_PAYMENT',
            id: cacheId
        };
    },

    /*
     * Room SET, UPDATE, REMOVE actions
     */

    setRoom(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_ROOM',
            id: cacheId,
            payload: data
        };
    },

    setRooms(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_ROOM_MANY',
            payload: data
        };
    },

    updateRoom(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_ROOM',
            id: cacheId,
            payload: data
        };
    },

    removeRoom(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_ROOM',
            id: cacheId
        };
    },

    /*
     * RoomPrice SET, UPDATE, REMOVE actions
     */

    setRoomPrice(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_ROOMPRICE',
            id: cacheId,
            payload: data
        };
    },

    setRoomPrices(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_ROOMPRICE_MANY',
            payload: data
        };
    },

    updateRoomPrice(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_ROOMPRICE',
            id: cacheId,
            payload: data
        };
    },

    removeRoomPrice(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_ROOMPRICE',
            id: cacheId
        };
    },

    /*
     * Term SET, UPDATE, REMOVE actions
     */

    setTerm(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_TERM',
            id: cacheId,
            payload: data
        };
    },

    setTerms(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_TERM_MANY',
            payload: data
        };
    },

    updateTerm(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_TERM',
            id: cacheId,
            payload: data
        };
    },

    removeTerm(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_TERM',
            id: cacheId
        };
    },

    /*
     * User SET, UPDATE, REMOVE actions
     */

    setUser(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_USER',
            id: cacheId,
            payload: data
        };
    },

    setUsers(nameSpace, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'SET_CACHE_USER_MANY',
            payload: data
        };
    },

    updateUser(nameSpace, cacheId, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'UPDATE_CACHE_USER',
            id: cacheId,
            payload: data
        };
    },

    removeUser(nameSpace, cacheId) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix . 'REMOVE_CACHE_USER',
            id: cacheId
        };
    },

};
