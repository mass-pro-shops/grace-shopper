import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, getAllProducts } from './allProducts';
import { Link } from 'react-router-dom';
import { Categories } from '../index';

const AllProducts = () => {
    const dispatch = useDispatch();
    const [filtered, setFiltered] = useState(false)
    const [category, setCategory] = useState("laptop")
    let productsList = useSelector(getAllProducts);
    
    const handleClick = (category) => {
        setFiltered(true)
        setCategory(category.category.toLowerCase())
    }

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <div className="main-section">
            <Categories handleClick={handleClick}/>
            <div className="products-section">
                <div className="products-header">
                    <h1>Products</h1>
                </div>
                <div className="products-container">
                    {productsList && productsList.length ? (
                        productsList.filter(product => {
                           return filtered ? product.category === category: product
                        }).map((product) => (
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
