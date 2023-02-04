/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log('>> Server running on: http://localhost:', PORT);
});
