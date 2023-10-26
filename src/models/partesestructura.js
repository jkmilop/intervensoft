const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const PartesEstructura = sequelize.define('PartesEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: DataTypes.TEXT,
  id_estructura: DataTypes.INTEGER,
  id_parte: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = PartesEstructura;

