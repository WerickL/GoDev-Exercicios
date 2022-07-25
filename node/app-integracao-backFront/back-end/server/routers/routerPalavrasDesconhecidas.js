const express = require('express');
const router = express.Router();
const servicos = require('../services/servicespalavrasIngles.js')
router.post('/new-word', function(req, res){
  console.log(req.body);
  servicos.inserirPalavra(req.body)
  res.end()
})
module.exports = router