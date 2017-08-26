
import BaseTerm from './BaseTerm';

class Accommodation extends BaseTerm { 

    constructor(hotel_id, id) {
        super(hotel_id, id);
        this.room = null;
    }
}

export default Accommodation;
