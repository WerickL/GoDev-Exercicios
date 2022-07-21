//o axios é um cliente http (como o postman ou o navegador)
const axios = require('axios')
const dataBase = require('../data/produtosData')

//função assincrona pq a requisição pode demorar um pouco
test('Verificar se a comunicação foi bem sucedida', async function(){
    const response = await axios(
      {
      url:'http://localhost:8080/produtos/7',
      method: 'get'
      }
    );
    const status = response.status;
    expect(status).toBe(200);
});

//test.only - unico executado
test.only ('inserir produto e obter o produto inserido', async function(){
  
  const resposta = await axios({
    method: 'post',
    url: "http://localhost:8080/produtos",
    data: {
      descricao:'hoje',
      preco:'R$20,00',
      tipo:'tipo sei la'
    }
  }).then(function(response){
    return response.data
  })

  expect(resposta.descricao).toBe('hoje')
  expect(resposta.id).toBe(12)

})
test ('Deve apagar um registro no banco de dados a partir de um id', async   function(){
  const resposta = await axios({
    method: "delete",
    url: "http://localhost:8080/produtos/112",
}).then(function(response){
  return response.data;
})
  console.log(resposta);
  expect(resposta.id).toBe(112)
});


  afterAll(function(){
     dataBase.finishConection();
  })