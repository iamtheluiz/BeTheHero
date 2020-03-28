const express = require('express');

const routes = express.Router();

// Main route
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World!'});
});

module.exports = routes;