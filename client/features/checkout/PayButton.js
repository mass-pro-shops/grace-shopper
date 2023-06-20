import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { createHistory } from "./orderSlice";

const PayButton = ({cartItems}) => {
    // const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleCheckout = async () => {
       await axios.post(`http://localhost:8080/api/stripe/create-checkout-session`,{
            cartItems,
            // userId: user.id,
        }).then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((error) => console.error(error.message))

        // await axios.post(`http://localhost:8080/api/stripe/create-order-history`,{
        //     cartItems
        // })
        dispatch(createHistory({cartItems}))
    }
    return (
        <div>
            <Button variant="primary" onClick={() => handleCheckout()}>Check Out</Button>
        </div>
    )
}

export default PayButton