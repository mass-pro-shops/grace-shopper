import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const editProduct = createAsyncThunk('editProduct',
async (newInfo) => {
    try{
        const { data } = await axios.put(`/api/products/${newInfo.id}`,newInfo);
        return data;
    }catch(err){
        console.log('editProduct error',err)
    }
})

export const deleteProduct = createAsyncThunk('deleteProduct',
async (id) => {
    try{
        const { data } = await axios.delete(`/api/products/${id}`)
        return data
    }catch(err){
        console.log('delete product error:',err)
    }
})

const editProductSlice = createSlice({
    name:'editProduct',
    initialState:{},
    extraReducers:(builder) => {
        builder.addCase(editProduct.fulfilled, (state,action) => {
            state = action.payload
            return action.payload
        })
        builder.addCase(deleteProduct.fulfilled, (state,action) => {
            state =[]
        })
    }
})

export default editProductSlice.reducer;