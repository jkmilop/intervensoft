const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const ZonaEstructura = sequelize.define('ZonaEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_estructura: DataTypes.INTEGER,
  id_zona: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = ZonaEstructura;
