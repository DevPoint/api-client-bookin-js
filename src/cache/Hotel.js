
import { ObservableObject } from 'api-client-core';

class Hotel extends ObservableObject { 

    constructor(id) {
        this._id = id;
        this._name = '';
        this._street = '';
        this._city = '';
        this._zip = '';
        this._email = '';
        this._phone = '';
        this._website = '';
    }

    get id() {
        return this._id;
    }

    set name(value) {
        this._name = value;
        this._markAsChanged()
    }

    get name() {
        return this._name;
    }

    set street(value) {
        this._street = value;
        this._markAsChanged()
    }

    get street() {
        return this._street;
    }

    set zip(value) {
        this._zip = value;
        this._markAsChanged()
    }

    get zip() {
        return this._zip;
    }

    set email(value) {
        this._email = value;
        this._markAsChanged()
    }

    get email() {
        return this._email;
    }

    set phone(value) {
        this._phone = value;
        this._markAsChanged()
    }

    get phone() {
        return this._phone;
    }

    set website(value) {
        this._website = value;
        this._markAsChanged()
    }

    get website() {
        return this._website;
    }
}


export default Hotel;