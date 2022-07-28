const bd = require('../infra/conection');

exports.inserirPalavra = function(dados){
  return bd.none('INSERT INTO palavras_desconhecidas(palavra, frequencia) VALUES ($1, $2)',[dados.palavra, dados.frequencia])
}
exports.todasAsPalavras = function(){
  return bd.query('SELECT * FROM palavras_desconhecidas')

}