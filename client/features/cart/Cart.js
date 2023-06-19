import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addItem, decreaseCart, getCart, removeFromCart, clearCart, getTotals } from "./cartSlice";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PayButton from "../checkout/PayButton";

export const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    
    useEffect(() => {
       dispatch(getTotals())
    }, [cart])
    const removeHandler = (item) => {
        dispatch(removeFromCart(item))
    }

    const decreaseItem = (item) => {
        dispatch(decreaseCart(item))
    }

    const increaseItem = (item) => {
        dispatch(addItem(item))
    }
    
    const clearCartHandler = () => {
        dispatch(clearCart())
    };

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    

    return ( 
        <div className = "cart-container">
            <h1 id = "cart-page-title">Shopping cart</h1>
            <div className = 'cartItems'>
            {cart.cartItems && cart.cartItems.length ? (
                cart.cartItems.map((item) => (
                    <div className = "cart-item" key = {item.id}>
                        <div className = "item-info">
                            <h3>Product: {item.name}</h3>
                            <img className = 'cart-image' src = {item.image}/>
                            <p>Price: {USDollar.format(item.price)}</p>
                            <p>Total: {USDollar.format(item.price * item.cartQuantity)}</p>
                        </div>
                        <div className = "item-buttons">
                            <Button variant = "secondary" className = 'incButton' onClick ={() => increaseItem(item)}>+</Button> 
                            <p>QTY: {item.cartQuantity}</p>                      
                            <Button variant ="secondary" className = 'incButton'onClick={() => decreaseItem(item)}>-</Button>                       
                            <Button variant ="secondary" className = 'incButton' onClick={() => removeHandler(item)}>remove</Button>
                        </div>
                    </div>
                ))
            ): (
                <div className="cart-empty">
                    <h3>Cart empty!</h3>
                    <Link to ='/home'>
                        <span>Start shopping!</span>
                    </Link>
                </div>
            )}
            </div>
            <div className ="cart-total-checkout">
                <div className = "cart-total">
                    <span>Subtotal: ${`${cart.cartTotalAmount}`}</span>
                    <Button variant="primary" onClick={() => clearCartHandler()}>Clear cart</Button>
    
                </div>
                <div class = 'cart-checkout'>
                    <small>Taxes and shipping calculated at checkout.</small>
                    <PayButton cartItems = {cart.cartItems}/>
                    <Link to ='/home'>Continue shopping.</Link>
                </div>
            </div>
        </div>
    )
}