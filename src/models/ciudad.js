const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Ciudad = sequelize.define('Ciudad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Ciudad;
