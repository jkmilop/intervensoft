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

// Función para calcular porcentajes de actividades en diferentes estados

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
        id_estado: 3 // Asumiendo que 3 es el ID del estado 'Completado'
      }
    });

    const actividadesIniciadas = await ActividadesEstructura.findAll({
      where: {
        id_estructura: idEstructura,
        id_estado: 2 // Estado 'Iniciada'
      }
    });

    const actividadesPorIniciar = await ActividadesEstructura.findAll({
      where: {
        id_estructura: idEstructura,
        id_estado: 1 // Estado 'Por Iniciar'
      }
    });

    // Calcular porcentajes
    const totalRequeridas = actividadesRequeridas.length;
    const totalCompletadas = actividadesCompletadas.length;
    const totalIniciadas = actividadesIniciadas.length;
    const totalPorIniciar = actividadesPorIniciar.length;

    if (totalRequeridas === 0) {
      return {
        porcentaje_actividades_completadas: 0,
        porcentaje_actividades_iniciadas: 0,
        porcentaje_por_iniciar: 0
      }; // Evitar división por cero
    }

    const porcentaje_actividades_completadas = (totalCompletadas / totalRequeridas) * 100;
    const porcentaje_actividades_iniciadas = (totalIniciadas / totalRequeridas) * 100;
    const porcentaje_por_iniciar = (totalPorIniciar / totalRequeridas) * 100;

    return {
      porcentaje_actividades_completadas: Math.round(porcentaje_actividades_completadas), // Redondear al entero más cercano
      porcentaje_actividades_iniciadas: Math.round(porcentaje_actividades_iniciadas),
      porcentaje_por_iniciar: Math.round(porcentaje_por_iniciar)
    };
  } catch (error) {
    console.error('Error al calcular los porcentajes de actividades:', error);
    throw error;
  }
};
// Función para calcular porcentajes de actividades en diferentes estados
const getEstadoEstructura = async (req, res) => {
  try {
    const { idEstructura } = req.params;

    const {
      porcentaje_actividades_completadas,
      porcentaje_actividades_iniciadas,
      porcentaje_por_iniciar
    } = await calcularPorcentajeActividadesCompletadas(idEstructura);

    // Obtener el estado actual de la estructura
    const estructura = await Estructura.findByPk(idEstructura);
    const estadoActual = estructura.id_estado;

    let mensaje = "";
    if (porcentaje_actividades_completadas === 100 && estadoActual === 5) { // Asumiendo que 5 es el ID del estado 'Culminado'
      mensaje = "La estructura está culminada.";
    } else if (porcentaje_actividades_completadas === 100) {
      mensaje = "Todas las actividades están completas, pero el estado de la estructura no se ha actualizado a 'Culminado'.";
    } else {
      mensaje = `La estructura está al ${porcentaje_actividades_completadas}% completada, con ${porcentaje_actividades_iniciadas}% de actividades iniciadas y ${porcentaje_por_iniciar}% por iniciar.`;
    }

    res.json({
      porcentaje_actividades_completadas,
      porcentaje_actividades_iniciadas,
      porcentaje_por_iniciar,
      estadoActual,
      mensaje
    });

  } catch (error) {
    console.error('Error al obtener el estado de la estructura:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Nuevo manejador para la ruta de porcentaje
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

// Función modificada para generar una estructura y sus actividades asociadas
const generarEstructuraYActividadesEstructura = async (req, res) => {
  try {
    // Obtener idTipoEstructura de req.params
    const { id } = req.params; // Ejemplo: /estructura/1/generar

    // Validar que id es un número
    const idTipoEstructura = parseInt(id, 10);
    if (isNaN(idTipoEstructura)) {
      return res.status(400).json({ error: 'El id del tipo de estructura no es válido' });
    }

    // 1. Verificar que el TipoEstructura existe usando el método CRUD
    const tipoEstructura = await TipoEstructura.findByPk(idTipoEstructura);
    if (!tipoEstructura) {
      return res.status(404).json({ error: 'Tipo de estructura no encontrado' });
    }

    // 2. Crear una nueva Estructura con id_estado = 1 usando el método del modelo directamente
    const nuevaEstructura = await Estructura.create({
      id_tipo_estructura: idTipoEstructura,
      id_estado: 1 // Estado "Por Iniciar"
    });

    // 3. Obtener las actividades requeridas (CTActividadesEstructura) para este tipo de estructura
    const actividadesRequeridas = await CTActividadesEstructura.findAll({
      where: { id_tipo_estructura: idTipoEstructura }
    });

    if (actividadesRequeridas.length === 0) {
      return res.status(404).json({ error: 'No se encontraron actividades requeridas para este tipo de estructura' });
    }

    // 4. Crear actividades correspondientes en ActividadesEstructura con id_estado = 1 usando el método del modelo directamente
    // Utilizamos Promise.all para crear todas las actividades en paralelo
    const actividadesCreadas = await Promise.all(actividadesRequeridas.map(async (actividadRequerida) => {
      // Crear el reporte vacío
      const nuevoReporte = await Reporte.create({
        descripcion: "", // Reporte con descripción vacía
      });

      // Aquí puedes personalizar la descripción si es necesario
      const descripcionActividad = actividadRequerida.descripcion.replace(/^ct_/, 'actividades_');

      // Crear la actividad y asociar el reporte creado
      return await ActividadesEstructura.create({
        id_estructura: nuevaEstructura.id,
        id_actividad: actividadRequerida.id_actividad,
        descripcion: descripcionActividad, // Ajusta según tu lógica de negocio
        id_estado: 1, // Estado "Por Iniciar"
        id_reporte: nuevoReporte.id // Asociar el reporte a la actividad
      });
    }));

    console.log(`Estructura, actividades y reportes generados correctamente para el tipo de estructura: ${tipoEstructura.nombre}`);
    
    // Devolver la nueva estructura, actividades creadas y el primer reporte como ejemplo
    return res.status(201).json({
      estructura: nuevaEstructura,
      actividades_estructura: actividadesCreadas,
      reporte: actividadesCreadas.map(act => ({
        id: act.id_reporte,
        descripcion: ""
      }))
    }); // Retornar la nueva estructura y las actividades creadas

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
          include: ['conjunto','diseño']
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
// Exportación de métodos
module.exports = {
  addEstructura,
  getEstructura,
  getEstructuras,
  updateEstructura,
  deleteEstructura,
  getEstadoEstructura,
  getPorcentajeEstructura,
  generarEstructuraYActividadesEstructura,
  getActividadesPorEstructura,
  getPorcentajesEstructuras,
  getActividadesPorEstructuras  
};
