const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  "intervensoft",
  "",
  "",
  {
    host: "localhost",
    dialect: "postgres",
    logging: console.log,
  }
);

module.exports = sequelize;
