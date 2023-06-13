import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, getAllProducts } from './allProducts';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(getAllProducts);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <div>
            <div>
                <h1>Products</h1>
            </div>
            <div>
                {productsList && productsList.length ? (
                    productsList.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <Link to={`./${product.id}`}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                        </div>
                    ))
                ) : (
                    <h3>no data</h3>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
