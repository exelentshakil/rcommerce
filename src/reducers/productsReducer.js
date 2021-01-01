export const ACTIONS = {
    FETCH_ALL: 'fetch_all',
    REMOVE: 'remove',
}


export const productsReducer = (products, action) => {

    switch (action.type) {
        case ACTIONS.FETCH_ALL:
            return fetch_all(products, action.payload.data);
        default:
            new Error('Something went wrong');
    }
}

const fetch_all = (products, newData) => {

    return {...products, data: newData};
}
