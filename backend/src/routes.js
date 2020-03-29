// Módulos
const express = require('express');

// Controllers
const OngController = require('./controllers/OngController');

const routes = express.Router();

// Main route
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;