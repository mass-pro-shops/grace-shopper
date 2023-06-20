import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHistory, getHistory } from "./orderSlice";

export const OrderHistory = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHistory())
    },[dispatch])

    const history = useSelector(getHistory)
    console.log(history)
    return (
        <div className="order-history-container">
            <h1>User order history</h1>
            {history && history.length ? (
                history.map((item) => (
                    <div key = {item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            ): (
                <h1>No history!</h1>
            )}
        </div>
    )
}