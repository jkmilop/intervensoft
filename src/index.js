'use strict';
const app = require('./app.js');
const associations = require('./associations.js');
const sequelize = require('./database/database.js');

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(4000);
    console.log('Server is running on port 4000');
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}
main();

