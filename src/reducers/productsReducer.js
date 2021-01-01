export const ACTIONS = {
    FETCH_ALL: 'fetch_all',
    REMOVE: 'remove',
}


export const productsReducer = (products, action) => {

    switch (action.type) {
        case ACTIONS.FETCH_ALL:
            return fetchALl(products, action.payload.data);
        default:
            throw new Error('Something went wrong');
    }
}

const fetchALl = (products, newData) => {

    return {...products, data: newData, loading:false};
}
