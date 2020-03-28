// Módulos
const express = require('express');
const routes = require('./routes');

// Define a aplicação
const app = express();

// Define o JSON para as requisições
app.use(express.json());

// Utiliza as rotas
app.use(routes);

// Inicia o servidor
app.listen(3333, () => console.log('Application running -> localhost:3333'));