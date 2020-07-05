const Sequelize = require('sequelize')
const {db} = require('../db')

const Product = db.define('Product',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: Sequelize.STRING,
})

module.exports = Product;