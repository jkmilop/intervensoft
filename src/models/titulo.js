'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Titulo = sequelize.define('Titulo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  letra: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Titulo;
