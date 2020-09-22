# Linguagem PostgreSQL

## Exemplos de código



###### INSERT de múltiplos VALUES

```
INSERT INTO filmes (codigo, titulo, data_producao, categoria) VALUES
('B6717', 'Tampopo', 110, '1985-02-10', 'Comedia'),
('HG120', 'The Dinner Game', 140, DEFAULT, 'Comedia'); 
```



###### INSERT com resultados de um SELECT

```
    INSERT
      INTO schema.tabela
         ( dado1
         , dado2
         , dado3
         )
    SELECT dado1
         , dado2
         , dado3
      FROM schema.tabela 
     WHERE tabela.codigo = '98765' ;
```

[Voltar](./)

