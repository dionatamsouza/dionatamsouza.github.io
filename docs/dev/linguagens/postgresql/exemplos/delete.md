# Linguagem PostgreSQL

## Exemplos de código

###### DELETE com subquery

```
    DELETE
      FROM esquema.tabela_del
     USING ( SELECT codigo
                  , descricao
                  , tipo
               FROM tabela2
              WHERE tipo = 'A'
           ) AS meuAlias
     WHERE tabela_del.codigo = meuAlias.codigo ;
```


[Voltar](./)








