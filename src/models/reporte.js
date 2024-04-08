const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Reporte = sequelize.define('Reporte', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_interventor: DataTypes.INTEGER,
  id_residente: DataTypes.INTEGER,
  id_contratista: DataTypes.INTEGER,
  descripcion_reporte: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Reporte;
