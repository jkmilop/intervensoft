const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const TipoEvaluacion = sequelize.define('tipo_evaluacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  },
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = TipoEvaluacion;
