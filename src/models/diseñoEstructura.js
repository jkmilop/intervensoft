const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const DiseñoEstructura = sequelize.define('DiseñoEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_estructura: DataTypes.INTEGER,
  id_diseño: DataTypes.INTEGER,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = DiseñoEstructura;
