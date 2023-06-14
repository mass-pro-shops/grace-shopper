import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = ['LAPTOPS', 'PROJECTORS', 'DESKTOPS', 'AUDIO DEVICES'];

    return (
        <div className="categories-section">
            <ul className="category-list">
                {categories.map((category, id) => (
                    <Link to={`./products/${category}`} key={id}>
                        <li key={category.id} className="category-item">
                            {category}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
