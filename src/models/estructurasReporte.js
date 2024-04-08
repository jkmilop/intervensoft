const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const EstructurasReporte = sequelize.define('EstructurasReporte', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_estructura: DataTypes.INTEGER,
  id_reporte: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = EstructurasReporte;
