
export default {

    /*
     * Transaction INSERT actions
     */

    insertByHotelTaxonomyStart(nameSpace, transactionId, itemType, hotelId, taxonomy, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix + 'SET_TRANSACTION_INSERT_BY_HOTELTAXONOMY',
            id: transactionId,
            itemType: itemType,
            hotelId: hotelId,
            taxonomy: taxonomy,
            data: data
       };
    }

    /*
     * Transaction UPDATE actions
     */

    updateByHotelSlugStart(nameSpace, transactionId, itemType, hotelId, slug, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix + 'SET_TRANSACTION_UPDATE_BY_HOTELSLUG',
            id: transactionId,
            itemType: itemType,
            hotelId: hotelId,
            slug: slug,
            data: data
       };
    }

    updateByHotelTaxonomySlugStart(nameSpace, transactionId, itemType, hotelId, taxonomy, slug, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix + 'SET_TRANSACTION_UPDATE_BY_HOTELTAXONOMYSLUG',
            id: transactionId,
            itemType: itemType,
            hotelId: hotelId,
            taxonomy: taxonomy,
            slug: slug,
            data: data
       };
    }

};
