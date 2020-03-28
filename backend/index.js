// Módulos
const express = require('express');

// Define a aplicação
const app = express();

// Main route
app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!'});
});

// Inicia o servidor
app.listen(3333, () => console.log('Application running -> localhost:3333'));