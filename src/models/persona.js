const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Persona = sequelize.define('Persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  cedula: DataTypes.INTEGER,
  id_empresa: DataTypes.INTEGER,
  telefono: DataTypes.INTEGER,
  id_rol: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Persona;
