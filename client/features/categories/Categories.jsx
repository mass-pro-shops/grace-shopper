import React from 'react';
import { Link } from 'react-router-dom';
import {actions} from '../allProducts/allProducts'
import { useSelector, useDispatch } from 'react-redux';

const Categories = (props) => {
    const dispatch = useDispatch();
    const categories = ['LAPTOP', 'PROJECTOR', 'DESKTOP', 'AUDIO DEVICES'];


    return (
        <div className="categories-section">
            <ul className="category-list">
                {categories.map((category, id) => (
                    //<Link to={`./products/${category}`} key={id}>
                        <li key={category.id} className="category-item">
                            <button onClick= {() => props.handleClick({category})}> {category} </button>
                        </li>
                    //</Link>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
