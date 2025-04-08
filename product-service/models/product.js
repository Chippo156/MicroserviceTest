const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@localhost:3306/productdb', {
    dialect: 'mysql',
    dialectModule: require('mysql2'), // This explicitly tells Sequelize to use the mysql2 package
});

const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    stock: { type: DataTypes.INTEGER, allowNull: false }
});

sequelize.sync(); // Sync model with DB

module.exports = Product;