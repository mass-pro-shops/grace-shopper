//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const OrderHistory = require('./models/OrderHistory')
//associations could go here!

User.hasOne(OrderHistory)
OrderHistory.belongsTo(User)

module.exports = {
    db,
    models: {
        User,
        Product,
    },
};
