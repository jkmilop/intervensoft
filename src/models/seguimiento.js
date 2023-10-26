const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Seguimiento = sequelize.define('Seguimiento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: DataTypes.TEXT,
  id_estructura: DataTypes.INTEGER,
  id_actividad: DataTypes.INTEGER,
  fecha_inicio: DataTypes.DATE,
  fecha_fin: DataTypes.DATE,
  id_involucrados: DataTypes.INTEGER,
  estado: DataTypes.STRING, // Cambiado a STRING
  certificado: DataTypes.STRING, // Cambiado a STRING
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Seguimiento;
