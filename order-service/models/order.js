const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@localhost:3306/orderdb');

const Order = sequelize.define('Order', {
    customerId: { type: DataTypes.INTEGER, allowNull: false },
    products: { type: DataTypes.JSON, allowNull: false },
});

sequelize.sync(); // Sync model with DB

module.exports = Order;