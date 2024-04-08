const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Titulo = sequelize.define('Titulo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  indice: DataTypes.STRING,
  titulo: DataTypes.STRING,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Titulo;
