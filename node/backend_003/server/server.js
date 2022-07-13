const express = require('express');
const server = express();
const port = 8080;

//importa o router.get que o servidor vai usar
server.use('/', require('./route/produtosRoute'))

server.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})