const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const ActividadesEstructura = sequelize.define('ActividadesEstructura', {
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
  id_estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_reporte: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_inicio: DataTypes.DATE,
  fecha_fin: DataTypes.DATE,

},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = ActividadesEstructura;
