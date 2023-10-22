const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Proyecto = sequelize.define('Proyecto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  id_encargado: DataTypes.INTEGER,
  direccion: DataTypes.STRING,
});

module.exports = Proyecto;
