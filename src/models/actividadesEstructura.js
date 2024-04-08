const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const ActividadesEstructura = sequelize.define('ActividadesEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_actividad: DataTypes.INTEGER,
  id_estructura: DataTypes.INTEGER,
  descripcion: DataTypes.TEXT,
  fecha_inicio: DataTypes.DATE,
  fecha_fin: DataTypes.DATE,
  estado: DataTypes.INTEGER,
  certificado: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = ActividadesEstructura;
