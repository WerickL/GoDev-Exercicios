const database = require('../infra/conection');

//C
exports.insertProduto =   function (descricao, preco, tipo) {
   console.log(preco);
   return database.one(
   "INSERT INTO produto (id,descricao, preco, tipo_produto) VALUES (12, $1 , $2, $3) returning *",
   [descricao,preco, tipo]);
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
   return database.oneOrNone("DELETE * from produto where produto.id = $1 returning *", id)
}

exports.finishConection = function(){
   database.$pool.end();
}