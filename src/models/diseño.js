const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Diseño = sequelize.define('Diseño', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_diseño: DataTypes.STRING,
  descripcion_diseño: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Diseño;
