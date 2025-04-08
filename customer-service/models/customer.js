const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@localhost:3306/customerdb');

const Customer = sequelize.define('Customer', {
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    contactInfo: { type: DataTypes.STRING, allowNull: true }
});

sequelize.sync(); // Sync model with DB

module.exports = Customer;