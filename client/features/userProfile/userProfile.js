import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, fetchSingleUser,deleteUser } from './userProfileSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth/authSlice';

const UserProfile = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    

    const currentUser = useSelector((state) => state.auth.me)
    const singleUser = useSelector((state) => {
        
        return state.singleUser.singleUser
    })
    

    const [name,setName] = useState("")
    const [userName,setUserName] = useState("")
    // const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: userName,
            name:name,
            // email:email,
            password:password,
            address:address,
            id:currentUser.id
        }
        
        try {   
            dispatch(editUser(newUser))
            
            setName(newUser.name)
            setUserName(newUser.username)
            // setEmail(newUser.email)
            setPassword(newUser.password)
            setAddress(newUser.address)
        } catch (err) {
            console.log(err)
        }
    }

    function handleClick(id) {
        dispatch(deleteUser(id))
        dispatch(logout());
        navigate('/login');
    }
    
    useEffect(() => {
        dispatch(fetchSingleUser(currentUser.id))
        
    },[dispatch])

    return (
      <div>
        <h3>Welcome, {singleUser.name}</h3>
        <div >
            <h2>User Update Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contElement">
                        <label htmlFor="username">User Name: {singleUser.username}</label>
                        <input 
                        type="text" 
                        name="username" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="contElement">
                        <label htmlFor="name">Name: {singleUser.name}</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* <div className="contElement">
                        <label htmlFor="email">email: {singleUser.email}</label>
                        <input 
                        type="text" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}
                    <div className="contElement">
                        <label htmlFor="password">password: </label>
                        <input 
                        type="text" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="contElement">
                        <label htmlFor="address">address: {singleUser.address}</label>
                        <input 
                        type="text" 
                        name="address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
                <button onClick={() =>handleClick(currentUser.id)}>Delete</button>
            </div>
      </div>
    );
  };
  
  export default UserProfile;