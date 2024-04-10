const Titulo = require('./models/titulo.js');
const Capitulo = require('./models/capitulo.js');
const Ciudad = require('./models/ciudad.js');
const Proyecto = require('./models/proyecto.js');
const TipoEstructura = require('./models/tipoEstructura.js');
const UbicacionEstructura = require('./models/ubicacionEstructura.js');
const TipoVivienda = require('./models/tipoVivienda.js');
const MaterialConstruccion = require('./models/materialConstruccion.js');
const Empresa = require('./models/empresa.js');
const Rol = require('./models/rol.js');
const Persona = require('./models/persona.js');
const TipoDiseño = require('./models/tipoDiseño.js');
const Diseño = require('./models/diseño.js');
const Conjunto = require('./models/conjunto.js');
const Estructura = require('./models/estructura.js');
const Zona = require('./models/zona.js');
const ZonaEstructura = require('./models/zonaEstructura.js');
const MaterialesEstructura = require('./models/materialesEstructura.js');
const Etapa = require('./models/etapa.js');
const Actividad = require('./models/actividad.js');
const ActividadesEstructura = require('./models/actividadesEstructura.js');
const DiseñoEstructura = require('./models/diseñoEstructura.js');
const Reporte = require('./models/reporte.js');
const EstructurasReporte = require('./models/estructurasReporte.js');
const TipoActividad = require('./models/tipoActividad.js'); // Added TipoActividad model

// Asociaciones
Persona.belongsTo(Empresa, { foreignKey: 'id_empresa', targetKey: 'id' });
Persona.belongsTo(Rol, { foreignKey: 'id_rol', targetKey: 'id' });
Conjunto.belongsTo(Persona, { foreignKey: 'id_residente_encargado', targetKey: 'id' });
Conjunto.belongsTo(Proyecto, { foreignKey: 'id_proyecto', targetKey: 'id' });
Estructura.belongsTo(Conjunto, { foreignKey: 'id_conjunto', targetKey: 'id' });
Diseño.belongsTo(TipoDiseño, { foreignKey: 'tipo_diseño', targetKey: 'id' });
ZonaEstructura.belongsTo(Zona, { foreignKey: 'id_zona', targetKey: 'id' });
ZonaEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
MaterialesEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
MaterialesEstructura.belongsTo(MaterialConstruccion, { foreignKey: 'id_material_construccion', targetKey: 'id' });
ActividadesEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
ActividadesEstructura.belongsTo(Actividad, { foreignKey: 'id_actividad', targetKey: 'id' });
DiseñoEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
DiseñoEstructura.belongsTo(Diseño, { foreignKey: 'id_diseño', targetKey: 'id' });
EstructurasReporte.belongsTo(Estructura, { foreignKey: 'id_estructura', targetKey: 'id' });
EstructurasReporte.belongsTo(Reporte, { foreignKey: 'id_reporte', targetKey: 'id' });

module.exports = {
  Titulo,
  Capitulo,
  Ciudad,
  Proyecto,
  TipoEstructura,
  UbicacionEstructura,
  TipoVivienda,
  MaterialConstruccion,
  Empresa,
  Rol,
  Persona,
  TipoDiseño,
  Diseño,
  Conjunto,
  Estructura,
  Zona,
  ZonaEstructura,
  MaterialesEstructura,
  Etapa,
  Actividad,
  ActividadesEstructura,
  DiseñoEstructura,
  Reporte,
  EstructurasReporte,
  TipoActividad,  
};
