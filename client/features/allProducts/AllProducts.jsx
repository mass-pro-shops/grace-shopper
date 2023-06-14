import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, getAllProducts } from './allProducts';
import { Link } from 'react-router-dom';
import { Categories } from '../index';

const AllProducts = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(getAllProducts);

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
                                    <Link to={`./${product.id}`}>
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
                                    <h2 className="price">{product.price}</h2>
                                    <a href="#" className="buy">
                                        Buy Now
                                    </a>
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
