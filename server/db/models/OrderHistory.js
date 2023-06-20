const Sequelize = require('sequelize');
const db = require('../db');

const OrderHistory = db.define('order-history', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    description: {
        type: Sequelize.TEXT
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'public/images/productImage.jpeg',
    },
    orderQuantity: {
        type: Sequelize.INTEGER
    }
})

module.exports = OrderHistory