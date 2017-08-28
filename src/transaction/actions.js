
export default {

    /*
     * Transaction UPDATE actions
     */

    updateBySlugStart(nameSpace, transactionId, itemType, slug, data) {
        const nameSpacePrefix = (nameSpace) ? '_' + nameSpace : '';
        return {
            type: nameSpacePrefix + 'SET_TRANSACTION_UPDATE_BY_SLUG',
            id: transactionId,
            itemType: itemType,
            slug: slug,
            data: data
       };
    }

};
