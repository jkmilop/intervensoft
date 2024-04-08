const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Estructura = sequelize.define('Estructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_conjunto: DataTypes.INTEGER,
  id_ubicacion_estructura: DataTypes.INTEGER,
  id_tipo_estructura: DataTypes.INTEGER,
  nombre: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Estructura;
