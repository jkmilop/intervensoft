const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('Interventor' , 'Administrador'),
    allowNull: false,
  },
},
{
  sequelize,
  modelName: 'Usuario',
  timestamps: false,
  freezeTableName: true,
}
);

module.exports = Usuario;
