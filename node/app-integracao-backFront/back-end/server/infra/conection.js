const pgp = require('pg-promise')();
const bancoDeDados = pgp({
  user: 'postgres',
  password: '50484855',
  host: 'localhost', 
  port: '5432',
  database: 'english-words'
});

module.exports = bancoDeDados;