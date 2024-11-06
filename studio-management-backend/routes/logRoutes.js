const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/', authenticate, logController.getLogs);

module.exports = router;
