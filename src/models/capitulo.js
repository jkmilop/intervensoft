const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Capitulo = sequelize.define('Capitulo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_titulo: DataTypes.INTEGER,
  indice: DataTypes.STRING,
  capitulo: DataTypes.STRING,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Capitulo;
