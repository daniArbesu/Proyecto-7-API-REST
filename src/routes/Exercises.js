const express = require('express');

const router = express.Router();

// We define the endpoints for exercises
router.get('/exercises');
router.get('/exercises/:id');
router.post('/exercises');
router.put('/exercises/:id');
router.delete('/exercises/:id');

module.exports = router;
