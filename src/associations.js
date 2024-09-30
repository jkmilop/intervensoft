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
//Actividad
Actividad.belongsTo(Etapa, { foreignKey: 'id_etapa', as: 'etapa' });
Actividad.belongsTo(TipoActividad, { foreignKey: 'id_tipo_actividad', as: 'tipo_actividad' });
Etapa.hasMany(Actividad, { foreignKey: 'id_etapa' });
TipoActividad.hasMany(Actividad, { foreignKey: 'id_tipo_actividad' });
//Persona
Persona.belongsTo(Empresa, { foreignKey: 'id_empresa', as: 'empresa' });
Persona.belongsTo(Rol, { foreignKey: 'id_rol', as: 'rol' });
Empresa.hasMany(Persona, { foreignKey: 'id_empresa' });
Rol.hasMany(Persona, { foreignKey: 'id_rol' });
//Conjunto
Conjunto.belongsTo(Persona, { foreignKey: 'id_residente_encargado', as: 'residente_encargado' });
Conjunto.belongsTo(Proyecto, { foreignKey: 'id_proyecto', as: 'proyecto' });
Conjunto.belongsTo(TipoVivienda, { foreignKey: 'id_vivienda', as: 'tipo_vivienda' });

Persona.hasOne(Conjunto, { foreignKey: 'id_residente_encargado' });
Proyecto.hasMany(Conjunto, { foreignKey: 'id_proyecto' });

Proyecto.belongsTo(Ciudad, { foreignKey: 'id_ciudad', as: 'ciudad' });
Ciudad.hasOne(Proyecto, { foreignKey: 'id_ciudad' });

Estructura.belongsTo(Conjunto, { foreignKey: 'id_conjunto', as: 'conjunto' });
Estructura.belongsTo(UbicacionEstructura, { foreignKey: 'id_ubicacion_estructura', as: 'ubicacion_estructura' });
Estructura.belongsTo(TipoEstructura, { foreignKey: 'id_tipo_estructura', as: 'tipo_estructura' });

Conjunto.hasMany(Estructura, { foreignKey: 'id_conjunto' });
//Diseño

Diseño.belongsTo(TipoDiseño, { foreignKey: 'id_tipo_diseño', as: 'tipo_diseño' });
TipoDiseño.hasMany(Diseño, { foreignKey: 'id_tipo_diseño' });

ZonaEstructura.belongsTo(Zona, { foreignKey: 'id_zona', as: 'zona' });
ZonaEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', as: 'estructura' });
Zona.hasMany(ZonaEstructura, { foreignKey: 'id_zona' });
Estructura.hasMany(ZonaEstructura, { foreignKey: 'id_estructura' });


MaterialesEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', as: 'estructura' });
MaterialesEstructura.belongsTo(MaterialConstruccion, { foreignKey: 'id_material_construccion', as: 'material_construccion' });
Estructura.hasMany(MaterialesEstructura, { foreignKey: 'id_estructura' });
MaterialConstruccion.hasMany(MaterialesEstructura, { foreignKey: 'id_material_construccion' });

ActividadesEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', as: 'estructura' });
ActividadesEstructura.belongsTo(Actividad, { foreignKey: 'id_actividad', as: 'actividad' });
Estructura.hasMany(ActividadesEstructura, { foreignKey: 'id_estructura' });
Actividad.hasMany(ActividadesEstructura, { foreignKey: 'id_actividad' });

DiseñoEstructura.belongsTo(Estructura, { foreignKey: 'id_estructura', as: 'estructura' });
DiseñoEstructura.belongsTo(Diseño, { foreignKey: 'id_diseño', as: 'diseño' });
Estructura.hasMany(DiseñoEstructura, { foreignKey: 'id_estructura' });
Diseño.hasMany(DiseñoEstructura, { foreignKey: 'id_diseño' });

EstructurasReporte.belongsTo(Estructura, { foreignKey: 'id_estructura', as: 'estructura' });
EstructurasReporte.belongsTo(Reporte, { foreignKey: 'id_reporte', as: 'reporte' });
Estructura.hasMany(EstructurasReporte, { foreignKey: 'id_estructura' });
Reporte.hasMany(EstructurasReporte, { foreignKey: 'id_reporte' });

//Reporte
Reporte.belongsTo(Persona, { foreignKey: 'id_interventor', as: 'interventor' });
Reporte.belongsTo(Persona, { foreignKey: 'id_residente', as: 'residente' });
Reporte.belongsTo(Persona, { foreignKey: 'id_contratista', as: 'contratista' });
Persona.hasOne(Reporte, { foreignKey: 'id_interventor' });
Persona.hasOne(Reporte, { foreignKey: 'id_residente' });
Persona.hasOne(Reporte, { foreignKey: 'id_contratista' });


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
