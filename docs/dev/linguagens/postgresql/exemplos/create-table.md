
###### CREATE TABLE

```
        -- EXEMPLO DE CREATE TABLE
    CREATE TABLE myschema.mynewtable (
        
        -- Define os campos da tabela
        id                integer,
        codigo            varchar(8), 
        id_responsavel    integer,
        timestamp         timestamp  DEFAULT now(),
        
        -- Define a chave primaria
        CONSTRAINT pk_mynewtable
            PRIMARY KEY ( id, timestamp ),
        
        -- Define as chaves unicas
        CONSTRAINT uk_mynewtable_1
            UNIQUE ( codigo, timestamp ),
        
        -- Define as chaves estrangeiras
        CONSTRAINT fk_mynewtable_1
            FOREIGN KEY ( id_responsavel, timestamp )
            REFERENCES pessoal.assentamento  ( id_responsavel, timestamp ),
        
        CONSTRAINT fk_mynewtable_2
            FOREIGN KEY ( cod_evento )
            REFERENCES folhapagamento.evento ( cod_evento )
        
    ) ;
```

###### CREATE TABLE a partir de um SELECT

```
        -- CREATE TABLE COM SELECT
    CREATE TABLE migracao_tmp.aux_ajuste_salario_historico_matriculas AS

    SELECT NULL :: INTEGER       AS id
         , NULL :: VARCHAR(3)    AS codigo
         , NULL :: TEXT          AS descricao
     LIMIT 0 ; -- limit 0 carrega somente estrutura, sem dados.
```

###### Intervalo
```
        -- Criar uma tabela para utilidade, contendo todos os dias em um intervalo
    SELECT to_date('01/02/2015','dd/mm/yyyy') + serie.salto AS dia
      FROM generate_series ( 0, to_date('28/02/2015','dd/mm/yyyy') - to_date('01/02/2015','dd/mm/yyyy') , 1 ) AS serie(salto) ;
```
