
import Api, { CacheMap } from 'api-client-core';
import BookInApiClient from './BookInApiClient';
import BookInApiDispatcher from './BookInApiDispatcher';
import cacheActions from './cache/actions';
import { BookInCacheDispatcherFactory } from './cache';

class BookInApi extends Api {

    constructor(nameSpace) {
        super(nameSpace);
        this._cacheActionMapping = new _createCacheActionMapping();
    }

    _createCaches() {
        return {
            'accommodation': new CacheMap(),
            'booking': new CacheMap(),
            'hotel': new CacheMap(),
            'invoice': new CacheMap(),
            'offer': new CacheMap(),
            'payment': new CacheMap(),
            'room': new CacheMap(),
            'roomprice': new CacheMap(),
            'season': new CacheMap(),
            'term': new CacheMap(),
            'user': new CacheMap(),
        };
    }

    _createCacheActionMapping() {
        return {
            'accommodation': {
                set: setAccommodation,
                setMany: setAccommodations,
                update: updateAccommodation,
                delete: deleteAccommodation
            },
            'booking': {
                set: setBooking,
                setMany: setBookings,
                update: updateBooking,
                delete: deleteBooking
            },
            'hotel': {
                set: setHotel,
                setMany: setHotels,
                update: updateHotel,
                delete: deleteHotel
            },
            'invoice': {
                set: setInvoice,
                setMany: setInvoices,
                update: updateInvoice,
                delete: deleteInvoice
            },
            'offer': {
                set: setOffer,
                setMany: setOffers,
                update: updateOffer,
                delete: deleteOffer
            },
            'payment': {
                set: setPayment,
                setMany: setPayments,
                update: updatePayment,
                delete: deletePayment
            },
            'room': {
                set: setRoom,
                setMany: setRooms,
                update: updateRoom,
                delete: deleteRoom
            },
            'roomprice': {
                set: setRoomPrice,
                setMany: setRoomPrices,
                update: updateRoomPrice,
                delete: deleteRoomPrice
            },
            'season': {
                set: setSeason,
                setMany: setSeasons,
                update: updateSeason,
                delete: deleteSeason
            },
            'term': {
                set: setTerm,
                setMany: setTerms,
                update: updateTerm,
                delete: deleteTerm
            },
            'user': {
                set: setUser,
                setMany: setUsers,
                update: updateUser,
                delete: deleteUser
            }
        }
    }

    _createClient() {
        return new BookInApiClient(this);
    }

    _createCacheDispatcherFactory() {
        return new BookInCacheDispatcherFactory();
    }

    setCacheEntry(itemType, cacheId, data) {
        return cacheActions[this._cacheActionMapping[itemType]['set']](cacheId, data);
    }

    setCacheEntries(itemType, data) {
        return cacheActions[this._cacheActionMapping[itemType]['setMany']](data);
    }

    updateCacheEntry(itemType, cacheId, data) {
        return cacheActions[this._cacheActionMapping[itemType]['update']](cacheId, data);
    }

    removeCacheEntry(itemType, cacheId) {
        return cacheActions[this._cacheActionMapping[itemType]['remove']](cacheId);
    }
}

export default BookInApi;
