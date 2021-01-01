import React, {useContext, useEffect} from 'react'
// import contexts
import { ProductsContext } from '../../contexts/ProductsProvider';
import { ACTIONS } from '../../reducers/productsReducer';

import './Products.scss'

// import spinner
import spinner from '../../assets/spinner.gif'

const Products = () => {
    const [products, dispatch, fetchProducts] = useContext(ProductsContext);
    const getProducts = async () => {

        const data = await fetchProducts();
        return data;

    }


    useEffect(() => {

        getProducts();

    }, []);

    console.log('Products from products %O', products);

    const remove = (e) => {
        console.log(e.target);
    }

    return (
        <div className="products">

        {
            products.loading ? <img src={spinner} alt="Loading..."/> :
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
