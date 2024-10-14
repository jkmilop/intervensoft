const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const CTActividadesEstructura = sequelize.define('CTActividadesEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_actividad: DataTypes.INTEGER,
  id_tipo_estructura: DataTypes.INTEGER,
  descripcion: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = CTActividadesEstructura;
