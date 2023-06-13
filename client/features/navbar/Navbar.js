import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };



  return (
    <div className='navbar'>
      <Link to='/home'>
        <img 
        className='navbar__logo'
        src='/images/Mletter.webp' 
        alt=''></img>
      </Link>
      <nav>
        {isLoggedIn ? (
          <div className='navbar__right'>
            {/* The navbar will show these links after you log in */}
            <p>Hi {/*user.name*/}</p>
            
            <div className='navbar__cart'>
              {/*cart component*/}
              <p>test cart</p>
            </div>
            {/* Dropdown menu */}
            <div className='navbar__dropdown'>
              <button className='navbar__dropdownButton'>Dropdown</button>
              <div className='navbar__dropdownContent'>
                <Link to='/cart'>Shopping Cart</Link>
                <Link to="/userProfile">User</Link>
                <button type="button" onClick={logoutAndRedirectHome}>
                     Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className=''>
            {/* The navbar will show these links before you log in */}
            <div className='navbar__dropdown'>
              <button className='navbar__dropdownButton'>Dropdown</button>
              <div className='navbar__dropdownContent'>
                <Link to='/cart'>Shopping Cart</Link>
                {/* <Link to={`/userprofile/${user.id}`}>Profile</Link> */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
