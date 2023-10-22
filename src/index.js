'use strict';
const app = require('./app.js');
const {   Titulo,
  Responsabilidad,
  Empresa,
  Rol,
  Persona,
  Conjunto,
  Proyecto,
  Estructura,
  Etapa,
  Diseño,
  Actividad,
  Capitulo,
  PartesEstructura,
  DiseñosEstructura,
  RolesPersona,
  CapitulosActividad,
  Involucrados,
  Seguimiento,
 }= require('./associations.js');
const sequelize = require('./database/database.js');

async function main() {
  try {
    await sequelize.sync({force: true });
    app.listen(4000);
    console.log('Server is running on port 4000');
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}
main();

