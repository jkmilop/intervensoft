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

// Definición de métodos CRUD para Estructura
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

// Función para obtener actividades estructuras por ID de reporte
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

// Función para actualizar el estado de una estructura
const updateEstadoEstructura = async (idEstructura) => {
  try {
    const estructura = await Estructura.findByPk(idEstructura);
    
    if (!estructura) {
      throw new Error(`No se encontró la Estructura con id: ${idEstructura}`);
    }
    
    // Actualizar estado a 3 (Completado)
    estructura.id_estado = 3;
    await estructura.save();
    
    console.log(`Estructura ID ${idEstructura} actualizada a estado 3 (Completado)`);
    return estructura;
  } catch (error) {
    console.error(`Error al actualizar el estado de la Estructura ${idEstructura}:`, error);
    throw error;
  }
};

// Función principal para actualizar actividad estructura basada en reporte
const updateActividadEstructura = async (idReporteOrReporte) => {
  try {
    let idReporte;
    let reporte;
    
    // Determinar si se recibió un ID o un objeto Reporte
    if (typeof idReporteOrReporte === 'number') {
      idReporte = idReporteOrReporte;
      // Obtener el reporte
      reporte = await Reporte.findByPk(idReporte);
      if (!reporte) {
        throw new Error(`No se encontró el Reporte con id: ${idReporte}`);
      }
    } else if (typeof idReporteOrReporte === 'object') {
      reporte = idReporteOrReporte;
      idReporte = reporte.id;
    } else {
      throw new Error('Parámetro inválido: se esperaba un ID o un objeto Reporte');
    }
    
    // Verificar si el reporte tiene id_resultado igual a 3
    if (reporte.id_resultado === 3) {
      // Obtener la actividad estructura actual
      const actividadActual = await getActividadesEstructura(idReporte);
      
      // Verificar si existe una siguiente actividad (idReporte + 1)
      try {
        const siguienteActividad = await getActividadesEstructura(idReporte + 1);
        
        // Actualizar la siguiente actividad a estado 2 (Iniciada)
        siguienteActividad.id_estado = 2;
        await siguienteActividad.save();
        console.log(`Siguiente actividad (Reporte ID ${idReporte + 1}) actualizada a estado 2 (Iniciada)`);
      } catch (error) {
        // Si no hay siguiente actividad, verificar si todas las actividades están completadas
        console.log(`No se encontró siguiente actividad para el reporte ID ${idReporte + 1}, verificando si todas están completadas`);
        
        // Obtener todas las actividades de esta estructura
        const todasLasActividades = await ActividadesEstructura.findAll({
          where: { id_estructura: actividadActual.id_estructura }
        });
        
        // Verificar si todas tienen id_estado = 3 (Completado)
        const todasCompletadas = todasLasActividades.every(actividad => actividad.id_estado === 3);
        
        if (todasCompletadas) {
          // Actualizar el estado de la estructura
          await updateEstadoEstructura(actividadActual.id_estructura);
          console.log(`Todas las actividades están completadas. Estructura ${actividadActual.id_estructura} marcada como completada.`);
        }
      }
      
      // Actualizar la actividad actual a estado 3 (Completado)
      actividadActual.id_estado = 3;
      await actividadActual.save();
      console.log(`Actividad actual (Reporte ID ${idReporte}) actualizada a estado 3 (Completado)`);
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error en updateActividadEstructura:', error);
    throw error;
  }
};

// Función para calcular porcentajes de actividades en diferentes estados
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

const calcularPorcentajeActividadesCompletadas = async (idEstructura) => {
  try {
    // Obtener la estructura y su tipo
    const estructura = await Estructura.findByPk(idEstructura, {
      include: [{ model: TipoEstructura, as: 'tipo_estructura' }]
    });
    if (!estructura) {
      throw new Error('Estructura no encontrada');
    }
    // Obtener todas las actividades requeridas para este tipo de estructura
    const actividadesRequeridas = await CTActividadesEstructura.findAll({
      where: { id_tipo_estructura: estructura.id_tipo_estructura }
    });
    // Obtener actividades en diferentes estados
    const actividadesCompletadas = await ActividadesEstructura.findAll({
      where: {
        id_estructura: idEstructura,
        id_estado: 3 // Estado 'Completado'
      }
    });
    const actividadesIniciadas = await ActividadesEstructura.findAll({
      where: {
        id_estructura: idEstructura,
        id_estado: 2 // Estado 'Iniciada'
      }
    });
    // Calcular porcentajes (sin contar las actividades con id_estado: 1)
    const totalRequeridas = actividadesRequeridas.length;
    const totalCompletadas = actividadesCompletadas.length;
    const totalIniciadas = actividadesIniciadas.length;
    if (totalRequeridas === 0) {
      return {
        porcentaje_actividades_completadas: 0,
        porcentaje_actividades_iniciadas: 0
      }; // Evitar división por cero
    }
    const porcentaje_actividades_completadas = (totalCompletadas / totalRequeridas) * 100;
    const porcentaje_actividades_iniciadas = (totalIniciadas / totalRequeridas) * 100;
    return {
      porcentaje_actividades_completadas: Math.round(porcentaje_actividades_completadas), // Redondear al entero más cercano
      porcentaje_actividades_iniciadas: Math.round(porcentaje_actividades_iniciadas)
    };
  } catch (error) {
    console.error('Error al calcular los porcentajes de actividades:', error);
    throw error;
  }
};

// Función modificada para generar una estructura y sus actividades asociadas
const generarEstructuraYActividadesEstructura = async (req, res) => {
  try {
    const { id } = req.params;
    const estructuraId = parseInt(id, 10);
    if (isNaN(estructuraId)) {
      return res.status(400).json({ error: 'El id de la estructura no es válido' });
    }
    // Obtener la estructura existente
    const estructura = await Estructura.findByPk(estructuraId);
    if (!estructura) {
      return res.status(404).json({ error: 'Estructura no encontrada' });
    }
    // Actualizar el estado de la estructura a 2 ("Por Iniciar")
    estructura.id_estado = 2;
    await estructura.save();
    // Obtener las actividades requeridas para este tipo de estructura
    const actividadesRequeridas = await CTActividadesEstructura.findAll({
      where: { id_tipo_estructura: estructura.id_tipo_estructura }
    });
    if (actividadesRequeridas.length === 0) {
      return res.status(404).json({ error: 'No se encontraron actividades requeridas para este tipo de estructura' });
    }
    // Crear las actividades en ActividadesEstructura
    const actividadesCreadas = await Promise.all(actividadesRequeridas.map(async (actividadRequerida) => {
      const nuevoReporte = await Reporte.create({ descripcion: "" });
      const descripcionActividad = actividadRequerida.descripcion.replace(/^ct_/, 'actividades_');
      return await ActividadesEstructura.create({
        id_estructura: estructuraId,
        id_actividad: actividadRequerida.id_actividad,
        descripcion: descripcionActividad,
        id_estado: 1, // Estado inicial "Por Iniciar"
        id_reporte: nuevoReporte.id
      });
    }));
    // Cambiar el estado de la primera actividad creada a 2
    if (actividadesCreadas.length > 0) {
      actividadesCreadas[0].id_estado = 2;
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

// Nueva función para obtener actividades por estructura clasificadas por estado
// Función para obtener las actividades clasificadas por estado de una estructura
// Nueva función para obtener actividades vinculadas a una estructura y organizarlas por estado
const getActividadesPorEstructura = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de la estructura de los parámetros de la URL
    // 1. Verificar que la estructura existe
    const estructura = await Estructura.findByPk(id);
    if (!estructura) {
      return res.status(404).json({ error: 'Estructura no encontrada' });
    }
    // 2. Obtener todas las actividades vinculadas a la estructura de la tabla ActividadesEstructura
    const actividadesEstructura = await ActividadesEstructura.findAll({
      where: { id_estructura: id }
    });
    if (actividadesEstructura.length === 0) {
      return res.status(404).json({ error: 'No se encontraron actividades para esta estructura' });
    }
    // 3. Obtener detalles de las actividades de la tabla Actividad
    const actividadIds = actividadesEstructura.map(ae => ae.id_actividad);
    const actividades = await Actividad.findAll({
      where: {
        id: actividadIds
      },
      include: ['etapa', 'tipo_actividad', 'seccion'] // Incluir asociaciones necesarias
    });
    // 4. Organizar actividades por estado
    const actividadesPorIniciar = [];
    const actividadesIniciadas = [];
    const actividadesCompletadas = [];
    actividadesEstructura.forEach(actividadEstructura => {
      // Encontrar la actividad correspondiente en la tabla Actividad
      const actividad = actividades.find(a => a.id === actividadEstructura.id_actividad);
      const actividadDetalles = {
        nombre: actividad.nombre,
        etapa: actividad.etapa.nombre,
        tipo_actividad: actividad.tipo_actividad.nombre,
        seccion: actividad.seccion.nombre
      };
      // Clasificar según el id_estado de ActividadesEstructura
      switch (actividadEstructura.id_estado) {
        case 1: // Por Iniciar
          actividadesPorIniciar.push(actividadDetalles);
          break;
        case 2: // Iniciadas
          actividadesIniciadas.push(actividadDetalles);
          break;
        case 3: // Completadas
          actividadesCompletadas.push(actividadDetalles);
          break;
        default:
          break;
      }
    });
    // 5. Retornar la respuesta con las actividades clasificadas por estado
    return res.status(200).json({
      actividades_estructura: {
        actividades_por_iniciar: actividadesPorIniciar,
        actividades_iniciadas: actividadesIniciadas,
        actividades_completadas: actividadesCompletadas
      }
    });
  } catch (error) {
    console.error('Error al obtener actividades por estructura:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getPorcentajesEstructuras = async (req, res) => {
  try {
    // Obtener todas las estructuras con id_estado = 2
    const estructuras = await Estructura.findAll({
      where: { id_estado: 2 }
    });
    if (!estructuras || estructuras.length === 0) {
      return res.status(404).json({ error: 'No se encontraron estructuras con id_estado = 2' });
    }
    // Calcular porcentajes para cada estructura
    const porcentajes = await Promise.all(estructuras.map(async (estructura) => {
      // Suponiendo que getPorcentajeEstructura es una función existente que calcula el porcentaje de una estructura
      const porcentaje = await calcularPorcentajeEstructura(estructura.id);
      return {
        id_estructura: estructura.id,
        porcentaje
      };
    }));
    return res.status(200).json({ porcentajes });
  } catch (error) {
    console.error('Error al obtener porcentajes de estructuras:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getActividadesPorEstructuras = async (req, res) => {
  try {
    // Realizamos la consulta uniendo las tablas relacionadas
    const actividadesEstructuras = await Estructura.findAll({
      attributes: ['id', 'nombre'],
      include: ['conjunto', 'diseño']
    });
    // Formateamos la respuesta para ajustarse a lo solicitado
    const formattedResponse = actividadesEstructuras.map(estructura => ({
      id_estructura: estructura.id,
      nombre: estructura.nombre,
      conjunto: estructura.conjunto ? estructura.conjunto.nombre : null,
      diseño: estructura.Diseño ? estructura.diseño.nombre : null,
      actividades: estructura.Actividades.map(actividad => ({
        id_actividad: actividad.id,
        nombre: actividad.nombre
      }))
    }));
    // Devolvemos la respuesta en el formato deseado
    res.json({
      actividadesEstructuras: formattedResponse
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Error al obtener las actividades por estructuras: ${error.message}`
    });
  }
};

async function mostrarActividadIniciada(req, res) {
  try {
    const { id } = req.params;
    const estructuraId = parseInt(id, 10);
    if (isNaN(estructuraId)) {
      return res.status(400).json({ error: 'El id de la estructura no es válido' });
    }
    // Buscar la actividad con el alias correcto en el include
    const actividad = await ActividadesEstructura.findOne({
      where: {
        id_estructura: estructuraId,
        id_estado: 2,
      },
      include: [
        {
          model: Estructura,
          as: 'estructura', // Usa el alias correcto
          attributes: ['nombre'],
        },
        {
          model: Actividad,
          as: 'actividad', // Usa el alias correcto
          attributes: ['nombre'],
        },
        {
          model: Reporte,
          as: 'reporte', // Usa el alias correcto
          attributes: ['descripcion'],
        },
        {
          model: Estado,
          as: 'estado', // Usa el alias correcto
          attributes: ['nombre'],
        },
      ],
    });
    if (!actividad) {
      return res.status(404).json({ error: 'No se encontró una actividad iniciada para esta estructura' });
    }
    // Retornar los campos solicitados
    res.json({
      id: actividad.id,
      descripcion: actividad.descripcion,
      id_actividad: actividad.id_actividad,
      id_estructura: actividad.id_estructura,
      id_estado: actividad.id_estado,
      id_reporte: actividad.id_reporte,
      fecha_inicio: actividad.fecha_inicio,
      estructura: actividad.estructura?.nombre,
      actividad: actividad.actividad?.nombre,
      reporte: actividad.reporte?.descripcion,
      estado: actividad.estado?.nombre,
    });
  } catch (error) {
    console.error('Error al buscar la actividad iniciada:', error);
    res.status(500).json({ error: 'Error al buscar la actividad iniciada' });
  }
}

async function getReporte(req, res) {
  try {
    const { id } = req.params; // Obtiene el id de ActividadesEstructura desde los parámetros de la solicitud
    const actividadEstructuraId = parseInt(id, 10);
    if (isNaN(actividadEstructuraId)) {
      return res.status(400).json({ error: 'El id de ActividadesEstructura no es válido' });
    }
    // Buscar la ActividadesEstructura para obtener el id_reporte asociado
    const actividad = await ActividadesEstructura.findByPk(actividadEstructuraId, {
      attributes: ['id_reporte'],
    });
    if (!actividad || !actividad.id_reporte) {
      return res.status(404).json({ error: 'No se encontró el reporte asociado a la ActividadesEstructura' });
    }
    // Buscar el reporte con el id_reporte obtenido
    const reporte = await Reporte.findByPk(actividad.id_reporte, {
      attributes: ['id', 'descripcion', 'id_interventor', 'id_residente', 'id_contratista', 'id_resultado', 'fecha'],
      include: [
        {
          model: Persona,
          as: 'interventor',
          attributes: ['nombre'],
        },
        {
          model: Persona,
          as: 'residente',
          attributes: ['nombre'],
        },
        {
          model: Persona,
          as: 'contratista',
          attributes: ['nombre'],
        },
        {
          model: Resultado,
          as: 'resultado',
          attributes: ['nombre'],
        },
      ],
    });
    if (!reporte) {
      return res.status(404).json({ error: 'No se encontró el reporte con el id proporcionado' });
    }
    // Retornar los datos del reporte junto con la información adicional
    res.json({
      id: reporte.id,
      descripcion: reporte.descripcion,
      id_interventor: reporte.id_interventor,
      interventor_nombre: reporte.interventor?.nombre,
      id_residente: reporte.id_residente,
      residente_nombre: reporte.residente?.nombre,
      id_contratista: reporte.id_contratista,
      contratista_nombre: reporte.contratista?.nombre,
      id_resultado: reporte.id_resultado,
      resultado_nombre: reporte.resultado?.nombre,
      fecha: reporte.fecha,
    });
  } catch (error) {
    console.error('Error al buscar el reporte:', error);
    res.status(500).json({ error: 'Error al buscar el reporte' });
  }
}

// Endpoint para actualizar una actividad estructura basada en un reporte
const handleUpdateActividadEstructura = async (req, res) => {
  try {
    const { id } = req.params; // Id del reporte
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
  getActividadesPorEstructura,
  getPorcentajesEstructuras,
  getActividadesPorEstructuras,
  mostrarActividadIniciada,
  getReporte,
  updateActividadEstructura,
  updateEstadoEstructura,
  handleUpdateActividadEstructura
};