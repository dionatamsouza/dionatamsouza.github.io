# Linguagem PostgreSQL

## Exemplos de código



###### SELECT com VALUES

```
    SELECT t.num
         , t.letter
      FROM ( VALUES (1, 'one')
                  , (2, 'two')
                  , (3, 'three')
           ) AS t (num,letter);
```



###### Uso do DISTINCT ON

```
    SELECT DISTINCT ON ( codigo )
           tabela1.*
         , tabela2.campo_aux
      FROM esquema.tabela1
      JOIN esquema.tabela2
        ON tabela1.codigo = tabela2.codigo
  ORDER BY tabela1.codigo ASC
         , tabela1.horario_historico DESC ;
```



###### Uso de WITH alias

```
WITH alias_1 AS (
    SELECT codigo
         , nome
         , profissao
         , endereco
      FROM esquema.tabela1
)
, alias_2 AS (
    SELECT codigo
         , nome
         , profissao
         , endereco
      FROM esquema.tabela2
)

    SELECT alias_1.*
      FROM alias_1
     UNION
    SELECT alias_2.*
      FROM alias_2 ;
```

###### SELECT para saida (modo genérico)

```
    SELECT '(' 
        || coalesce(             cod_uf :: TEXT , 'null' ) || ','
        || coalesce( '''' || uf :: TEXT || '''' , 'null' ) 
        || '),'
      FROM ( values(1,'abc') , (2, 'xyz'), (null,'nulo1'), (3,null) ) as dados (cod_uf, uf) ;
```


* * *


###### Constantes e Variáveis do Banco

```
    SELECT current_user                     AS "Usuario"               -- Usuario corrente
    SELECT user                             AS "Usuario"               -- Equivalente a current_user
    SELECT current_database()               AS "Database"              -- Banco de dados corrente
    SELECT now() :: TIMESTAMP               AS "Timestamp (transacao)" -- Horario da query
    SELECT clock_timestamp() :: TIMESTAMP   AS "Timestamp (atual)"     -- Horario atual
    SELECT timeofday() :: TIMESTAMP         AS "Timestamp (atual)"     -- Horario atual (versao antiga, string cast para timestamp)
    SELECT version()                        AS "Versao"                -- Versao do banco de dados corrente
```



[Voltar](./)
