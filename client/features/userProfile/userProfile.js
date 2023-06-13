import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, fetchSingleUser } from './userProfileSlice';

const UserProfile = (props) => {
    const dispatch = useDispatch()

    const singleUser = useSelector((state) => {
        console.log(state.singleUser.singleUser)
        return state.singleUser.singleUser
    })
    
    const user = {
        name:"jim",
        email:"test@gmail.com",
        password:"123test",
        address:"123 test street",
        imageUrl:"https://static.wikia.nocookie.net/evangelion/images/9/92/Shinji_Ikari.png"
    }

    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: name,
            id:1
        }
        
        try {   
            dispatch(editUser(newUser))
            setName(newUser.name)
            
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        dispatch(fetchSingleUser(1))
        
    },[])

    return (
      <div>
        {
        }
        <h3>Welcome, {singleUser.name}</h3>
        <div className='leftSide'>
            <img src={user.imageUrl} />
        </div>
        <div className='rightSide'>
            <h2>User Update Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contElement">
                        <label htmlFor="name">Name: {singleUser.username}</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="contElement">
                        <label htmlFor="email">email: {singleUser.email}</label>
                        <input 
                        type="text" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
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
                    <div className="contElement">
                        <label htmlFor="imageUrl">ImageUrl: </label>
                        <input 
                        type="text" 
                        name="imageUrl" 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
      </div>
    );
  };
  
  export default UserProfile;