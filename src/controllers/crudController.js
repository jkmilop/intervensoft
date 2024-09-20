const handleError = require('../utils/errorHandler.js');

const addRecord = (Model) => async (req, res) => {
  try {
    const newRecord = await Model.create(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    handleError(res, error);
  }
};

const getRecords = (Model) => async (req, res) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const offset = (page - 1) * limit;
    
    const { rows: records, count } = await Model.findAndCountAll({
      where: filters,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    res.json({
      records,
      currentPage: parseInt(page),
      totalPages: Math.ceil(count / limit),
      totalRecords: count
    });
  } catch (error) {
    handleError(res, error);
  }
};

const getRecord = (Model) => async (req, res) => {
  const { id } = req.params;
  try {
    const record = await Model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${Model.name} not found` });
    }
    res.json(record);
  } catch (error) {
    handleError(res, error);
  }
};

const getRecordWithAssociations = (Model, associations = []) => async (req, res) => {
  const { id } = req.params;
  try {
    const record = await Model.findByPk(id, { include: associations });
    if (!record) {
      return res.status(404).json({ message: `${Model.name} not found` });
    }
    res.json(record);
  } catch (error) {
    handleError(res, error);
  }
};

const getRecordsWithAssociations = (Model, associations = []) => async (req, res) => {
  try {
    const records = await Model.findAll({ include: associations });
    res.json(records);
  } catch (error) {
    handleError(res, error);
  }
};


const updateRecord = (Model) => async (req, res) => {
  const { id } = req.params;
  try {
    let record = await Model.findByPk(id);
    
    if (!record) {
      // If the record doesn't exist, create a new one
      record = await Model.create(req.body);
      res.status(201).json(record);
    } else {
      // If the record exists, update it
      await record.update(req.body);
      res.json(record);
    }
  } catch (error) {
    handleError(res, error);
  }
};

const deleteRecord = (Model) => async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowsCount = await Model.destroy({ where: { id } });
    
    if (deletedRowsCount === 0) {
      return res.status(404).json({ message: `${Model.name} not found` });
    }
    
    res.sendStatus(204);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  addRecord,
  getRecords,
  getRecord,
  getRecordsWithAssociations,
  getRecordWithAssociations,
  updateRecord,
  deleteRecord,
};