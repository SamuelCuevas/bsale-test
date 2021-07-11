const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./Category');

class Product extends Model {}

Product.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER

}, { sequelize, modelName: 'product' });


Product.Category = Product.belongsTo(Category);


module.exports = Product;