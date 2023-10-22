const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Empresa = sequelize.define('Empresa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
});

module.exports = Empresa;