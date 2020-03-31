const knex = require('knex');
const configuration = require('../../knexfile');

// Verifica o ambiente
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

// Gera uma conexão de desenvolvimento
const connection = knex(config);

module.exports = connection;