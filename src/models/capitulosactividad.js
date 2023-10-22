const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const CapitulosActividad = sequelize.define('CapitulosActividad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: DataTypes.TEXT,
  id_capitulo: DataTypes.INTEGER,
  id_actividad: DataTypes.INTEGER,
});

module.exports = CapitulosActividad;
