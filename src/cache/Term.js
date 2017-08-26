
import { ObservableObject } from 'api-client-core';
import BaseTerm from './BaseTerm';

class Term extends BaseTerm { 

    constructor(id, hotel_id, taxonomy) {
        super(id, hotel_id);
        this.taxonomy = taxonomy;
        this.parent_id = null;
    }
}

export default Term;