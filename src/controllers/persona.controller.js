const Persona = require('../models/persona.js');
const Empresa = require('../models/empresa.js');
const Rol = require('../models/rol.js');
const handleError = require('../utils/errorHandler.js');

const {
  addRecord,
  getRecordWithAssociations,
  getRecordsWithAssociations,
  updateRecord,
  deleteRecord,
} = require('./crudController.js');

const addPersona = addRecord(Persona);
const getPersona = getRecordWithAssociations(Persona, [
  { model: Empresa, attributes: ['nombre'], as: 'empresa' },
  { model: Rol, attributes: ['nombre'], as: 'rol' },
]);
const getPersonas = getRecordsWithAssociations(Persona, [
  { model: Empresa, attributes: ['nombre'], as: 'empresa' },
  { model: Rol, attributes: ['nombre'], as: 'rol' },
]);
const updatePersona = updateRecord(Persona);
const deletePersona = deleteRecord(Persona);

// controllers/persona.controller.js
// controllers/persona.controller.js
const revisarCedula = async (req, res) => {
  try {
      const { cedula } = req.params;

      // Validación mejorada para números grandes
      if (!cedula || isNaN(Number(cedula))) {
          return res.status(400).json({
              message: 'La cédula debe ser un número válido'
          });
      }

      const persona = await Persona.findOne({
          where: { cedula: Number(cedula) },
          include: [{ model: Rol, attributes: ['id'], as: 'rol' }]
      });

      if (!persona) {
          return res.status(404).json({
              message: 'Persona no encontrada'
          });
      }

      const tieneRolValido = persona.rol && [1, 2].includes(persona.rol.id);
      return res.json({ result: tieneRolValido });
  } catch (error) {
      const handleErrorResult = handleError(error || {});
      res.status(handleErrorResult.status).json({
          error: true,
          ...handleErrorResult
      });
  }
};

module.exports = {
  addPersona,
  getPersona,
  getPersonas,
  updatePersona,
  deletePersona,
  revisarCedula,
};