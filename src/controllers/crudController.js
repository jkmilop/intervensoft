const handleError = require('../utils/errorHandler.js');

const addRecord = (Model) => async (req, res) => {
  try {
    const newRecord = await Model.create(req.body);
    res.json(newRecord);
  } catch (error) {
    handleError(res, error);
  }
};

const getRecords = (Model) => async (req, res) => {
  try {
    const records = await Model.findAll();
    res.json(records);
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

const updateRecord = (Model) => async (req, res) => {
  const { id } = req.params;
  try {
    const record = await Model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${Model.name} not found` });
    }
    await record.update(req.body);
    res.json(record);
  } catch (error) {
    handleError(res, error);
  }
};

const deleteRecord = (Model) => async (req, res) => {
  const { id } = req.params;
  try {
    const record = await Model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${Model.name} not found` });
    }
    await record.destroy();
    return res.sendStatus(204);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  addRecord,
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
};
