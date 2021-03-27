    SELECT aluno.*
      FROM oferta
      JOIN disciplina
        ON oferta.disciplina = disciplina.id
      JOIN matricula
        ON oferta.id = matricula.oferta
      JOIN aluno
        ON matricula.aluno = aluno.id1
         , (    SELECT aluno
                     , count(disciplina) AS cursadas
                  FROM oferta
                  JOIN matricula
                    ON oferta.id = matricula.oferta 
           ) AS cadeiras_cursadas
         , (    SELECT aluno
                     , count(distinct disciplina) AS cursadas
                  FROM oferta
                  JOIN matricula
                    ON oferta.id = matricula.oferta 
           ) AS cadeiras_diferentes
     WHERE aluno.id = cadeiras_cursadas.aluno
       AND aluno.id = cadeiras_diferentes.aluno
       AND cadeiras_cursadas.cursadas = cadeiras_diferentes.cursadas
