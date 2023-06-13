import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/allProducts/allProducts';
import userProfileSlice from '../features/userProfile/userProfileSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        productsList: productsReducer,
        singleUser:userProfileSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
