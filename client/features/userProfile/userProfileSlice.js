import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
    "singleUser", async (userId) => {
        try {
            const {data} = await axios.get(`/api/users/${userId}`)
            return data
        } catch (err) {
            throw new Error(err.response.data)
        }
    }
)

export const editUser = createAsyncThunk(
    "editUser", async (userId) => {
        try {
            const {data} = await axios.put(`/api/users/${userId.id}`,userId)
            return data
        } catch (err) {
            throw new Error(err.response.data.errors[0].message)
        }
    }
)

export const deleteUser = createAsyncThunk(
    "deleteUser", async (userId) => {
        try {
            const {data} = await axios.delete(`/api/users/${userId}`)
            return userId
        } catch (err) {
            console.log(err)
        }
    }
)

const userProfileSlice = createSlice({
    name:"singleUser",
    initialState:{
        singleUser:[],
        error:""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUser.fulfilled, (state,action) => {
            state.singleUser = action.payload
        }),
        builder.addCase(fetchSingleUser.rejected, (state,action) => {
            state.singleUser = "it didn't work"
        }),
        builder.addCase(editUser.fulfilled, (state,action) => {
            state.singleUser = action.payload
        }),
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.singleUser = []
        })
    }
})

export default userProfileSlice.reducer