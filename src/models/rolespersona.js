const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const RolesPersona = sequelize.define('RolesPersona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comentarios: DataTypes.TEXT,
  id_persona: DataTypes.INTEGER,
  id_rol: DataTypes.INTEGER,
});

module.exports = RolesPersona;
