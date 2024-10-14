const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Resultado = sequelize.define('Resultado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Resultado;
