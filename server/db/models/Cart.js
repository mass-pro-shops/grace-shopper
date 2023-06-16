const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    } 
})





module.exports = Cart