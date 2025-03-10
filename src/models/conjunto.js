const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Conjunto = sequelize.define('Conjunto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  id_residente_encargado: DataTypes.INTEGER,
  id_proyecto: DataTypes.INTEGER,
  id_tipo_vivienda: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Conjunto;
