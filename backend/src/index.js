// Módulos
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

// Define a aplicação
const app = express();

// Permissão de acesso
app.use(cors());

// Define o JSON para as requisições
app.use(express.json());

// Utiliza as rotas
app.use(routes);

// Erro de Validação no corpo
app.use(errors());

// Inicia o servidor
app.listen(3333, () => console.log('Application running -> localhost:3333'));