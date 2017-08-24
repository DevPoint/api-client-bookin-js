
import { ObservableObject } from 'api-client-core';

class BaseTerm extends ObservableObject { 

    constructor() {
        this._id = null;
        this._hotel_id = null;
        this._slug = '';
        this._name = '';
        this._description = '';
        this._hidden = false;
        this._locked = false;
    }

    set id(value) {
        this._id = value;
        this._markAsChanged()
    }

    get id() {
        return this._id;
    }

    set hotel_id(value) {
        this._hotel_id = value;
        this._markAsChanged()
    }

    get hotel_id() {
        return this._hotel_id;
    }

    set slug(value) {
        this._slug = value;
        this._markAsChanged()
    }

    get slug() {
        return this._slug;
    }

    set name(value) {
        this._name = value;
        this._markAsChanged()
    }

    get name() {
        return this._name;
    }

    set description(value) {
        this._description = value;
        this._markAsChanged()
    }

    get description() {
        return this._description;
    }

    set hidden(value) {
        this._hidden = value;
        this._markAsChanged()
    }

    get hidden() {
        return this._hidden;
    }

    set locked(value) {
        this._locked = value;
        this._markAsChanged()
    }

    get locked() {
        return this._locked;
    }

    set created_at(value) {
        this._created_at = value;
        this._markAsChanged()
    }

    get created_at() {
        return this._created_at;
    }

    set updated_at(value) {
        this._updated_at = value;
        this._markAsChanged()
    }

    get updated_at() {
        return this._updated_at;
    }
}

export default BaseTerm;
