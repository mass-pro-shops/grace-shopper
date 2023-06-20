import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import { NewUserForm } from '../features/NewUserComponent';
import { ContactPage } from '../features/contactComponent';
import { AllProducts, AdminView, UserProfile} from '../features';
import Product from '../features/product/Product';
import PageNotFound from '../features/404NotFound/PageNotFound';
import { Cart } from '../features/cart/Cart';
import { CheckoutSuccess } from '../features/checkout/checkoutSuccess';
import { OrderHistory } from '../features/checkout/orderHistory';
/**
 * COMPONENT
 */

const AppRoutes = () => {
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(me());
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/contacts" element={<ContactPage />} />
            </Routes>
            {isLoggedIn ? (
                <Routes>
                    <Route path="/admin" element={<AdminView />} />
                    <Route path="/*" element={<PageNotFound />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        key="product"
                        path="/product/:Id"
                        element={<Product />}
                    />
                    <Route path="/*" element={<Home />} />
                    <Route
                        key="product"
                        path="/products/:Id"
                        element={<Product />}
                    />
                    <Route path="/userProfile" element={<UserProfile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        key="product"
                        path="/products/:Id"
                        element={<Product />}
                    />
                    <Route
                        path="/products"
                        element={
                            <AllProducts
                                name="allProducts"
                                displayName="allProducts"
                            />
                        }
                    />
                    <Route path="/order-history" element={<OrderHistory/>}/>
                    <Route path="/register" element={<NewUserForm />} />
                    <Route path="/checkout-success" element={<CheckoutSuccess/>}/>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/*" element={<PageNotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/login"
                        element={<AuthForm name="login" displayName="Login" />}
                    />
                    <Route
                        key="product"
                        path="/products/:Id"
                        element={<Product />}
                    />
                    <Route
                        path="/signup"
                        element={
                            <AuthForm name="signup" displayName="Sign Up" />
                        }
                    />

                    <Route
                        path="/products"
                        element={
                            <AllProducts
                                name="allProducts"
                                displayName="allProducts"
                            />
                        }
                    />
                    <Route path="/register" element={<NewUserForm />} />
                </Routes>
            )}
        </div>
    );
};

export default AppRoutes;
