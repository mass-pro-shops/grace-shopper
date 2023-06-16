import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/allProducts/allProducts';
import productSliceReducer from '../features/product/productSlices'
import userProfileSlice from '../features/userProfile/userProfileSlice'
import cartSliceReducer from '../features/cart/cartSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        productsList: productsReducer,
        singleUser:userProfileSlice,
        product: productSliceReducer,
        cart: cartSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
