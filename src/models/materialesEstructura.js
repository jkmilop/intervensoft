const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const MaterialesEstructura = sequelize.define('MaterialesEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_material_construccion: DataTypes.INTEGER,
  id_estructura: DataTypes.INTEGER,
  descripcion: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = MaterialesEstructura;
