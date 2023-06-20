import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createHistory = createAsyncThunk('post/order-history', async ({cartItems}) => {
    try{
        const {data} = await axios.post('/api/stripe/create-order-history',{cartItems})
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})

export const fetchHistory = createAsyncThunk('get/order-history', async() => {
    try {
        const {data} = await axios.get('/api/stripe/order-history')
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})
const orderHistorySlice = createSlice({
    name: 'orderHistory',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHistory.fulfilled, (state,action) => {
            console.log(action.payload)
            return action.payload
        })
    }
})
export const getHistory = (state) => {
    return state.orderHistory
}

export default orderHistorySlice.reducer