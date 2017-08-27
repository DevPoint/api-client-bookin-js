
import { CacheEntry } from 'api-client-core';

class Booking extends CacheEntry { 

    constructor(id, hotel_id) {
        super();
        this._id = id;
        this._hotel_id = hotel_id;
        this._enquiry_id = null;
        this._state = '';
        this._arrival = null;
        this._departure = null;
        this._board = null;
        this._totalPrice = null;
        this._paymentState = "";
        this._advancePayment = null;
        this._title = null;
        this._firstName = "";
        this._lastName = "";
        this._extraName = "";
        this._street = "";
        this._city = "";
        this._zip = "";
        this._country = "";
        this._email = "";
        this._phone = "";
        this._created_at = "";
        this._updated_at = "";
        this._accommodations = [];
        this._guests = [];
    }

    get id() {
        return this._id;
    }

    get hotel_id() {
        return this._hotel_id;
    }

    set enquiry_id(value) {
        this._enquiry_id = value;
        this._markAsChanged()
    }

    get enquiry_id() {
        return this._enquiry_id;
    }

    set state(value) {
        this._state = value;
        this._markAsChanged()
    }

    get state() {
        return this._state;
    }

    set arrival(value) {
        this._arrival = value;
        this._markAsChanged()
    }

    get arrival() {
        return this._arrival;
    }

    set departure(value) {
        this._departure = value;
        this._markAsChanged()
    }

    get departure() {
        return this._departure;
    }

    set board(value) {
        this._board = value;
        this._markAsChanged()
    }

    get board() {
        return this._board;
    }

    set totalPrice(value) {
        this._totalPrice = value;
        this._markAsChanged()
    }

    get totalPrice() {
        return this._totalPrice;
    }

    set paymentState(value) {
        this._paymentState = value;
        this._markAsChanged()
    }

    get paymentState() {
        return this._paymentState;
    }

    set advancePayment(value) {
        this._advancePayment = value;
        this._markAsChanged()
    }

    get advancePayment() {
        return this._advancePayment;
    }

    set title(value) {
        this._title = value;
        this._markAsChanged()
    }

    get title() {
        return this._title;
    }

    set firstName(value) {
        this._firstName = value;
        this._markAsChanged()
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = value;
        this._markAsChanged()
    }

    get lastName() {
        return this._lastName;
    }

    set extraName(value) {
        this._extraName = value;
        this._markAsChanged()
    }

    get extraName() {
        return this._extraName;
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

    set country(value) {
        this._country = value;
        this._markAsChanged()
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    set phone(value) {
        this._phone = value;
        this._markAsChanged()
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

    set accommodations(values) {
        this._accommodations = values;
        this._markAsChanged()
    }

    get accommodations() {
        return this._accommodations;
    }

    set guests(values) {
        this._guests = values;
        this._markAsChanged()
    }

    get guests() {
        return this._guests;
    }
}

export default Booking;
