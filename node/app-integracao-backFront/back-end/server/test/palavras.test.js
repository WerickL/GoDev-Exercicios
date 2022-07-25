const axios = require('axios');

test('inserir uma palavra na base de dados', function(){
  axios({
    url:"http://localhost:8080/new-word",
    method:'post',
    data:{
      palavra: 'palavra de teste',
      frequencia: 3,
    }
  })
})