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
    allowNull: true,
  },
  id_diseño: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  id_tipo_estructura: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_estado: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  id_ubicacion_estructura: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Estructura;
