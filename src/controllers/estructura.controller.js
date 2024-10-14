// Importaciones de modelos
const Estructura = require('../models/estructura.js');
const Conjunto = require('../models/conjunto.js');
const TipoEstructura = require('../models/tipoEstructura.js');
const UbicacionEstructura = require('../models/ubicacionEstructura.js');
const ActividadesEstructura = require('../models/actividadesEstructura.js');
const CTActividadesEstructura = require('../models/ctactividadesEstructura.js');
const Estado = require('../models/estado.js');
const Diseño = require('../models/diseño.js');

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

// Función para obtener el estado de la estructura
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
      // Aquí puedes personalizar la descripción si es necesario
      // Por ejemplo, remover el prefijo 'ct_' de la descripción
      const descripcionActividad = actividadRequerida.descripcion.replace(/^ct_/, 'actividades_');

      return await ActividadesEstructura.create({
        id_estructura: nuevaEstructura.id,
        id_actividad: actividadRequerida.id_actividad,
        descripcion: descripcionActividad, // Ajusta según tu lógica de negocio
        id_estado: 1 // Estado "Por Iniciar"
      });
    }));

    console.log(`Estructura y actividades generadas correctamente para el tipo de estructura: ${tipoEstructura.nombre}`);
    return res.status(201).json({
      estructura: nuevaEstructura,
      actividades_estructura: actividadesCreadas
    }); // Retornar la nueva estructura y las actividades creadas

  } catch (error) {
    console.error('Error al generar estructura y actividades:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
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
  generarEstructuraYActividadesEstructura
};
