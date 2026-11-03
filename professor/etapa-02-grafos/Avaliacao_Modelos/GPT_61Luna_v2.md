# Avaliação dos projetos — Etapa 2: Teoria dos Grafos e Roteamento

A avaliação considera os nove repositórios indicados no arquivo JSON e os conteúdos disponíveis nas respectivas pastas `etapa-02-grafos`.&#x20;

Repos_ECA08_2026-2.json



Utilizei como referência os entregáveis das Aulas 11 a 18: modelagem de grafos dirigidos e ponderados, matrizes de adjacência e incidência, BFS/DFS, Dijkstra, simulação de vazamentos e falhas, problemas eulerianos, problemas hamiltonianos e logística.&#x20;

Enunciado_Etapa_2.md



## 1. Resumo das avaliações

| Grupo                                                                                                                                               | Nota       | Síntese                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [Grupo 1](https://github.com/LuizFellipiFreire25/Projeto-ECAA08/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                                   | média      | Boa cobertura dos algoritmos, mas há limitações na simulação de falhas e na validação euleriana.                                        |
| [Grupo 2](https://github.com/poggerssLL/Automatica---Grupo-2/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                                      | alta       | Projeto consistente, documentação aprofundada e validações matemáticas e computacionais.                                                |
| [Grupo 3](https://github.com/GuiCastro7/Grupo-3---ECAA08/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                                          | média-alta | Boa integração entre os algoritmos e a planta, com destaque para a simulação de vazamentos.                                             |
| [Grupo 4](https://github.com/felipeconradovidal/SCADA-Core_Automatica_GRUPO4/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                      | alta       | Excelente abrangência técnica, modelagem consistente e recursos adicionais de análise de redes.                                         |
| [Grupo 5](https://github.com/igorfantucci/Aula-Automatica---GRUPO-5/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                               | alta       | Implementações bem integradas, testes de contingência e certificação exata de uma instância do TSP.                                     |
| [Grupo 6](https://github.com/marinazakimi/ECAA08--Grupo-06/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                                        | média-alta | Trabalho matematicamente cuidadoso, com boas hipóteses e distinções conceituais. Adaptou o problema para drones.                        |
| [Grupo 7](https://github.com/AnnaGavinho/Grupo-7-ECAA08/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                                           | média-alta | Documentação teórica extensa e boa integração com a fábrica de paçoca, mas há pontos a melhorar nas validações.                         |
| [Grupo 8](https://github.com/d005810/ECAA08-Manufatura-Flexivel/tree/main/etapa-02-grafos?utm_source=chatgpt.com)                                   | média-alta | Boa implementação dos algoritmos, com destaque para o TSP, mas a simulação da Aula 15 não corresponde exatamente ao vazamento proposto. |
| [Grupo 9](https://github.com/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/tree/main/etapa-02-grafos?utm_source=chatgpt.com) | média-alta | Contextualização industrial muito adequada, com detecção de vazamentos e análise de redundância.                                        |

## 2. Avaliação detalhada por grupo

### Grupo 1 — Projeto-ECAA08

média

Pontos positivos

- Apresenta uma sequência completa de atividades entre as Aulas 11 e 18.
- Implementa grafos dirigidos e ponderados, com matrizes de adjacência e incidência.
- Utiliza corretamente BFS para encontrar caminhos com menor número de arestas e DFS para enumerar alternativas.
- Implementa Dijkstra com fila de prioridades e demonstra reencaminhamento quando há alterações nos custos das rotas.
- Apresenta uma aplicação logística com separação entre fluxo de materiais e circulação de AGVs.

Pontos negativos

- Na Aula 15, a simulação trata principalmente de bloqueio de corredores de circulação do AGV. O enunciado solicita uma simulação de vazamento na malha do processo, com isolamento do trecho afetado e desvio automático do fluido. Existe proximidade conceitual, mas não é a mesma situação operacional.
- Na Aula 16, a verificação de Euler considera a paridade dos graus, mas não verifica adequadamente a conectividade do grafo. Ter todos os graus pares, isoladamente, não garante a existência de um circuito euleriano.
- Na Aula 17, utiliza heurísticas para o problema do caixeiro-viajante, mas não apresenta uma comparação exata que certifique a solução como ótimo global.
- A implementação poderia apresentar mais testes de situações excepcionais, principalmente grafos desconectados e destinos sem caminho disponível.

Parecer: o grupo demonstra compreensão dos principais algoritmos e consegue aplicá-los em um cenário industrial. Entretanto, algumas atividades estão mais próximas de demonstrações didáticas dos algoritmos do que de uma implementação completa dos problemas operacionais propostos.

### Grupo 2 — Automatica — Grupo 2

alta

Pontos positivos

- Apresenta documentação extensa e bem organizada, com explicações matemáticas associadas às implementações.
- Desenvolve uma modelagem coerente de uma máquina pneumática de envase de água em copos.
- Trabalha com matrizes de adjacência, incidência, custos e balanços de fluxo.
- Implementa BFS, DFS e Dijkstra com aplicações em caminhos alternativos e contingências.
- A Aula 15 apresenta uma modelagem interessante de grafos dinâmicos, isolando trechos por atribuição de peso infinito e recalculando as rotas.
- A Aula 16 é um dos destaques: utiliza Hierholzer e aprofunda o Problema do Carteiro Chinês, incluindo a análise de vértices de grau ímpar e a necessidade de duplicação de percursos.
- A Aula 18 apresenta separação entre fluxo de materiais e circulação de veículos, evitando misturar redes com significados operacionais diferentes.
- Inclui verificações automatizadas e explicações sobre as hipóteses adotadas.

Pontos negativos

- A solução do TSP utiliza heurísticas como Vizinho Mais Próximo e 2-Opt. Seria interessante apresentar também uma solução exata para uma instância pequena, permitindo comparar o resultado heurístico com o ótimo global.
- Algumas partes da modelagem hidráulica e pneumática são simplificações didáticas. Os resultados não devem ser interpretados como validação física de vazões, pressões ou tempos reais.
- A documentação apresenta conceitos de funcionamento em tempo real e malha fechada, mas a implementação avaliada é uma simulação computacional, não uma integração física comprovada com CLP ou sensores.

Parecer: trabalho muito consistente. O grupo demonstra domínio dos conceitos de grafos e consegue ir além da implementação básica, explorando propriedades matemáticas e questões de engenharia relacionadas à confiabilidade da rede.

### Grupo 3 — Grupo 3 — ECAA08

média-alta

Pontos positivos

- Apresenta uma sequência de entregáveis que cobre as Aulas 11 a 18.
- Desenvolve uma modelagem de uma linha automatizada de envase de bebidas.
- Implementa matrizes de incidência e balanço de fluxo.
- Utiliza BFS e DFS para identificar caminhos alternativos, inclusive em situações de falha de bombas.
- Apresenta uma implementação de Dijkstra para determinar a melhor rota de transferência.
- A Aula 15 é um destaque: simula um vazamento em um trecho de transferência e demonstra o redirecionamento para uma rota alternativa.
- A simulação também considera uma situação de falha dupla, na qual a rota deixa de estar disponível.
- A Aula 18 complementa o projeto com grafos distintos para fluxo de materiais e circulação de veículos.

Pontos negativos

- A validação da solução euleriana poderia ser mais robusta, incluindo verificações explícitas de conectividade e confirmação de que todas as arestas foram percorridas.
- A Aula 17 poderia apresentar uma comparação mais clara com uma solução exata do TSP, de modo a demonstrar a diferença entre ótimo local e ótimo global.
- Algumas evidências de execução e resultados dos notebooks não estão tão completas quanto nos trabalhos de maior destaque.
- Há inconsistências pontuais nos caminhos utilizados em links de execução dos notebooks, o que pode dificultar a navegação pelo material.

Parecer: boa aplicação dos conceitos à planta industrial. A simulação de vazamentos demonstra uma compreensão adequada da relação entre alteração da topologia do grafo e reencaminhamento de fluxo. O trabalho poderia evoluir com validações matemáticas mais completas.

### Grupo 4 — SCADA-Core Automática — Grupo 4

alta

Pontos positivos

- Apresenta uma modelagem industrial detalhada para uma linha de seleção, pesagem e classificação óptica de grãos.
- Trabalha com identificação de equipamentos, válvulas e conexões físicas.
- Implementa matrizes de adjacência e incidência e utiliza balanço de fluxo para verificar a consistência da rede.
- Aplica BFS, DFS e Dijkstra em diferentes situações de roteamento.
- A Aula 15 utiliza análise de balanço para detectar inconsistências decorrentes de falhas na rede.
- A Aula 17 apresenta recursos avançados para o TSP, incluindo:
  - Auditoria da matriz de distâncias;
  - Verificação da desigualdade triangular;
  - Fechamento métrico por Floyd-Warshall;
  - Vizinho Mais Próximo;
  - 2-Opt;
  - Busca exata e programação dinâmica.
- A Aula 18 apresenta modelagem multicamada e utiliza ordenação topológica para validar o fluxo de materiais.
- O projeto demonstra preocupação com redundância e identificação de trechos críticos.

Pontos negativos

- A Aula 16 apresenta uma fragilidade matemática importante: a verificação do circuito euleriano se concentra na paridade dos graus, sem validar de forma suficiente a conectividade do grafo nem confirmar que todas as arestas foram efetivamente percorridas.
- Na Aula 14, algumas situações de bloqueio demonstram ausência de rota para o destino original, mas poderiam explorar mais alternativas de contingência para o mesmo destino.
- A modelagem é uma simulação computacional. Não há evidência suficiente para afirmar que os tempos de decisão apresentados representem o comportamento de um sistema industrial físico.

Parecer: projeto de alto nível técnico, com boa integração entre matemática discreta, algoritmos e engenharia de automação. O destaque é a Aula 17, que apresenta um tratamento mais aprofundado do TSP. Recomendo corrigir a validação de Euler para que o código reflita integralmente as condições matemáticas do problema.

### Grupo 5 — Aula Automática — Grupo 5

alta

Pontos positivos

- Apresenta uma aplicação bem contextualizada em uma planta de produção de biodiesel.
- Os algoritmos são aplicados a uma rede de equipamentos e tubulações com identificação de tanques, bombas, válvulas e reator.
- Implementa BFS e DFS para encontrar alternativas de transferência.
- Na Aula 14, Dijkstra é utilizado para encontrar a melhor rota e demonstrar a contingência quando uma bomba fica indisponível.
- A Aula 15 é muito bem desenvolvida:
  - Simula vazamento em uma tubulação;
  - Isola o trecho comprometido;
  - Calcula uma nova rota por Dijkstra;
  - Considera diferentes origens de alimentação;
  - Simula falhas simultâneas;
  - Utiliza asserções para verificar os caminhos e custos esperados.
- A Aula 16 implementa Hierholzer e também explora o Problema do Carteiro Chinês, com alteração da paridade dos vértices e duplicação de uma aresta.
- A Aula 17 é um dos principais destaques do conjunto: utiliza Vizinho Mais Próximo, 2-Opt, árvore geradora mínima e força bruta para verificar o ótimo global de uma instância pequena.
- Na Aula 18, apresenta uma modelagem logística com fluxo de materiais e circulação interna de veículos em redes separadas.

Pontos negativos

- A Aula 16 poderia validar explicitamente a conectividade do grafo antes de afirmar que ele é euleriano. A verificação de graus pares, isoladamente, não é suficiente.
- A Aula 17 poderia explorar melhor o comportamento do algoritmo quando a quantidade de pontos cresce, demonstrando a limitação computacional da busca exata.
- Os tempos de processamento apresentados são tempos de execução do algoritmo no ambiente computacional, não tempos totais de resposta do processo físico.

Parecer: um dos trabalhos mais completos da turma. O grupo demonstra boa compreensão matemática e capacidade de construir testes objetivos para verificar as soluções. A validação do TSP por força bruta é especialmente positiva porque demonstra preocupação em diferenciar uma solução heurística de uma solução comprovadamente ótima.

### Grupo 6 — ECAA08 — Grupo 06

média-alta

Pontos positivos

- Apresenta uma documentação conceitualmente cuidadosa e bastante transparente sobre as hipóteses adotadas.
- A modelagem do processo utiliza um drone agrícola de pulverização e uma estação de solo.
- Na Aula 11, diferencia corretamente equipamentos, sensores e conexões físicas.
- Na Aula 12, apresenta uma formulação interessante do balanço de volume, incluindo a variação de armazenamento no reservatório embarcado.
- A documentação distingue corretamente a matriz de incidência da matriz de adjacência e explora propriedades de posto e dimensão do núcleo.
- Na Aula 15, demonstra maturidade ao reconhecer que uma anomalia de pressão e vazão não permite necessariamente localizar o vazamento. Também diferencia recálculo de rota, confirmação física do isolamento e autorização para religar a bomba.
- Na Aula 16, utiliza um multigrafo não dirigido com identificadores próprios para as arestas, o que permite representar corretamente conexões paralelas.
- A Aula 17 diferencia claramente TSP, circuito euleriano e cobertura de área. Também explicita limitações do modelo de distância e condições de operação do drone.
- A Aula 18 mantém separadas as redes de materiais e de circulação terrestre, evitando misturar deslocamentos fisicamente incompatíveis.

Pontos negativos

- O grupo adaptou o problema de roteamento de AGV para roteamento de drone. A adaptação é justificável e bem documentada, mas se afasta do veículo e da aplicação originalmente indicados no enunciado.
- O modelo de TSP utiliza distâncias hipotéticas entre pontos e não representa obstáculos, vento, restrições de trajetória ou cobertura efetiva dos talhões.
- Alguns arquivos das Aulas 17 e 18 apresentam espaços iniciais nos nomes, o que prejudica a organização e pode dificultar a localização dos notebooks.
- A documentação é bastante forte; seria interessante apresentar uma demonstração ainda mais integrada do conjunto como um roteador operacional.

Parecer: trabalho com excelente cuidado conceitual. Destaco especialmente a Aula 15, pela distinção entre detecção, isolamento e reconfiguração, e a Aula 12, pelo tratamento do balanço com armazenamento. A adaptação para drone é aceitável como escolha de projeto, embora não corresponda integralmente ao cenário de AGV proposto.

### Grupo 7 — Grupo 7 — ECAA08

média-alta

Pontos positivos

- Apresenta uma documentação teórica extensa e uma aplicação coerente à linha de produção de paçoca.
- Implementa grafos dirigidos e ponderados para representar o fluxo de materiais.
- As Aulas 12 e 13 trabalham matrizes de incidência, balanços e buscas BFS/DFS.
- Na Aula 14, Dijkstra demonstra a escolha de caminhos alternativos quando um moinho fica indisponível.
- A Aula 15 apresenta uma discussão aprofundada sobre grafos dinâmicos, pontes, vértices de articulação e resiliência da rede.
- A Aula 16 apresenta uma explicação matemática detalhada do Teorema de Euler e do algoritmo de Hierholzer.
- Na Aula 17, o grupo demonstra conhecimento sobre a complexidade do TSP e explica corretamente que 2-Opt encontra um ótimo local, sem garantir necessariamente o ótimo global.
- A Aula 18 apresenta redes multicamada, com separação entre fluxo de materiais e circulação de veículos.
- O memorial descritivo auxiliar da planta contribui para contextualizar os grafos em uma infraestrutura industrial.

Pontos negativos

- A Aula 16 possui uma fragilidade na implementação: a função de verificação considera a paridade dos graus, mas não valida a conectividade da malha. O próprio documento teórico explica que a conectividade também é necessária, portanto existe uma diferença entre a teoria apresentada e a verificação implementada.
- A rotina de Hierholzer poderia verificar se todas as arestas foram percorridas antes de retornar o circuito.
- A documentação da Aula 15 apresenta conclusões sobre desempenho e resposta temporal que deveriam estar acompanhadas de resultados experimentais claramente reproduzíveis.
- Alguns notebooks não possuem resultados de execução registrados, o que reduz a evidência disponível para confirmar os cenários descritos.

Parecer: trabalho com boa profundidade teórica e ótima contextualização. A principal oportunidade de melhoria é aproximar a implementação computacional do rigor matemático apresentado na documentação. Não basta explicar corretamente uma condição matemática: o algoritmo também precisa verificá-la.

### Grupo 8 — ECAA08 Manufatura Flexível

média-alta

Pontos positivos

- Apresenta uma aplicação interessante em uma célula de manufatura flexível, utilizando esteiras e postos de triagem.
- Implementa grafos dirigidos e ponderados e apresenta as matrizes de adjacência e incidência.
- A Aula 13 utiliza BFS para encontrar caminhos com menor quantidade de etapas e DFS para identificar alternativas.
- A Aula 14 implementa Dijkstra com fila de prioridades e apresenta resultados de roteamento para os postos de triagem.
- A Aula 15 demonstra um reencaminhamento após bloqueio de uma esteira, utilizando uma rota de desvio.
- A Aula 17 apresenta uma implementação bastante interessante do TSP, incluindo força bruta para comparar a solução heurística com o ótimo global da instância.
- A Aula 18 complementa o projeto com redes multicamada para fluxo de materiais e circulação de veículos.

Pontos negativos

- A Aula 15 simula um travamento mecânico de esteira (jamming), enquanto o enunciado solicita especificamente uma simulação de vazamento na malha de processo. A lógica de reencaminhamento está correta como demonstração de falha, mas o cenário não corresponde integralmente ao problema proposto.
- A Aula 16 apresenta uma implementação de Hierholzer que não verifica adequadamente a conectividade e a cobertura de todas as arestas. O exemplo executado é válido, mas o algoritmo não está suficientemente protegido contra entradas inválidas.
- A aplicação poderia explorar mais a integração entre o roteamento de materiais e as condições de segurança da operação.

Parecer: projeto bem implementado, com destaque para a Aula 17. O grupo demonstra domínio de algoritmos de busca e otimização. A principal perda de aderência ao enunciado está na simulação da Aula 15, que deveria representar um vazamento ou falha na malha de processo, e não apenas o bloqueio de uma esteira.

### Grupo 9 — Estação de Reabastecimento de Hidrogênio

média-alta

Pontos positivos

- Excelente contextualização industrial, com uma estação de reabastecimento de hidrogênio.
- A modelagem de tubulações, bancos de armazenamento, compressores, válvulas e dispensador é coerente com o objetivo da disciplina.
- A Aula 12 utiliza matriz de incidência para representar os fluxos e apresenta um cenário de detecção de vazamento por desequilíbrio de vazão.
- A Aula 13 demonstra BFS e DFS com alternativas entre bancos de pressão.
- A Aula 14 utiliza Dijkstra para comparar rotas entre os diferentes estágios de pressão.
- A Aula 15 é um destaque: apresenta simulação de vazamentos, isolamento de trechos e cálculo de novas rotas, além de análise de pontes para identificar pontos críticos.
- A Aula 16 utiliza Hierholzer para construir uma rota de inspeção das tubulações.
- A Aula 17 implementa o problema do caixeiro-viajante com Vizinho Mais Próximo e 2-Opt.
- A Aula 18 apresenta a separação entre fluxo de materiais/utilidades e circulação interna de veículos.

Pontos negativos

- A Aula 15 apresenta tempos de decisão como `0.0XXX` em seus resultados, indicando que esse valor não está registrado como uma medição efetiva no resultado apresentado.
- Na Aula 14, os pesos utilizados por Dijkstra são principalmente comprimentos de tubulação. Em uma estação de hidrogênio, as restrições de pressão são fundamentais. O menor caminho geométrico não necessariamente é uma rota operacionalmente válida para qualquer estágio de pressão.
- Na Aula 16, a condição de Euler é verificada principalmente pela paridade dos graus. Seria necessário validar também a conectividade e garantir que todas as tubulações estejam presentes no circuito retornado.
- Na Aula 17, a melhoria por 2-Opt é apresentada como resultado de otimização, mas seria interessante incluir força bruta ou Held-Karp para uma instância pequena, certificando o ótimo global.

Parecer: projeto com boa escolha de aplicação e forte aderência ao tema de roteamento de fluidos. O destaque é a simulação de vazamentos e a análise de trechos críticos. Para avançar, precisa integrar melhor as restrições físicas do hidrogênio à escolha matemática dos caminhos.

## 3. Considerações gerais sobre a turma

Algumas observações aparecem de forma recorrente e merecem atenção na avaliação da Etapa 2.

1\. A condição de existência de circuito euleriano

Em grafos não dirigidos, não basta verificar que todos os vértices têm grau par. Também é necessário que todos os vértices com grau diferente de zero pertençam à mesma componente conexa.

Assim, uma implementação de Hierholzer deve validar previamente essas condições e, após a execução, confirmar que todas as arestas foram percorridas. Esse é um ponto de correção matemática importante nos projetos que apresentam apenas a verificação de paridade.

2\. A diferença entre ótimo local e ótimo global no TSP

O algoritmo 2-Opt é uma boa ferramenta para melhorar uma rota, mas não garante, em geral, a solução globalmente ótima.

Os melhores trabalhos demonstram essa diferença e apresentam uma instância pequena resolvida por força bruta ou programação dinâmica para comparar os resultados.

3\. A simulação de vazamentos deve representar uma falha de processo

Bloquear uma esteira ou um corredor é uma forma válida de testar reconfiguração de grafos. Entretanto, o problema apresentado na Aula 15 solicita um cenário de vazamento na malha de processo.

Uma simulação mais completa deve considerar a identificação da falha, o isolamento do trecho, a atualização da disponibilidade das arestas e o recálculo do caminho. Também é importante distinguir a existência de uma rota alternativa da autorização física para retomar o bombeamento.

4\. O menor caminho precisa respeitar as restrições físicas

Dijkstra encontra o caminho de menor custo definido pelo modelo. Isso não significa que a rota seja necessariamente válida para a operação real.

Os pesos e as restrições devem representar adequadamente a aplicação: distância, tempo, pressão, capacidade, sentido de fluxo ou disponibilidade operacional.

5\. Simulação não é integração física

Os notebooks são boas ferramentas de aprendizagem e validação algorítmica. Entretanto, os tempos de execução apresentados não comprovam, por si só, desempenho em tempo real de uma planta. Isso exigiria considerar sensores, comunicação, processamento, atuação de válvulas e dinâmica do processo.

## 4. Resultado final

Minha avaliação destaca três trabalhos na faixa alta:

- Grupo 2: pela profundidade da documentação, consistência da modelagem e exploração de problemas avançados de grafos.
- Grupo 4: pela abrangência técnica, integração dos algoritmos e tratamento de otimização e logística.
- Grupo 5: pela boa validação de contingências e pela comparação do TSP heurístico com o resultado exato.

Os demais grupos também apresentam trabalhos relevantes, geralmente com boa cobertura das aulas, mas possuem pontos específicos de aderência ao enunciado, validação matemática ou comprovação dos resultados que justificam a faixa média ou média-alta.

Observação sobre o método: esta avaliação foi feita por inspeção dos arquivos, códigos e resultados de execução já registrados nos repositórios. Não executei todos os notebooks novamente em ambientes limpos nem testei integração com equipamentos físicos. Portanto, as notas avaliam a qualidade do material entregue e das evidências disponíveis, não uma certificação de funcionamento em campo.