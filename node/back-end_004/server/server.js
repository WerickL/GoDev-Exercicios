const express = require('express');
const server = express();
const port = 8080;

//importa o router.get que o servidor vai usar
server.use(express.json())
server.use('/', require('./router/produtosRoute'))

server.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})