const express = require('express')
const router = express.Router();
const produtoService = require('../service/produtosServices')

router.get('/produtos/:id', async function(req, res) {
  let produtoId = req.params.id;
  let produtosJson = await produtoService.getProdutosById(produtoId);
  res.json(produtosJson)
})
router.put('/produtos:id/:description', async function(req, res){
  let produtoId = req.params.id;
  let produtoDescription = req.params.description;
  produtoService.updateDescription(produtoId, produtoDescription);
})
//exporta o router como get pra ser usado em outros locais

module.exports = router;