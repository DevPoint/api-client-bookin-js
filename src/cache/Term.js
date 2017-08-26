
class Term { 

    constructor(id, hotel_id, taxonomy) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.parent_id = null;
        this.taxonomy = taxonomy;
        this.slug = '';
        this.name = '';
        this.description = '';
        this.hidden = false;
        this.locked = false;
        this.created_at = "";
        this.updated_at = "";
    }
}

export default Term;