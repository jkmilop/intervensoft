const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const UbicacionEstructura = sequelize.define('UbicacionEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = UbicacionEstructura;
