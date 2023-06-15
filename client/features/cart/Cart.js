import React, { useEffect, useState } from "react";
import {useCart } from "react-use-cart";
import Checkout from "./Checkout";

export const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()

    const [total,setTotal] = useState(0)

    useEffect(() => {
        getTotal()
    }, [])

    const totalPrice = (price, method) => {
        if(method === "minus" && total >= 0) {
            if(result <= 0) {
                setTotal(0)
            }
            const result = total - price;
            setTotal(result)
        } else {
            const result = total + price
            setTotal(result)
        }
    };


    const getTotal = () => {
        let res = 0
        if(items === undefined) {
            return setTotal(0)
        }
        for(let i = 0; i < items.length; i++) {
            res += items[i].price
        }
        setTotal(res)
    }

    const formatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    if(isEmpty) return <p className="cartComp">Your cart is empty!</p>

    return (
        <div className = "cartComp">
            <h1>Cart ({totalUniqueItems})</h1>
            <div>
                {items.map((item) => (
                    <div key={item.id} className = "cartCard">
                        <p>{item.name}</p>
                        <p>Price:{formatter.format(`${item.price}`)}</p>
                        <small>Qty: {item.quantity}</small>
                        <button
                        className = "cartButton"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1, totalPrice(item.price, "add"))}
                        >
                        Add
                        </button>
                        <button 
                        className ="cartButton"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1, totalPrice(item.price, "minus"))}
                        >
                        Remove
                        </button>
                    </div>
                ))}
                <div className = "checkOutCard">
                    <p>Total:{formatter.format(`${total}`)}</p>               
                    <button onClick={() => emptyCart()}>Empty cart</button>
                    <Checkout name={"total items"} amount={total}/>
                </div>
            </div>
        </div>
    )
}