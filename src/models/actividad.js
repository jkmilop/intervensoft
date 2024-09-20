const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Actividad = sequelize.define('Actividad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  id_etapa: DataTypes.INTEGER,
  id_tipo_actividad: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Actividad;
