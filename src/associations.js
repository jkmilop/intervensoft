const Titulo = require('./models/titulo.js');
const Responsabilidad = require('./models/responsabilidad.js');
const Empresa = require('./models/empresa.js');
const Rol = require('./models/rol.js');
const Persona = require('./models/persona.js');
const Conjunto = require('./models/conjunto.js');
const Proyecto = require('./models/proyecto.js');
const Estructura = require('./models/estructura.js');
const Etapa = require('./models/etapa.js');
const Diseño = require('./models/diseño.js');
const Actividad = require('./models/actividad.js');
const Capitulo = require('./models/capitulo.js');
const PartesEstructura = require('./models/partesestructura.js');
const DiseñosEstructura = require('./models/diseñosestructura.js');
const RolesPersona = require('./models/rolespersona.js');
const CapitulosActividad = require('./models/capitulosactividad.js');
const Involucrados = require('./models/involucrados.js');
const Seguimiento = require('./models/seguimiento.js');

// Asociaciones
Persona.belongsTo(Empresa, { foreignKey: 'id_empresa', targetKey: 'id' });
Persona.belongsTo(Responsabilidad, { foreignKey: 'id_responsabilidad', targetKey: 'id' });
Conjunto.belongsTo(Persona, { foreignKey: 'id_residente_encargado', targetKey: 'id' });
Conjunto.belongsTo(Proyecto, { foreignKey: 'id_proyecto', targetKey: 'id' });
Estructura.belongsTo(Conjunto, { foreignKey: 'id_conjunto', targetKey: 'id' });
Actividad.belongsTo(Etapa, { foreignKey: 'id_etapa', targetKey: 'id' });
DiseñosEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
DiseñosEstructura.belongsTo(Diseño, { foreignKey: 'id_diseño', targetKey: 'id' });
RolesPersona.belongsTo(Persona, { foreignKey: 'id_persona', targetKey: 'id' });
RolesPersona.belongsTo(Rol, { foreignKey: 'id_rol', targetKey: 'id' });
CapitulosActividad.belongsTo(Capitulo, { foreignKey: 'id_capitulo', targetKey: 'id' });
CapitulosActividad.belongsTo(Actividad, { foreignKey: 'id_actividad', targetKey: 'id' });
Involucrados.belongsTo(Persona, { foreignKey: 'id_involucrado', targetKey: 'id' });
Seguimiento.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
Seguimiento.belongsTo(Actividad, { foreignKey: 'id_actividad', targetKey: 'id' });
Seguimiento.belongsTo(Involucrados, { foreignKey: 'id_involucrados', targetKey: 'id' });

module.exports = {
  Titulo,
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
};
