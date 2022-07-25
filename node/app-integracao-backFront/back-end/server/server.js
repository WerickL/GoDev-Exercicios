const express = require('express');
const app = express();
const port = 8080;
app.use(express.json())
app.use('/' ,require('./routers/routerPalavrasDesconhecidas'))
app.listen(port, ()=>console.log(`servidor rodando na porta ${port}`))