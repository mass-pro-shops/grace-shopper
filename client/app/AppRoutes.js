import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import { NewUserForm } from '../features/NewUserComponent';
import { ContactPage } from '../features/contactComponent';
import { AllProducts } from '../features';
import Product from '../features/product/Product';


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
                    <Route key="product" path="/products/:Id" element={<Product />} />
                    <Route
                        path="/products"
                        element={
                            <AllProducts
                                name="allProducts"
                                displayName="allProducts"
                            />}/>
                    <Route path='/register' element={<NewUserForm/>}/>
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
                    <Route key="product" path="/product/:Id" element={<Product />} />
                    <Route
                        path="/products"
                        element={
                            <AllProducts
                                name="allProducts"
                                displayName="allProducts"
                            />
                        }
                    />
                     <Route path='/register' element={<NewUserForm/>}/>
                </Routes>
            )}
        </div>
    );
};

export default AppRoutes;
