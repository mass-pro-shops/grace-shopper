import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const PayButton = ({cartItems}) => {
    // const user = useSelector((state) => state.auth)
    const handleCheckout = async () => {
       await axios.post(`http://localhost:8080/api/stripe/create-checkout-session`,{
            cartItems,
            // userId: user.id,
        }).then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((error) => console.error(error.message))
    }
    return (
        <div>
            <Button variant="primary" onClick={() => handleCheckout()}>Check Out</Button>
        </div>
    )
}

export default PayButton