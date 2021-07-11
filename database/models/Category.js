const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Category extends Model {}


Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING
    
},{ sequelize, modelName: 'category' } );

module.exports = Category;