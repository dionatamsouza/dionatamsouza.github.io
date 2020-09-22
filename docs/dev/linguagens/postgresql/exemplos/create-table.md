
###### CREATE TABLE

```
        -- EXEMPLO DE CREATE TABLE
    CREATE TABLE pessoal.assentamento_evento_automatico (
        
        -- Define os campos da tabela
        cod_assentamento   integer,
        cod_evento         integer, 
        timestamp          timestamp  DEFAULT now(),
        
        -- Define a chave primaria
        CONSTRAINT pk_assentamento_evento_automatico
            PRIMARY KEY ( cod_assentamento, cod_evento, timestamp ),
        
        -- Define as chaves unicas
        CONSTRAINT uk_assentamento_evento_automatico_1
            UNIQUE ( cod_evento ),
        
        -- Define as chaves estrangeiras
        CONSTRAINT fk_assentamento_evento_automatico_1
            FOREIGN KEY ( cod_assentamento, timestamp )
            REFERENCES pessoal.assentamento  ( cod_assentamento, timestamp ),
        
        CONSTRAINT fk_assentamento_evento_automatico_2
            FOREIGN KEY ( cod_evento )
            REFERENCES folhapagamento.evento ( cod_evento )
        
    ) ;
```

###### CREATE TABLE a partir de um SELECT

```
        -- CREATE TABLE COM SELECT
    CREATE TABLE migracao_tmp.aux_ajuste_salario_historico_matriculas AS

    SELECT NULL :: INTEGER AS cod_contrato
         , NULL :: INTEGER AS matricula_referencia_sam30
     LIMIT 0 ; -- limit 0 carrega somente estrutura, sem dados.
```

###### Intervalo
```
        -- Criar uma tabela para utilidade, contendo todos os dias em um intervalo
    SELECT to_date('01/02/2015','dd/mm/yyyy') + serie.salto AS dia
      FROM generate_series ( 0, to_date('28/02/2015','dd/mm/yyyy') - to_date('01/02/2015','dd/mm/yyyy') , 1 ) AS serie(salto) ;
```
