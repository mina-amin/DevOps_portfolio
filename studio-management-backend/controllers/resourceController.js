const Resource = require('../models/resource');

const getResources = async (req, res) => {
  const resources = await Resource.getAll();
  res.json(resources);
};

const addResource = async (req, res) => {
  const { name, category } = req.body;
  const resourceId = await Resource.create(name, category);
  res.status(201).json({ id: resourceId });
};

module.exports = { getResources, addResource };
