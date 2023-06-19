import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, getAllProducts } from './allProducts';
import { Link, useNavigate } from 'react-router-dom';
import { Categories } from '../index';
import { addItem } from '../cart/cartSlice';
import { Navigate } from 'react-router-dom';
const AllProducts = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(getAllProducts);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    const addToCart = (product) => {
        dispatch(addItem(product))
    }
    
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    

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
                                    <h2 className="price">{USDollar.format(product.price)}</h2>
                                    <button onClick={() => {addToCart(product)}} className="buy">
                                        Buy Now
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
