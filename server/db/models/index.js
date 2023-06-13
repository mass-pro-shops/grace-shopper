const User = require('./User')
const Product = require('./Product')
const db = require('../db')

User.hasMany(Product)
Product.belongsTo(User,{ through: 'Cart'})

module.exports = {
    db,
    User,
    Product
}