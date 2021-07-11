const { Sequelize } = require('sequelize');
const { database } = require('./config');

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: 'mysql',
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      freezeTableName: true
    }
});

module.exports = sequelize;