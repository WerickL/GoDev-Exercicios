CREATE TABLE 
    palavras_desconhecidas 
    (id serial primary key,
    palavra text unique,
    frequencia integer NOT NULL );
select * from palavras_desconhecidas;
