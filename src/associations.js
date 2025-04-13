const Actividad = require('./models/actividad.js');
const CTActividadesEstructura = require('./models/ctactividadesEstructura.js');
const ActividadesEstructura = require('./models/actividadesEstructura.js');
const Ciudad = require('./models/ciudad.js');
const Conjunto = require('./models/conjunto.js');
const Diseño = require('./models/diseño.js');
const Empresa = require('./models/empresa.js');
const Estado = require('./models/estado.js');
const Etapa = require('./models/etapa.js');
const Estructura = require('./models/estructura.js');
const Persona = require('./models/persona.js');
const Proyecto = require('./models/proyecto.js');
const Reporte = require('./models/reporte.js');
const Resultado = require('./models/resultado.js');
const Rol = require('./models/rol.js');
const Seccion = require('./models/seccion.js');
const TipoActividad = require('./models/tipoActividad.js');
const TipoEstructura = require('./models/tipoEstructura.js');
const TipoVivienda = require('./models/tipoVivienda.js');
const UbicacionEstructura = require('./models/ubicacionEstructura.js');

// Actividad associations
Actividad.belongsTo(Etapa, { foreignKey: 'id_etapa', as: 'etapa' });
Actividad.belongsTo(TipoActividad, { foreignKey: 'id_tipo_actividad', as: 'tipo_actividad' });
Actividad.belongsTo(Seccion, { foreignKey: 'id_seccion', as: 'seccion' });
Etapa.hasMany(Actividad, { foreignKey: 'id_etapa' });
TipoActividad.hasMany(Actividad, { foreignKey: 'id_tipo_actividad' });
Seccion.hasMany(Actividad, { foreignKey: 'id_seccion' });

// ActividadesEstructura associations
ActividadesEstructura.belongsTo(Actividad, { foreignKey: 'id_actividad', as: 'actividad' });
ActividadesEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', as: 'estructura' });
ActividadesEstructura.belongsTo(Estado, { foreignKey: 'id_estado', as: 'estado' });
ActividadesEstructura.belongsTo(Reporte, { foreignKey: 'id_reporte', as: 'reporte' });
Actividad.hasMany(ActividadesEstructura, { foreignKey: 'id_actividad' });
Estructura.hasMany(ActividadesEstructura, { foreignKey: 'id_estructura' });
Estado.hasMany(ActividadesEstructura, { foreignKey: 'id_estado' });
Reporte.hasMany(ActividadesEstructura, { foreignKey: 'id_reporte' });

// CTActividadesEstructura associations
CTActividadesEstructura.belongsTo(Actividad, { foreignKey: 'id_actividad', as: 'actividad' });
CTActividadesEstructura.belongsTo(TipoEstructura, { foreignKey: 'id_tipo_estructura', as: 'tipo_estructura' });
Actividad.hasMany(CTActividadesEstructura, { foreignKey: 'id_actividad' });
TipoEstructura.hasMany(CTActividadesEstructura, { foreignKey: 'id_tipo_estructura' });

// Persona associations
Persona.belongsTo(Empresa, { foreignKey: 'id_empresa', as: 'empresa' });
Persona.belongsTo(Rol, { foreignKey: 'id_rol', as: 'rol' });
Empresa.hasMany(Persona, { foreignKey: 'id_empresa' });
Rol.hasMany(Persona, { foreignKey: 'id_rol' });

// Conjunto associations
Conjunto.belongsTo(Persona, { foreignKey: 'id_residente_encargado', as: 'residente_encargado' });
Conjunto.belongsTo(Proyecto, { foreignKey: 'id_proyecto', as: 'proyecto' });
Conjunto.belongsTo(TipoVivienda, { foreignKey: 'id_tipo_vivienda', as: 'tipo_vivienda' });
Conjunto.belongsTo(Estado, { foreignKey: 'id_estado', as: 'estado' });
Estado.hasMany(Conjunto, { foreignKey: 'id_estado' });
Persona.hasMany(Conjunto, { foreignKey: 'id_residente_encargado' });
Proyecto.hasMany(Conjunto, { foreignKey: 'id_proyecto' });
TipoVivienda.hasMany(Conjunto, { foreignKey: 'id_tipo_vivienda' });

// Proyecto associations
Proyecto.belongsTo(Ciudad, { foreignKey: 'id_ciudad', as: 'ciudad' });
Ciudad.hasMany(Proyecto, { foreignKey: 'id_ciudad' });
Proyecto.belongsTo(Estado, { foreignKey: 'id_estado', as: 'estado' });
Estado.hasMany(Proyecto, { foreignKey: 'id_estado' });

// Estructura associations
Estructura.belongsTo(Conjunto, { foreignKey: 'id_conjunto', as: 'conjunto' });
Estructura.belongsTo(TipoEstructura, { foreignKey: 'id_tipo_estructura', as: 'tipo_estructura' });
Estructura.belongsTo(UbicacionEstructura, { foreignKey: 'id_ubicacion_estructura', as: 'ubicacion_estructura' });
Estructura.belongsTo(Diseño, { foreignKey: 'id_diseño', as: 'diseño' });
Estructura.belongsTo(Estado, { foreignKey: 'id_estado', as: 'estado' });

Conjunto.hasMany(Estructura, { foreignKey: 'id_conjunto' });
TipoEstructura.hasMany(Estructura, { foreignKey: 'id_tipo_estructura' });
UbicacionEstructura.hasMany(Estructura, { foreignKey: 'id_ubicacion_estructura' });
Diseño.hasMany(Estructura, { foreignKey: 'id_diseño' });
Estado.hasMany(Estructura, { foreignKey: 'id_estado' });

// Reporte associations
Reporte.belongsTo(Persona, { foreignKey: 'id_interventor', as: 'interventor' });
Reporte.belongsTo(Persona, { foreignKey: 'id_residente', as: 'residente' });
Reporte.belongsTo(Persona, { foreignKey: 'id_contratista', as: 'contratista' });
Reporte.belongsTo(Resultado, { foreignKey: 'id_resultado', as: 'resultado' });
Persona.hasMany(Reporte, { foreignKey: 'id_interventor', as: 'interventor' });
Persona.hasMany(Reporte, { foreignKey: 'id_residente', as: 'residente' });
Persona.hasMany(Reporte, { foreignKey: 'id_contratista', as: 'contratista' });
Resultado.hasMany(Reporte, { foreignKey: 'id_resultado' });


module.exports = {
  Actividad,
  ActividadesEstructura,
  Ciudad,
  Conjunto,
  CTActividadesEstructura,
  Diseño,
  Empresa,
  Estado,
  Etapa,
  Estructura,
  Persona,
  Proyecto,
  Reporte,
  Resultado,
  Rol,
  Seccion,
  TipoActividad,
  TipoEstructura,
  TipoVivienda,
  UbicacionEstructura
};
