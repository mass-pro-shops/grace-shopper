import React from 'react';
import { useSelector } from 'react-redux';
import { Categories } from '../';

/**
 * COMPONENT
 */
const Home = (props) => {
    const username = useSelector((state) => state.auth.me.username);

    return (
        <div>
            <div>
                <h3>Welcome, {username}</h3>
            </div>
            <Categories />
        </div>
    );
};

export default Home;
