# Linguagem PostgreSQL

## Exemplos de código

###### Conversões de dados

```
        -- VERIFICA O TIPO DE DADO EM UMA QUERY
    SELECT pg_typeof( 1 :: INTEGER ) ;
    
    
        -- Numero de dias em um INTERVAL para INTEGER
    SELECT ( to_date('1989-09-23', 'yyyy-mm-dd') - to_date('1990-01-01', 'yyyy-mm-dd') ) :: INTEGER ;


        -- ANO (Date) para Idade (Integer)
    SELECT extract( year FROM age( to_date('10/07/1990', 'dd/mm/yyyy' ) ) ) AS idade ;


        -- Primeiro nome de pessoas 
    SELECT split_part( 'dionatan pinto de souza', ' ', 1 ) ;


        -- Ultimo nome de pessoas
    SELECT split_part( 'dionatan pinto de souza', ' ', array_length(string_to_array('dionatan pinto de souza',' '),1) ) ;


        -- NUMERIC para STRING
        -- L - Símbolo da moeda   (utiliza o idioma)
        -- G - Separador de grupo (utiliza o idioma)
        -- D - Ponto decimal      (utiliza o idioma)
        -- 9 - Valor com o número especificado de dígitos
        -- 0 - Valor com o número especificado (força o número na saída, preenchendo com zeros)
    SELECT to_char( tab.numero ,        'L999G999G999G990D00' ) AS exemplo1
         , to_char( tab.numero ,                      '90D00' ) AS exemplo2
         , to_char( tab.numero ,           'L999999999990D00' ) AS exemplo3
         , to_char( tab.numero ,            '999999999990D00' ) AS exemplo4
         , to_char( tab.numero , '9G9G9G9G9G9G9G9G9G9G9G0D00' ) AS exemplo5
         , to_char( tab.numero , '99999999999999999999999999' ) AS exemplo6
         , tab.numero :: TEXT
      FROM ( VALUES (    0.01 :: NUMERIC(15,2) )
                  , (    0.5  :: NUMERIC(15,2) )
                  , ( 1200.99 :: NUMERIC(15,2) )
           ) AS tab ( numero ) ;


        -- Trabalhando com BITS (binario), INTEGER e CHAR
    SELECT b'11' :: BIT(2)  :: INTEGER             AS bit_to_int
         , b'11' :: BIT(2)  :: CHAR(2)             AS bit_to_char
         ,   3   :: INTEGER :: BIT(2)              AS int_to_bit
         ,   3   :: INTEGER :: BIT(2) :: CHAR(2)   AS int_to_char
         , b'11' :: CHAR(2) :: BIT(2) :: INTEGER   AS char_to_int
         , b'11' :: CHAR(2) :: BIT(2)              AS char_to_bit
         , b'10' AS binario
         , x'F0' AS hexadecimal ;
          
    SELECT 2147483647 :: INTEGER :: BIT(32) :: CHAR(32) :: BIT(32) :: INTEGER   AS conversao ;


        -- TRUNCAR DATA
    SELECT date_trunc('hour', now()::timestamp ) ;


        -- INTEGER para HEXADECIMAL EM VARCHAR
    SELECT to_hex( 16 :: INTEGER ) :: VARCHAR
    SELECT to_hex( x'FF' :: INTEGER ) :: VARCHAR ;

    
    
    
        -- VARCHAR para TIME
    SELECT '12:00:00' :: TIME AS horas ;
    
    
        -- OUTRAS CONVERSOES
    SELECT '1' :: BIT(32) :: INTEGER :: BIT(32) :: VARCHAR ;
    SELECT '1' :: BIT(64) :: BIGINT  :: BIT(64) :: VARCHAR ;
    
    
        -- OUTROS TRATAMENTOS DE TEXTO
    SELECT TRIM (  LEADING '0' FROM '0009100' );
    SELECT TRIM ( TRAILING '0' FROM '0009100' );
    SELECT TRIM (     BOTH '0' FROM '0009100' );
    SELECT LPAD ( '123' , 5, '0' );
    SELECT RPAD ( '123' , 5, '0' );
          
    SELECT regexp_replace( 'http://www.google.com:9999/indice/teste', 'http://[^:\s]+:9999(\S+)', 'http://example2.com\1', 'g' ) ;
    SELECT trim(regexp_replace( '     Dionatan    Pinto    de    Souza  ', '\s*\s', ' ', 'g' )) ;
    SELECT regexp_replace( 'CPF 014.211.330-16' , '[^0-9]', '', 'gi' );

```


[Voltar](./)
