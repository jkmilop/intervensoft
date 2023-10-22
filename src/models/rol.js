const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Rol = sequelize.define('Rol', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
});

module.exports = Rol;
