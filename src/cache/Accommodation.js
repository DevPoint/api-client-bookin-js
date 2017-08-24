
import { ObservableObject } from 'api-client-core';
import BaseTerm from './BaseTerm';

class Accommodation extends BaseTerm { 

    constructor() {
        this._room = null;
    }

    set room(value) {
        this._room = value;
        this._markAsChanged()
    }

    get room() {
        return this._room;
    }
}

export default Accommodation;

export default Booking;