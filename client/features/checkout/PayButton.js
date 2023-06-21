import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const PayButton = ({cartItems}) => {
    const user = useSelector((state) => state.auth.me)
    const dispatch = useDispatch()

    const handleCheckout = async () => {
       await axios.post(`http://localhost:8080/api/stripe/create-checkout-session`,{
            cartItems,
            userId: user.id,
        }).then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((error) => console.error(error.message))

     
    }
    return (
        <div>
            <button onClick={() => handleCheckout()}>Check Out</button>
        </div>
    )
}

export default PayButton