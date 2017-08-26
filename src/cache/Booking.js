
class Booking { 

    constructor(id, hotel_id) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.enquiry_id = null;
        this.state = '';
        this.arrival = null;
        this.departure = null;
        this.board = null;
        this.totalPrice = null;
        this.paymentState = "";
        this.advancePayment = null;
        this.title = null;
        this.firstName = "";
        this.lastName = "";
        this.extraName = "";
        this.street = "";
        this.city = "";
        this.zip = "";
        this.country = "";
        this.email = "";
        this.phone = "";
        this.created_at = "";
        this.updated_at = "";
        this.accommodations = [];
        this.guests = [];
    }
}

export default Booking;
