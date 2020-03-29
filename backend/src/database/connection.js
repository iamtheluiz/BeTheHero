const knex = require('knex');
const configuration = require('../../knexfile');

// Gera uma conexão de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;