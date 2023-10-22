const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const DiseñosEstructura = sequelize.define('DiseñosEstructura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_estructura: DataTypes.INTEGER,
  id_diseño: DataTypes.INTEGER,
});

module.exports = DiseñosEstructura;
