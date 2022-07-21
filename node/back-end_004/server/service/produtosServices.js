const produtosData = require('../data/produtosData');

exports.getProdutosById = function(id) {
  return produtosData.getProdutosById(id)
}

exports.updateDescription = function(id, description){
  return produtosData.updateDescription(id, description);
}

exports.insertProduto = function(descricao, preco, tipo){
  return produtosData.insertProduto(descricao, preco, tipo);
}
 exports.deleteProduto = function (id){
  return produtosData.deleteProduto(id);
 }