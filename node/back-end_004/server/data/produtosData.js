const database = require('../infra/conection');

//C
exports.insertProduto = function (descricao, preco, tipo) {
   database.query("INSERT INTO produto (descricao, preco, tipo_produto) VALUES ($1 , $2, $3)",[descricao,preco, tipo])
}
//R
exports.getProdutosById = function(id){
  return database.query("SELECT * FROM produto WHERE  id = $1", [id])
}
//U
exports.updateDescription = function (id, description) {
   database.none("UPDATE produto SET descricao = $1 WHERE id = $2", [description, id]);
}
//D
exports.deleteProduto = function(id){
}