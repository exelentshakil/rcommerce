import React, { createContext, useReducer, useEffect } from 'react';
import { ACTIONS, productsReducer } from '../reducers/productsReducer'
import axios from 'axios'
import { wait } from '@testing-library/react';


export const ProductsContext = createContext();

export const ProductsProvider = (props) => {

    const productState = {
        data: [],
        loading: false,
    }
    const fetchProducts = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=40');
        const pdata = await data.data;
        dispatch({ type: ACTIONS.FETCH_ALL, payload: { data: pdata } });

    }

    useEffect(() => {
        fetchProducts();

        console.log('Called from context');

    }, []);

    const [products, dispatch] = useReducer(productsReducer, productState);


    console.log('Products form Context %O', products);

    return (

        <ProductsContext.Provider value={[products, dispatch, fetchProducts]}>
            {props.children}
        </ProductsContext.Provider>

    )
}
