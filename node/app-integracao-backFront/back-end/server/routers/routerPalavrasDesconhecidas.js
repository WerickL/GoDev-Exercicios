const { json } = require('express');
const express = require('express');
const router = express.Router();
const servicos = require('../services/servicespalavrasIngles.js')
router.post('/new-word', function(req, res){
  servicos.inserirPalavra(req.body)
  res.end()
})
router.get('/all-words', async function(req, res){
  let dados = await servicos.obterPalavras()
  console.log(dados);
  res.json(dados)
})
module.exports = router