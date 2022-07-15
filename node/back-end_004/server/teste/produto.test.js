//o axios é um cliente http (como o postman ou o navegador)
const axios = require('axios')

test('Verificar se a comunicação foi bem sucedida', async function(){

  //resposta ESPERADA do axios
    const response = await axios(
      {
        //nesse endereço com esse tipo de requisição
      url:'http://localhost:8080/produtos/7',
      method: 'get'
      }
    );
    //dados da resposta
    const status = response.status;

    //o esperado deve ser igual à string
    //acho que isso é são métodos do testR$ 20,00
    expect(status).toBe(200);
})
//função assincrona pq a requisição pode demorar um pouco
test('Obter os prdutos do BD', async function(){

  //resposta ESPERADA do axios
    const response = await axios(
      {
        //nesse endereço com esse tipo de requisição
      url:'http://localhost:8080/produtos/7',
      method: 'get'
      }
    );
    //dados da resposta
    const resposta = response.data;

    //o esperado deve ser igual à string
    //acho que isso é são métodos do test
    console.log(resposta);
    expect(resposta[0].id).toBe(7);
})