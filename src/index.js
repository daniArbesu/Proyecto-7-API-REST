/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const express = require('express');
const exercisesRouter = require('./routes/Exercises');

const app = express();
app.use(express.json());

app.use('/api', exercisesRouter);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`>> Server running on: http://localhost:${PORT}`);
});
