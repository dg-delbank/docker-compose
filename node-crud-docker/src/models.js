const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Item;
