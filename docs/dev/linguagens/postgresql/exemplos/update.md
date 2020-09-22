# Linguagem PostgreSQL

## Exemplos de código



###### UPDATE

```
    UPDATE esquema.tabela
       SET campo1 = 100
         , campo2 = 'Alterado'
     WHERE campo1 IN ( 200, 201 );
```



###### UPDATE com subquery

```
    UPDATE esquema.tabela_destino
       SET campo1 = 100
      FROM ( SELECT 100 AS campo1
                  , campo2
               FROM esquema.tabela_origem
              WHERE campo1 IN ( 200, 201 )
           ) AS meuAlias
     WHERE tabela_destino.campo1 = meuAlias.campo1 ;
```




[Voltar](./)
