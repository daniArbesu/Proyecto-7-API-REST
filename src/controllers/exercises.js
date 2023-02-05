const { Exercise } = require('../models/mongo');

const getAllExercises = async (req, res) => {
  const exercises = await Exercise.find({});
  res.status(200).json({ data: exercises });
};

const getExerciseById = async (req, res) => {
  const { id } = req.params;
  const exercise = await Exercise.findById(id);
  res.status(200).json({ data: exercise });
};

module.exports = { getAllExercises, getExerciseById };
