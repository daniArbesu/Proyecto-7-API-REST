const express = require('express');
const { getAllExercises, getExerciseById } = require('../controllers/exercises');

const router = express.Router();

// We define the endpoints for exercises
router.get('/exercises', getAllExercises);
router.get('/exercises/:id', getExerciseById);
router.post('/exercises');
router.put('/exercises/:id');
router.delete('/exercises/:id');

module.exports = router;
