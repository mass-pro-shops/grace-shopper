import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from './productSlices';

const Product = () => {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProduct);
console.log('this is product',product)
  useEffect(() => {
    dispatch(fetchProduct(Id));
  }, [Id, dispatch]);
//const {id, name, description, price } = product
//console.log(id, name, description, price)
console.log(product.id)
  return (
    <div className='singleProduct'>
      {product.id ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image}/>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
