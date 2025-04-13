// Importaciones de modelos
const Estructura = require('../models/estructura.js');
const Conjunto = require('../models/conjunto.js');
const TipoEstructura = require('../models/tipoEstructura.js');
const UbicacionEstructura = require('../models/ubicacionEstructura.js');
const ActividadesEstructura = require('../models/actividadesEstructura.js');
const CTActividadesEstructura = require('../models/ctactividadesEstructura.js');
const Estado = require('../models/estado.js');
const Diseño = require('../models/diseño.js');
const Reporte = require('../models/reporte.js');
const Actividad = require('../models/actividad.js');
const Persona = require('../models/persona.js');
const Resultado = require('../models/resultado.js');

// Importaciones de controladores y utilidades
const handleError = require('../utils/errorHandler.js');
const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

// Constantes para los estados de las actividades
const ESTADO_POR_INICIAR = 1;
const ESTADO_INICIADA = 2;
const ESTADO_COMPLETADO = 3;

/**
 * FUNCIONES CRUD BASICAS
 */
const addEstructura = addRecord(Estructura);
const getEstructura = getRecordWithAssociations(Estructura, [
  { model: Conjunto, attributes: ['nombre'], as: 'conjunto' },
  { model: TipoEstructura, attributes: ['nombre'], as: 'tipo_estructura' },
  { model: UbicacionEstructura, attributes: ['nombre'], as: 'ubicacion_estructura' },
  { model: Estado, attributes: ['nombre'], as: 'estado' },
  { model: Diseño, attributes: ['nombre'], as: 'diseño' },
]);
const getEstructuras = getRecordsWithAssociations(Estructura, [
  { model: Conjunto, attributes: ['nombre'], as: 'conjunto' },
  { model: TipoEstructura, attributes: ['nombre'], as: 'tipo_estructura' },
  { model: UbicacionEstructura, attributes: ['nombre'], as: 'ubicacion_estructura' },
  { model: Estado, attributes: ['nombre'], as: 'estado' },
  { model: Diseño, attributes: ['nombre'], as: 'diseño' },
]);
const updateEstructura = updateRecord(Estructura);
const deleteEstructura = deleteRecord(Estructura);

/**
 * Obtiene la actividad asociada a un reporte.
 * @param {number} idReporte - ID del reporte.
 * @returns {Promise<object>} La actividad encontrada.
 * @throws {Error} Si no se encuentra la actividad.
 */
const getActividadesEstructura = async (idReporte) => {
  try {
    const actividadEstructura = await ActividadesEstructura.findOne({
      where: { id_reporte: idReporte }
    });
    if (!actividadEstructura) {
      throw new Error(`No se encontró ActividadesEstructura con id_reporte: ${idReporte}`);
    }
    return actividadEstructura;
  } catch (error) {
    console.error(`Error al obtener ActividadesEstructura con id_reporte ${idReporte}:`, error);
    throw error;
  }
};

/**
 * Función auxiliar para obtener un reporte válido a partir de un ID o un objeto Reporte.
 * @param {number|object} input - El ID del reporte o el objeto Reporte.
 * @returns {Promise<{idReporte: number, reporte: object}>}
 * @throws {Error} Si el parámetro es inválido o no se encuentra el reporte.
 */
const obtenerReporteValido = async (input) => {
  let idReporte;
  let reporte;
  if (typeof input === 'number') {
    idReporte = input;
    reporte = await Reporte.findByPk(idReporte);
    if (!reporte) throw new Error(`No se encontró el Reporte con id: ${idReporte}`);
  } else if (typeof input === 'object' && input !== null) {
    reporte = input;
    idReporte = reporte.id;
  } else {
    throw new Error('Parámetro inválido: se esperaba un ID o un objeto Reporte');
  }
  return { idReporte, reporte };
};

/**
 * Función auxiliar para obtener la siguiente actividad basado en el ID del reporte.
 * @param {number} idReporte 
 * @returns {Promise<object|null>} Retorna la siguiente actividad o null si no existe.
 */
const getNextActividad = async (idReporte) => {
  try {
    return await getActividadesEstructura(idReporte + 1);
  } catch (error) {
    // Si no se encuentra la siguiente actividad se retorna null
    return null;
  }
};

/**
 * Actualiza la actividad de una estructura basada en el reporte.
 * Si el reporte tiene id_resultado igual a ESTADO_COMPLETADO, se actualiza la actividad actual a completada y
 * se intenta iniciar la siguiente actividad.
 * @param {number|object} idReporteOrReporte - Puede ser un ID numérico o un objeto Reporte.
 * @returns {Promise<boolean>} Retorna true si se realizó alguna actualización, false en caso contrario.
 */
const updateActividadEstructura = async (idReporteOrReporte) => {
  try {
    const { idReporte, reporte } = await obtenerReporteValido(idReporteOrReporte);
    if (reporte.id_resultado !== ESTADO_COMPLETADO) {
      return false;
    }
    const actividadActual = await getActividadesEstructura(idReporte);
    
    const siguienteActividad = await getNextActividad(idReporte);
    if (siguienteActividad) {
      siguienteActividad.id_estado = ESTADO_INICIADA;
      await siguienteActividad.save();
      console.log(`Siguiente actividad (Reporte ID ${idReporte + 1}) actualizada a estado Iniciada`);
    } else {
      console.log(`No se encontró siguiente actividad para el reporte ID ${idReporte + 1}. Se podría verificar la completitud total de actividades.`);
      // Aquí se podría agregar lógica adicional para verificar el estado global de la estructura
    }
    
    actividadActual.id_estado = ESTADO_COMPLETADO;
    await actividadActual.save();
    console.log(`Actividad actual (Reporte ID ${idReporte}) actualizada a estado Completado`);

    return true;
  } catch (error) {
    console.error('Error en updateActividadEstructura:', error);
    throw error;
  }
};

/**
 * Calcula el porcentaje de actividades completadas e iniciadas para una estructura.
 * Se basa en el total de actividades requeridas según el tipo de estructura.
 * @param {number} idEstructura - ID de la estructura.
 * @returns {Promise<{porcentaje_actividades_completadas: number, porcentaje_actividades_iniciadas: number}>}
 */
const calcularPorcentajeActividadesCompletadas = async (idEstructura) => {
  try {
    const estructura = await Estructura.findByPk(idEstructura, {
      include: [{ model: TipoEstructura, as: 'tipo_estructura' }]
    });
    if (!estructura) {
      throw new Error('Estructura no encontrada');
    }
    const actividadesRequeridas = await CTActividadesEstructura.findAll({
      where: { id_tipo_estructura: estructura.id_tipo_estructura }
    });
    const actividadesCompletadas = await ActividadesEstructura.findAll({
      where: { id_estructura: idEstructura, id_estado: ESTADO_COMPLETADO }
    });
    const actividadesIniciadas = await ActividadesEstructura.findAll({
      where: { id_estructura: idEstructura, id_estado: ESTADO_INICIADA }
    });
    const totalRequeridas = actividadesRequeridas.length;
    const totalCompletadas = actividadesCompletadas.length;
    const totalIniciadas = actividadesIniciadas.length;
    if (totalRequeridas === 0) {
      return { porcentaje_actividades_completadas: 0, porcentaje_actividades_iniciadas: 0 };
    }
    return {
      porcentaje_actividades_completadas: Math.round((totalCompletadas / totalRequeridas) * 100),
      porcentaje_actividades_iniciadas: Math.round((totalIniciadas / totalRequeridas) * 100)
    };
  } catch (error) {
    console.error('Error al calcular los porcentajes de actividades:', error);
    throw error;
  }
};

/**
 * Endpoint para calcular el porcentaje de actividades completadas e iniciadas de una estructura.
 * @param {object} req - Request de Express.
 * @param {object} res - Response de Express.
 */
const getPorcentajeEstructura = async (req, res) => {
  try {
    const { id } = req.params;
    const porcentaje = await calcularPorcentajeActividadesCompletadas(id);
    res.json({ porcentaje });
  } catch (error) {
    console.error('Error al calcular el porcentaje de la estructura:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
 * Calcula el porcentaje de actividades para un conjunto.
 * Recorre todas las estructuras asociadas al conjunto y acumula los totales de actividades.
 * @param {number} idConjunto - ID del conjunto.
 * @returns {Promise<{porcentaje_actividades_completadas: number, porcentaje_actividades_iniciadas: number}>}
 */
const calcularPorcentajeConjunto = async (idConjunto) => {
  try {
    const estructuras = await Estructura.findAll({
      where: { id_conjunto: idConjunto }
    });
    if (!estructuras.length) {
      throw new Error('No se encontraron estructuras para este conjunto');
    }
    let totalRequeridas = 0;
    let totalCompletadas = 0;
    let totalIniciadas = 0;
    
    // Para cada estructura se acumulan los totales
    for (const estructura of estructuras) {
      const actividadesRequeridas = await CTActividadesEstructura.findAll({
        where: { id_tipo_estructura: estructura.id_tipo_estructura }
      });
      totalRequeridas += actividadesRequeridas.length;
      
      const actividadesCompletadas = await ActividadesEstructura.findAll({
        where: { id_estructura: estructura.id, id_estado: ESTADO_COMPLETADO }
      });
      totalCompletadas += actividadesCompletadas.length;
      
      const actividadesIniciadas = await ActividadesEstructura.findAll({
        where: { id_estructura: estructura.id, id_estado: ESTADO_INICIADA }
      });
      totalIniciadas += actividadesIniciadas.length;
    }
    
    return {
      porcentaje_actividades_completadas: totalRequeridas ? Math.round((totalCompletadas / totalRequeridas) * 100) : 0,
      porcentaje_actividades_iniciadas: totalRequeridas ? Math.round((totalIniciadas / totalRequeridas) * 100) : 0
    };
  } catch (error) {
    console.error('Error al calcular porcentajes para el conjunto:', error);
    throw error;
  }
};

/**
 * Calcula el porcentaje de actividades para un proyecto.
 * Se asume que el modelo Conjunto tiene una propiedad id_proyecto para relacionarlo con el proyecto.
 * Para cada conjunto del proyecto, se acumulan los totales de actividades de sus estructuras.
 * @param {number} idProyecto - ID del proyecto.
 * @returns {Promise<{porcentaje_actividades_completadas: number, porcentaje_actividades_iniciadas: number}>}
 */
const calcularPorcentajeProyecto = async (idProyecto) => {
  try {
    // Obtener todos los conjuntos que pertenezcan al proyecto
    const conjuntos = await Conjunto.findAll({
      where: { id_proyecto: idProyecto }
    });
    if (!conjuntos.length) {
      throw new Error('No se encontraron conjuntos para este proyecto');
    }
    
    let totalRequeridas = 0;
    let totalCompletadas = 0;
    let totalIniciadas = 0;
    
    // Para cada conjunto se recorren sus estructuras y se acumulan los totales
    for (const conjunto of conjuntos) {
      const estructuras = await Estructura.findAll({
        where: { id_conjunto: conjunto.id }
      });
      for (const estructura of estructuras) {
        const actividadesRequeridas = await CTActividadesEstructura.findAll({
          where: { id_tipo_estructura: estructura.id_tipo_estructura }
        });
        totalRequeridas += actividadesRequeridas.length;
        
        const actividadesCompletadas = await ActividadesEstructura.findAll({
          where: { id_estructura: estructura.id, id_estado: ESTADO_COMPLETADO }
        });
        totalCompletadas += actividadesCompletadas.length;
        
        const actividadesIniciadas = await ActividadesEstructura.findAll({
          where: { id_estructura: estructura.id, id_estado: ESTADO_INICIADA }
        });
        totalIniciadas += actividadesIniciadas.length;
      }
    }
    
    return {
      porcentaje_actividades_completadas: totalRequeridas ? Math.round((totalCompletadas / totalRequeridas) * 100) : 0,
      porcentaje_actividades_iniciadas: totalRequeridas ? Math.round((totalIniciadas / totalRequeridas) * 100) : 0
    };
  } catch (error) {
    console.error('Error al calcular porcentajes para el proyecto:', error);
    throw error;
  }
};

/**
 * Endpoint para obtener el porcentaje de actividades de un conjunto.
 * @param {object} req - Request de Express.
 * @param {object} res - Response de Express.
 */
const getPorcentajeConjunto = async (req, res) => {
  try {
    const { id } = req.params; // id del conjunto
    // Consultar todas las estructuras asociadas al conjunto
    const estructuras = await Estructura.findAll({ where: { id_conjunto: id } });
    
    if (!estructuras || estructuras.length === 0) {
      return res.json({ porcentaje: 0 });
    }
    
    // Filtrar las estructuras con id_estado === 3 (completadas)
    const estructurasCompletadas = estructuras.filter(estructura => estructura.id_estado === 3);
    
    const porcentaje = await calcularPorcentajeProyecto(id);
    res.json({ porcentaje: porcentaje.porcentaje_actividades_completadas });    
  } catch (error) {
    console.error('Error al calcular el porcentaje para el conjunto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
/**
 * Endpoint para obtener el porcentaje de actividades de un proyecto.
 * Ahora muestra el porcentaje de estructuras con id_estado=3.
 * @param {object} req - Request de Express.
 * @param {object} res - Response de Express.
 */
const getPorcentajeProyecto = async (req, res) => {
  try {
    const { id } = req.params; // id del proyecto
    // Consultar todos los conjuntos asociados al proyecto
    const conjuntos = await Conjunto.findAll({ where: { id_proyecto: id } });
    
    if (!conjuntos || conjuntos.length === 0) {
      return res.json({ porcentaje: 0 });
    }
    
    // Filtrar aquellos conjuntos con id_estado === 3 (completados)
    const conjuntosCompletados = conjuntos.filter(conjunto => conjunto.id_estado === 3);
    
    const porcentaje = await calcularPorcentajeProyecto(id);    
    res.json({ porcentaje: porcentaje.porcentaje_actividades_completadas });  } catch (error) {
    console.error('Error al calcular el porcentaje para el proyecto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
/**
 * Genera una estructura y sus actividades asociadas.
 * Actualiza el estado de la estructura a "Por Iniciar", crea un reporte por cada actividad requerida
 * y activa la primera actividad generada.
 * @param {object} req - Request de Express.
 * @param {object} res - Response de Express.
 */
const generarEstructuraYActividadesEstructura = async (req, res) => {
  try {
    const { id } = req.params;
    const estructuraId = parseInt(id, 10);
    if (isNaN(estructuraId)) {
      return res.status(400).json({ error: 'El id de la estructura no es válido' });
    }
    const estructura = await Estructura.findByPk(estructuraId);
    if (!estructura) {
      return res.status(404).json({ error: 'Estructura no encontrada' });
    }
    // Actualizar el estado de la estructura a "Por Iniciar"
    estructura.id_estado = ESTADO_POR_INICIAR + 1; // Suponiendo que el estado 2 representa "Por Iniciar"
    await estructura.save();
    const actividadesRequeridas = await CTActividadesEstructura.findAll({
      where: { id_tipo_estructura: estructura.id_tipo_estructura }
    });
    if (actividadesRequeridas.length === 0) {
      return res.status(404).json({ error: 'No se encontraron actividades requeridas para este tipo de estructura' });
    }
    // Crear reportes y actividades
    const actividadesCreadas = await Promise.all(actividadesRequeridas.map(async (actividadRequerida) => {
      const nuevoReporte = await Reporte.create({ descripcion: "" });
      const descripcionActividad = actividadRequerida.descripcion.replace(/^ct_/, 'actividades_');
      return await ActividadesEstructura.create({
        id_estructura: estructuraId,
        id_actividad: actividadRequerida.id_actividad,
        descripcion: descripcionActividad,
        id_estado: ESTADO_POR_INICIAR, // Estado inicial "Por Iniciar"
        id_reporte: nuevoReporte.id
      });
    }));
    // Iniciar la primera actividad creada
    if (actividadesCreadas.length > 0) {
      actividadesCreadas[0].id_estado = ESTADO_INICIADA;
      await actividadesCreadas[0].save();
    }
    console.log(`Actividades y reportes generados correctamente para la estructura con ID: ${estructuraId}`);
    return res.status(201).json({
      estructura,
      actividades_estructura: actividadesCreadas,
      descripcion: {
        id: actividadesCreadas[0].id_reporte,
        descripcion: "primer reporte"
      },
      reporte: actividadesCreadas.map(act => ({
        id: act.id_reporte,
        descripcion: ""
      }))
    });
  } catch (error) {
    console.error('Error al generar estructura, actividades y reportes:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
 * Actualiza la actividad de una estructura basado en un reporte.
 * @param {object} req - Request de Express.
 * @param {object} res - Response de Express.
 */
const handleUpdateActividadEstructura = async (req, res) => {
  try {
    const { id } = req.params; // id del reporte
    const idReporte = parseInt(id, 10);
    if (isNaN(idReporte)) {
      return res.status(400).json({ error: 'El id del reporte no es válido' });
    }
    const resultado = await updateActividadEstructura(idReporte);
    return res.status(200).json({ 
      success: true, 
      message: resultado 
        ? 'Actividad actualizada correctamente y posiblemente la siguiente actividad iniciada' 
        : 'No se requirió actualización (id_resultado no es 3)'
    });
  } catch (error) {
    console.error('Error al actualizar la actividad estructura:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  addEstructura,
  getEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
  generarEstructuraYActividadesEstructura,
  getPorcentajeEstructura,
  getPorcentajeConjunto,
  getPorcentajeProyecto,
  handleUpdateActividadEstructura,
};
