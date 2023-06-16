import React from 'react';
import { useDispatch } from 'react-redux';

const Categories = (props) => {
    const dispatch = useDispatch();
    const categories = ['LAPTOPS', 'PROJECTORS', 'DESKTOPS', 'AUDIO'];

    return (
        <div className="categories-section">
            <ul className="category-list">
                <button
                    className="category-item"
                    onClick={() => {
                        props.setFiltered(false);
                    }}>
                    ALL
                </button>
                {categories.map((category, id) => (
                    <li key={category.id}>
                        <button
                            className="category-item"
                            onClick={() => props.handleClick({ category })}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
