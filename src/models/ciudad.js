const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Ciudad = sequelize.define('Ciudad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Ciudad;
