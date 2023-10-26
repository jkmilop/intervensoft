const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Etapa = sequelize.define('Etapa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Etapa;

