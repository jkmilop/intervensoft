const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Persona = sequelize.define('Persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  cedula: DataTypes.BIGINT,
  telefono: DataTypes.BIGINT,
  id_empresa: DataTypes.INTEGER,
  id_responsabilidad: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Persona;
