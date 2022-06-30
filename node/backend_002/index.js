const express = require('express')
const app = express()
console.log(app);
const port = 80

app.get("/",(req, res)=>{
  res.send("Hello World!")
})
app.listen(port, ()=>{
  console.log(`porta ${port}`);
})