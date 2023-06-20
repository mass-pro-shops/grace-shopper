import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/allProducts/allProducts';
import productSliceReducer from '../features/product/productSlices'
import userProfileSlice from '../features/userProfile/userProfileSlice'
import cartSliceReducer, { getTotals } from '../features/cart/cartSlice';
import orderHistoryReducer from '../features/checkout/orderSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        productsList: productsReducer,
        singleUser:userProfileSlice,
        product: productSliceReducer,
        cart: cartSliceReducer,
        orderHistory: orderHistoryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(getTotals())

export default store;
export * from '../features/auth/authSlice';
