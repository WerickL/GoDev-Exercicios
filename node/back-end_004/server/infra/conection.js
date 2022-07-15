const pgp = require('pg-promise')();
const bancoDeDados = pgp({
  user: 'postgres',
  password: '******',
  host: 'localhost', 
  port: '5432',
  database: 'godev-db'
});

module.exports = bancoDeDados;