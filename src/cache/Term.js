
import { ObservableObject } from 'api-client-core';
import BaseTerm from './BaseTerm';

class Term extends BaseTerm { 

    constructor() {
        this._parent_id = null;
        this._taxonomy = '';
    }

    set parent_id(value) {
        this._parent_id = value;
        this._markAsChanged()
    }

    get parent_id() {
        return this._parent_id;
    }

    set taxonomy(value) {
        this._taxonomy = value;
        this._markAsChanged()
    }

    get taxonomy() {
        return this._taxonomy;
    }
}

export default Term;