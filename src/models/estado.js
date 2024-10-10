const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Estado = sequelize.define('estado', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  PRIMARY: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false,
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Estado;
