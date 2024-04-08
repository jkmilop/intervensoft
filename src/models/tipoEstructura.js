const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const TipoEstructura = sequelize.define('TipoEstructura', {
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

module.exports = TipoEstructura;
