const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const TipoActividad = sequelize.define('TipoActividad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: 'TipoActividad' // Optional: You can specify the model name explicitly
});

module.exports = TipoActividad;
