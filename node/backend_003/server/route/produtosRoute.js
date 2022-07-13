const express = require('express')
const router = express.Router();
const produtoService = require('../service/produtosServices')

router.get('/produtos', async function(req, res) {
  let produtosJson = await produtoService.getProdutos();
  res.json(produtosJson)
})

//exporta o router como get pra ser usado em outros locais

module.exports = router;