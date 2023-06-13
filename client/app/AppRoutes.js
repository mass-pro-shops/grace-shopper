import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import { AllProducts } from '../features';
import Product from '../features/product/Product';
import UserProfile from '../features/userProfile/userProfile'

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
            {isLoggedIn ? (
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route to="/home" element={<Home />} />
                    <Route key="product" path="/product/:Id" element={<Product />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path="/*"
                        element={<AuthForm name="login" displayName="Login" />}
                    />
                    <Route
                        path="/login"
                        element={<AuthForm name="login" displayName="Login" />}
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
                </Routes>
            )}
        </div>
    );
};

export default AppRoutes;
