
CREATE TABLE produto (
  id serial primary key,
  descricao text not null,
  preco money not null,
  tipo_produto varchar(20) not null
);
