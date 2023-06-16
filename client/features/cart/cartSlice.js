import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk('get/cart-items', async() => {
    try {
        const {data} = await axios.get('/api/cart')
        return data
    } catch(error) {
        throw new Error(error)
    }
});

export const CartSlice = createSlice({
    name: 'cart',
    initialState:{},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchCartItems,(state,action) => {
            state = action.payload
        })
    }
})

export const allCartItems = (state) => {
    return state.cart
}

export default CartSlice.reducer