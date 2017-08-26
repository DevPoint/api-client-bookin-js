
class BaseTerm { 

    constructor(id, hotel_id) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.slug = '';
        this.name = '';
        this.description = '';
        this.hidden = false;
        this.locked = false;
    }
}

export default BaseTerm;
