const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Estructura = sequelize.define('Estructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_conjunto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_diseño: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  id_tipo_estructura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  id_ubicacion_estructura: {
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

module.exports = Estructura;
