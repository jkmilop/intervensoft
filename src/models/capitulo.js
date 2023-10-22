const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Capitulo = sequelize.define('Capitulo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  capitulo: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  id_titulo: DataTypes.INTEGER,
});

module.exports = Capitulo;
