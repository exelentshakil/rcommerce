import React, {useContext, useEffect} from 'react'
// import contexts
import { ProductsContext } from '../../contexts/ProductsProvider';
import { ACTIONS } from '../../reducers/productsReducer';

import './Products.scss'

import {useLocation} from 'react-router-dom';

const Products = () => {
    const [products, dispatch, fetchProducts] = useContext(ProductsContext);
    const location = useLocation()
    const getProducts = async () => {

        const data = await fetchProducts();
        return data;

    }

    useEffect(() => {

        getProducts();

        console.log('Called from Products');

    }, []);

    console.log(products);

    const remove = (e) => {
        console.log(e.target);
    }

    return (
        <div className="products">

        {
            products.data.map(product => (
            <div key={ product.id } className="product">
                <h1>{ product.title }</h1>
                <p>{ product.body }</p>
            <button onClick={remove}>X</button>
            </div>
            ))

        }

        </div>
    )
}

export default Products
