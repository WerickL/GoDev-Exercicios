const bd = require('../infra/conection');

exports.inserirPalavra = function(dados){
  return bd.none('INSERT INTO palavras_desconhecidas(palavra, frequencia) VALUES ($1, $2)',[dados.palavra, dados.frequencia])
}
exports.existIn = function(dados, nomeTabela){
  return bd.oneOrNone('SELECT palavra FROM $1 where palavra = $2', [nomeTabela, dados.palavra])

}