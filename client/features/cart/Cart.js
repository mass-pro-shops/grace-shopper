import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Checkout from "./CheckoutTest";

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, [items]); // added this!!! Update the total when the items in the cart change

  const totalPrice = (price, method) => {
    if (method === "minus") {// added this!!!! Ensure the total does not go below zero
      if (total <= 0) {
        setTotal(0);
      } else {
        setTotal((prevTotal) => prevTotal - price);
      }
    } else {
      setTotal((prevTotal) => prevTotal + price);
    }
  };

  const getTotal = () => {
    let res = 0;
    if (items === undefined) {
      return setTotal(0);
    }
    for (let i = 0; i < items.length; i++) {
      res += items[i].price * items[i].quantity; // added this!!!!! Multiply price x quantity
    }
    setTotal(res);
  };

  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  if (isEmpty) return <p>Your cart is empty!</p>;

  return (
    <div className="cart">
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} {item.name} {formatter.format(item.price)} &mdash;
            <button
              className="quantityButton"
              onClick={() =>
                updateItemQuantity(item.id, item.quantity - 1, totalPrice(item.price, "minus"))
              }
            >
              -
            </button>
            <button
              className="quantityButton"
              onClick={() =>
                updateItemQuantity(item.id, item.quantity + 1, totalPrice(item.price, "add"))
              }
            >
              +
            </button>
            <button className="removeButton" onClick={() => removeItem(item.id)}>
              Remove item
            </button>
          </li>
        ))}
        <li className="total">{formatter.format(total)}</li>
        <Checkout name="Total items" amount={total} />
        <button className="emptyButton" onClick={() => emptyCart()}>
          Empty cart
        </button>
      </ul>
    </div>
  );
};