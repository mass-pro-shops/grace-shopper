import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchProducts } from "./adminViewSlice";
import UserUpdate from "../updateForms/UserUpdate";
import ProductUpdate from "../updateForms/ProductUpdate";

const AdminView = (props) => {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState("users")
    const [selectedForm, setSelectedForm] = useState(null);
    const [expanded, setExpanded] = useState(false)

    const users = useSelector((state) => {
        return state.adminView.users;
    });

    const products = useSelector((state) => {
        return state.adminView.products;
    });

    const handleExpand = (id) => {
        setSelectedForm(id)
        setExpanded(!expanded)
    }
    // const editClick = (id) => {
    //     console.log(id)
    //     setSelectedForm(id)
    // }
    const displayContent = () => {
        
        //console.log(users)
        if (display === "users" && users) {
             return users.map(el => {
                return (
                    <div className="flexColumn">
                        <div className="adminSingleUser">
                            <div>{el.name}</div>
                            <div>{el.username}</div>
                            <div>{el.address}</div>
                            <div>{el.email}</div>
                            <button className='editButton' onClick={() => handleExpand(el.id)}>Edit</button>
                        </div>
                        {expanded ? selectedForm === el.id && <UserUpdate user={el}/>: <></> }
                    </div>
                )
            })
        }

        if (display === "products" && products) {
            return products.map(el => {
               return (
                    <div className="flexColumn">
                        <div className="adminSingleUser">
                            <div>{el.name}</div>
                            <div>{el.price}</div>
                            <div>{el.description}</div>
                            <div>{el.quantity}</div>
                            <button className='editButton' onClick={() => handleExpand(el.id)}>Edit</button>
                        </div>
                        {expanded ? selectedForm === el.id && <ProductUpdate product={el}/>: <></> }
                    </div>
               )
           })
       }
    }

    const handleClick = (whatToShow) => {
        dispatch(fetchUsers());
        setDisplay(whatToShow)
        
    }
    
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="categoriesAndContentContainer">
            <div className="categories">
                admin left side
                <button onClick={()=>handleClick("products")}>Products</button>
                <button onClick={()=>handleClick("users")}>Users</button>
            </div>
            <div className="mainContent">
                <h3>{display}</h3>
                {display === "users" ? 
                    <div className="adminSingleUser">
                        <div>Name</div>
                        <div>Username</div>
                        <div>Address</div>
                        <div>Email</div>
                    </div>:
                    <div className="adminSingleUser">
                        <div>Name</div>
                        <div>price</div>
                        <div>description</div>
                        <div>Quantity</div>
                    </div>
                    }
                {displayContent()}
            </div>
        </div>
    )
}

export default AdminView;