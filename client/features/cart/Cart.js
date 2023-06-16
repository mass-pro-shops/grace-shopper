import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addItem, decreaseCart, getCart, removeFromCart, clearCart } from "./cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    
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

    return (
        <div className = "cartCard">
            {cart.cartItems && cart.cartItems.length ? (
                cart.cartItems.map((item) => (
                    <div key = {item.id}>
                        <h2>{item.name}</h2>
                        <button onClick={() => removeHandler(item)}>remove</button>
                        <img className = 'cartImage' src = {item.image}/>
                        <small>${item.price}</small>
                        <button onClick={() => decreaseItem(item)}>-</button>
                        <small>QTY: {item.cartQuantity}</small>
                        <button onClick ={() => increaseItem(item)}>+</button>
                        <p>${`${item.price * item.cartQuantity}`}</p>
                    </div>
                ))
            ): (
                <div>
                    <h1>Cart empty!</h1>
                    <Link to ='/home'>Start shopping!</Link>
                </div>
            )}
            <div>
                <button onClick={() => clearCartHandler()}>Clear cart</button>
            </div>
            <div className = "cartTotal">
                <span>Subtotal:  </span>
                <span>${`${cart.cartTotalAmount}`}</span>
            </div>
            <div>
                <small>Taxes and shipping calculated at checkout.</small>
                <button>Checkout</button>
                <Link to ='/home'>Continue shopping.</Link>
            </div>
        </div>
    )
}