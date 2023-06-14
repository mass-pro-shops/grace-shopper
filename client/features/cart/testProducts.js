import { useCart } from "react-use-cart";
import React from "react";

const products = [
    {
        id: 1,
        name: 'Dummy Laptop',
        price: 2000
    },
    {
        id: 2,
        name: 'Fummy Laptop',
        price: 120
    },
    {
        id: 3,
        name: 'Summy Laptop',
        price: 240
    },
    {
        id: 4,
        name: 'Rummy Laptop',
        price: 1000
    }
]

const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export const TestProducts = () => {
    const {addItem } = useCart()
    
    return (
        <div>
            {products.map((p)=> (
                <div key = {p.id}>
                    {p.name} {formatter.format(`${p.price}`)}
                    <button onClick={() => addItem(p,1)}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}