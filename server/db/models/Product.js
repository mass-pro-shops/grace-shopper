const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'public/images/productImage.jpeg',
    },
    rating: {
        type: Sequelize.FLOAT,
        allowNull: true,
        validate: {
            min: 0,
            max: 5,
        },
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        },
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [['laptop', 'desktop', 'projector', 'audio']]
        }
    }
});

module.exports = Product;
