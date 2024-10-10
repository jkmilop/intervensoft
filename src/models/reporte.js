const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Reporte = sequelize.define('Reporte', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  id_interventor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_residente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_contratista: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_actividades_estructura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Reporte;
