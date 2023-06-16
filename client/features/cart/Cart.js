// import React, { useEffect, useState } from "react";
// import {useCart } from "react-use-cart";
// import Checkout from "./CheckoutTest";

// export const Cart = () => {
//     const {
//         isEmpty,
//         totalUniqueItems,
//         items,
//         updateItemQuantity,
//         removeItem,
//         emptyCart,
//     } = useCart()

//     const [total,setTotal] = useState(0)

//     useEffect(() => {
//         getTotal()
//     }, [])

//     const totalPrice = (price, method) => {
//         if(method === "minus" && total >= 0) {
//             if(result <= 0) {
//                 setTotal(0)
//             }
//             const result = total - price;
//             setTotal(result)
//         } else {
//             const result = total + price
//             setTotal(result)
//         }
//     };


//     const getTotal = () => {
//         let res = 0
//         if(items === undefined) {
//             return setTotal(0)
//         }
//         for(let i = 0; i < items.length; i++) {
//             res += items[i].price
//         }
//         setTotal(res)
//     }

//     const formatter = new Intl.NumberFormat('en-us', {
//         style: 'currency',
//         currency: 'USD',
//         minimumFractionDigits: 2
//     })

//     if(isEmpty) return <p>Your cart it empty!</p>

//     return (
//         <div>
//             <h1>Cart ({totalUniqueItems})</h1>
//             <ul>
//                 {items.map((item) => (
//                     <li key={item.id}>
//                         {item.quantity} {item.name} {formatter.format(`${item.price}`)} &mdash;
//                         <button
//                         onClick={() => updateItemQuantity(item.id, item.quantity - 1, totalPrice(item.price, "minus"))}
//                         >
//                         -
//                         </button>
//                         <button
//                         onClick={() => updateItemQuantity(item.id, item.quantity + 1, totalPrice(item.price, "add"))}
//                         >
//                         +
//                         </button>
//                         <button onClick={() => removeItem(item.id)}>Remove item</button>
//                     </li>
//                 ))}
//                 {formatter.format(`${total}`)}
//                 <Checkout 
//                     name={"total items"}
//                     amount={total}/>
//                 <button onClick={() => emptyCart()}>Empty cart</button>
//             </ul>
//         </div>
//     )
// }


// Attempt to use cart schema 
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCartItems, fetchCartItems } from "./cartSlice";

export const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(allCartItems)

    useEffect(()=> {
        dispatch(fetchCartItems())
    },[dispatch])

    return (
        <div>
            {cartItems && cartItems.length ? (
                cartItems.map((item) => (
                    <p>{item.name}</p>
                ))
            ): (
                <p>Cart empty!</p>
            )}
        </div>
    )
}