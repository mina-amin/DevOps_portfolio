const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');

router.get('/', authenticate, resourceController.getResources);
router.post('/', authenticate, authorizeAdmin, resourceController.addResource);

module.exports = router;
