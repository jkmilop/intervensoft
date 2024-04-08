const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const MaterialConstruccion = sequelize.define('MaterialConstruccion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  referencia: DataTypes.STRING,
  dimensiones: DataTypes.STRING,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = MaterialConstruccion;
