const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Actividad = sequelize.define('Actividad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_etapa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_tipo_actividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_seccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Actividad;
