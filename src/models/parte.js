const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Parte = sequelize.define('Parte', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  dimensiones: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Parte;
