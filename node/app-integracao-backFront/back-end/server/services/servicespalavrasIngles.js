const data = require('../data/palavras')
exports.inserirPalavra = function(dados){
  return data.inserirPalavra(dados)
}
exports.obterPalavras = function(){
  return data.todasAsPalavras()
}