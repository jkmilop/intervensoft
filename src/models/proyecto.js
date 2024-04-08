const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Proyecto = sequelize.define('Proyecto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  direccion: DataTypes.STRING,
  id_ciudad: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Proyecto;
