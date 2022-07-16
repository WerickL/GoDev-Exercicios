//o axios é um cliente http (como o postman ou o navegador)
const axios = require('axios')

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
test.only('inserir produto e obter o produto inserido', async function(){
  
  axios({
    method: 'post',
    url: "http://localhost:8080/produtos",
    data: {
      descricao:'hoje',
      preco:'R$20,00',
      tipo:'tipo sei la'
    }
  })

  const response = await  axios(
    {
    url:'http://localhost:8080/produtos/74',
    method: 'get'
    }
  )
  const resposta = response.data;
  expect(resposta[0].descricao).toBe('hoje')
 
})