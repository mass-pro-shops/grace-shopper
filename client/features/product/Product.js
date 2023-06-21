import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from './productSlices';
import { useCart } from 'react-use-cart';

const Product = () => {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProduct);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [cartConfirmation, setCartConfirmation] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct(Id));
  }, [Id, dispatch]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart =  () => {
     addItem(product, quantity);
    setCartConfirmation(`Added ${quantity} to cart!`);
  };

  return (
    <div className="singleProduct">
      {product.id ? (
        <div className="productContainer">
          <img src={product.image} alt={product.name} className="productImage" />
          <div className="productDetails">
            <h2 className="productTitle">{product.name}</h2>
            <p className="productDescription">{product.description}</p>
            <p className="productPrice">Price: ${product.price}</p>
            <p className="productRating">Rating: {product.rating} / 5</p>

            <div className="productActions">
              <button onClick={handleAddToCart} className="buyButton"> Add to cart </button>
              <div className="quantityButtons">
                <button onClick={handleQuantityDecrease} className="quantityButton">-</button>
                <button onClick={handleQuantityIncrease} className="quantityButton">+</button>
                <span className="quantityValue">{quantity}</span>
              </div>
            </div>
            {cartConfirmation && <p>{cartConfirmation}</p>}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
