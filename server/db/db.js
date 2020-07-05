const Sequelize = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost/acme_products_redux_db';
const db = new Sequelize(DATABASE_URL);

module.exports = {
    db,
}