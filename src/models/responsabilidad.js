const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Responsabilidad = sequelize.define('Responsabilidad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  responsabilidad: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Responsabilidad;
