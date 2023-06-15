import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, getAllProducts } from './allProducts';
import { Link } from 'react-router-dom';
import { Categories } from '../index';
import { useCart } from 'react-use-cart';

const AllProducts = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(getAllProducts);
    const {addItem} = useCart()

    const clickHandler = () => {
        window.alert('Item added to cart!')
    }
   
    const formatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <div className="main-section">
            <Categories />
            <div className="products-section">
                <div className="products-header">
                    <h1>Products</h1>
                </div>
                <div className="products-container">
                    {productsList && productsList.length ? (
                        productsList.map((product) => (
                            <div key={product.id} className="card">
                                <div className="card-img">
                                    <Link to={`/products/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </Link>
                                </div>
                                <div className="card-infos">
                                    <h3 className="card-title">
                                        {product.name}
                                    </h3>
                                    <h2 className="price">{formatter.format(`${product.price}`)}</h2>
                                    <button onClick={() => {addItem(product), clickHandler()}} className="buy">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>no data</h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
