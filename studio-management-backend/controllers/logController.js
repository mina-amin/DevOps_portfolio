const Log = require('../models/log');

const getLogs = async (req, res) => {
  const logs = await Log.getAll();
  res.json(logs);
};

module.exports = { getLogs };
