const { Op } = require('sequelize');
const Estructura = require('../models/estructura.js');
const ActividadesEstructura = require('../models/actividadesEstructura.js');
const CTActividadesEstructura = require('../models/ctactividadesEstructura.js');
const TipoEstructura = require('../models/tipoEstructura.js');

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

    // Obtener todas las actividades completadas para esta estructura
    const actividadesCompletadas = await ActividadesEstructura.findAll({
      where: {
        id_estructura: idEstructura,
        id_estado: 3 // Asumiendo que 3 es el ID del estado 'Completado'
      }
    });

    // Calcular el porcentaje
    const totalRequeridas = actividadesRequeridas.length;
    const totalCompletadas = actividadesCompletadas.length;

    if (totalRequeridas === 0) {
      return 0; // Evitar división por cero
    }

    const porcentaje = (totalCompletadas / totalRequeridas) * 100;

    return Math.round(porcentaje); // Redondear al entero más cercano
  } catch (error) {
    console.error('Error al calcular el porcentaje de actividades completadas:', error);
    throw error;
  }
};

const getEstadoEstructura = async (req, res) => {
  try {
    const { idEstructura } = req.params;

    const porcentaje = await calcularPorcentajeActividadesCompletadas(idEstructura);

    // Obtener el estado actual de la estructura
    const estructura = await Estructura.findByPk(idEstructura);
    const estadoActual = estructura.id_estado;

    let mensaje = "";
    if (porcentaje === 100 && estadoActual === 5) { // Asumiendo que 5 es el ID del estado 'Culminado'
      mensaje = "La estructura está culminada.";
    } else if (porcentaje === 100) {
      mensaje = "Todas las actividades están completas, pero el estado de la estructura no se ha actualizado a 'Culminado'.";
    } else {
      mensaje = `La estructura está al ${porcentaje}% de completitud.`;
    }

    res.json({
      porcentaje,
      estadoActual,
      mensaje
    });

  } catch (error) {
    console.error('Error al obtener el estado de la estructura:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  calcularPorcentajeActividadesCompletadas,
  getEstadoEstructura
};