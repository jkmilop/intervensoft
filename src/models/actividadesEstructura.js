const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const ActividadesEstructura = sequelize.define('actividades_estructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  id_actividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_estructura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_resultado: {
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

module.exports = ActividadesEstructura;
