import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { Id } = useParams();

  const product = {
    id: Id,
    name: 'Example Product',
    description: 'Make a cool description later',
    price: 9.99,
    // Other product details
  };

  return (
    <div className='singleProduct'>
      <h1>Product Name and Details??</h1>
      <p>Product ID: {product.id}</p>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Render other product details */}
    </div>
  );
};
//to do list
//get example images
//fix product id
//rating
//buy button
// import navbar and footer later
export default Product