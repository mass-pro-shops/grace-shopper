import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
    "singleUser", async (userId) => {
        const token = window.localStorage.getItem("token");
        try {
            const {data} = await axios.get(`/api/users/${userId}`, {
                headers: {
                    authorization: token,
                },
            })
            return data
        } catch (err) {
            throw new Error(err.response.data)
        }
    }
)

export const editUser = createAsyncThunk(
    "editUser", async (userId) => {
        const token = window.localStorage.getItem("token");
        try {
            const {data} = await axios.put(`/api/users/${userId.id}`, userId, {
                headers: {
                    authorization: token,
                }
            })
            return data
        } catch (err) {
            throw new Error(err.response.data.errors[0].message)
        }
    }
)

export const deleteUser = createAsyncThunk(
    "deleteUser", async (userId) => {
        const token = window.localStorage.getItem("token");
        try {
            const {data} = await axios.delete(`/api/users/${userId}`,{
                headers: {
                    authorization: token,
                }
            })
            return userId
        } catch (err) {
            console.log(err)
        }
    }
)

export const addUser = createAsyncThunk(
    "addUser", async (newUser) => {
        const token = window.localStorage.getItem("token");
        try {
            const {data} = await axios.post(`/api/users/`, newUser, {
                headers: {
                    authorization: token,
                }
            })
            return data
        } catch (err) {
            throw new Error(err.response.data.errors[0].message)
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
        }),
        builder.addCase(addUser.fulfilled, (state,action) => {
            state.singleUser = action.payload
        })
    }
})

export default userProfileSlice.reducer