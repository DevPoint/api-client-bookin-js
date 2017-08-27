
import { CacheEntry } from 'api-client-core';
import BaseTerm from './BaseTerm';

class Term extends CacheEntry { 

    constructor(id, hotel_id, taxonomy) {
        super(id, hotel_id);
        this._taxonomy = taxonomy;
        this._parent_id = null;
    }

    get taxonomy() {
        return this._taxonomy;
    }

    set parent_id(value) {
        this._parent_id = value;
        this._markAsChanged()
    }

    get parent_id() {
        return this._parent_id;
    }
}

export default Term;