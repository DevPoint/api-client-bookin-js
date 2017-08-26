
class Accommodation { 

    constructor(hotel_id, id) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.slug = '';
        this.name = '';
        this.description = '';
        this.hidden = false;
        this.locked = false;
        this.created_at = "";
        this.updated_at = "";
        this.room = null;
    }
}

export default Accommodation;
