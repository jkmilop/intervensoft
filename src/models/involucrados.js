const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Involucrados = sequelize.define('Involucrados', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comentarios: DataTypes.TEXT,
  id_involucrado: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Involucrados;

