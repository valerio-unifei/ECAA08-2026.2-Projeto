# Avaliação dos repositórios — Etapa 2: Teoria dos Grafos e Roteamento

A avaliação considera os nove repositórios informados no arquivo JSON e os objetivos das Aulas 11 a 18 do enunciado.&#x20;

Enunciado_Etapa_2.md

Repos_ECA08_2026-2.json



## Critérios utilizados

Considerei quatro dimensões:

1. Completude: presença dos materiais das Aulas 11 a 17, incluindo documentação e notebooks.
2. Correção matemática: coerência dos modelos de grafos, matrizes, algoritmos e condições de aplicação.
3. Implementação e validação: existência de código executável, exemplos, testes e tratamento de bloqueios ou falhas.
4. Integração com o processo: relação entre os modelos matemáticos e a planta industrial escolhida, sem confundir resultados simulados com validação física.

A nota é uma avaliação acadêmica qualitativa, não uma medição automatizada. Considerei principalmente o conteúdo disponível na branch padrão dos repositórios durante a consulta. A ausência de um arquivo no caminho esperado foi tratada como material não localizado, não como prova de que o grupo jamais o produziu.

## Resultado geral

| Grupo | Nota       |
| ----- | ---------- |
| 1     | baixa      |
| 2     | alta       |
| 3     | média-alta |
| 4     | média-alta |
| 5     | média-alta |
| 6     | alta       |
| 7     | média      |
| 8     | baixa      |
| 9     | média-alta |

## Análise por grupo

### Grupo 1 — [SCADA-Core Automática / Visão-AGV](https://github.com/LuizFellipiFreire25/Projeto-ECAA08?utm_source=chatgpt.com)

baixa

Pontos positivos

- O projeto apresenta uma aplicação interessante de AGV com visão computacional, incluindo rastreamento e acompanhamento de operador.
- O README demonstra intenção de integrar a Teoria dos Grafos ao roteamento de fluidos e às rotas do AGV.

Pontos negativos

- Não consegui localizar os arquivos da pasta `etapa-02-grafos` na branch padrão do repositório.
- As buscas por materiais de modelagem, matrizes e Dijkstra também não retornaram arquivos correspondentes.
- Não há evidência verificável dos entregáveis das Aulas 11 a 17.

Avaliação: O contexto de aplicação é interessante, mas a entrega da etapa não pôde ser avaliada tecnicamente. A documentação geral do projeto não substitui os materiais específicos solicitados.

### Grupo 2 — [Automática — Grupo 2](https://github.com/poggerssLL/Automatica---Grupo-2?utm_source=chatgpt.com)

alta

Pontos positivos

- Excelente organização: apresenta os materiais das Aulas 11 a 18, com roteiros Markdown e notebooks correspondentes.
- Boa modelagem da máquina de envase, incluindo grafos dirigidos e ponderados, matrizes de incidência e adjacência.
- Implementa BFS, DFS e Dijkstra, incluindo bloqueios, recálculo de rotas e identificação de situações sem caminho disponível.
- A Aula 16 apresenta Hierholzer e Problema do Carteiro Chinês, considerando conectividade e identificação de arestas.
- A Aula 17 explora o PCV com Vizinho Mais Próximo e 2-Opt.
- Destaca-se a aplicação web com simuladores, diagramas, apresentação didática e recursos interativos.
- Um mérito importante é a transparência: o grupo diferencia claramente simulação acadêmica de operação industrial real. Também documenta testes de código e limites dos modelos.

Pontos negativos

- A simulação de vazamentos da Aula 15 é baseada em injeção manual de falhas e recálculo local; não representa um teste físico de estresse em malha fechada.
- A solução do PCV utiliza heurísticas e não apresenta garantia de ótimo global.
- Os diferentes modelos são mantidos separados em alguns exercícios; portanto, nem todos os resultados demonstram uma única rede industrial integrada.

Avaliação: É uma entrega muito consistente, tanto em conteúdo quanto em apresentação. A combinação de documentação, código, simuladores e preocupação com a validade dos resultados é um diferencial.

### Grupo 3 — [Grupo 3 — SCADA-Core Linha de Envase](https://github.com/GuiCastro7/Grupo-3---ECAA08?utm_source=chatgpt.com)

média-alta

Pontos positivos

- Boa contextualização matemática da linha de envase de bebidas.
- Apresenta os oito conjuntos de materiais das Aulas 11 a 18.
- A modelagem contempla reservatórios, bombas, válvulas, acumuladores e conexões de recirculação.
- A Aula 12 apresenta corretamente a convenção da matriz de incidência, com −1 na origem e +1 no destino, além da relação de balanço matricial.
- A Aula 13 diferencia adequadamente BFS e DFS.
- A Aula 14 apresenta Dijkstra com fila de prioridade e operação de relaxamento.
- A Aula 15 trata bloqueios e recalcula rotas alternativas por Dijkstra.
- A Aula 16 diferencia grafos dirigidos e não dirigidos na inspeção euleriana.
- A aplicação web disponibiliza visualização de matrizes, execução passo a passo de Dijkstra, injeção de falhas e desafios interativos.

Pontos negativos

- Os notebooks das Aulas 14 e 17 estavam sem registro de execução nas versões consultadas.
- Os notebooks inspecionados concentram boa parte do código em uma única célula, dificultando a auditoria e a execução seletiva dos algoritmos.
- A documentação menciona conformidade com normas de segurança industrial, mas a implementação apresentada não comprova certificação ou validação de segurança.
- A simulação de falhas ainda não demonstra a atuação física das válvulas ou a resposta de um sistema industrial real.

Avaliação: O grupo apresenta boa integração entre a teoria dos grafos e a aplicação industrial. A aplicação web é um diferencial, mas a comprovação de execução dos notebooks e a organização dos testes precisam melhorar.

### Grupo 4 — [SCADA-Core Automática — Grupo 4](https://github.com/felipeconradovidal/SCADA-Core_Automatica_GRUPO4?utm_source=chatgpt.com)

média-alta

Pontos positivos

- Boa aplicação da Teoria dos Grafos em uma planta de classificação e seleção de grãos.
- A modelagem das Aulas 11 e 12 apresenta os vértices, arestas, pesos e matrizes de incidência e adjacência.
- A Aula 13 contempla BFS e DFS, incluindo caminhos mínimos em quantidade de arestas e análise topológica.
- A Aula 14 implementa Dijkstra com Min-Heap e reencaminhamento após bloqueios.
- A Aula 15 combina balanço matricial, diagnóstico de falhas e reencaminhamento por Dijkstra.
- A Aula 17 apresenta uma implementação interessante do PCV com Vizinho Mais Próximo e 2-Opt.
- Um ponto forte é a comparação da solução heurística com força bruta e Held-Karp, permitindo verificar o ótimo global para a instância apresentada.
- A Aula 18 amplia a aplicação com grafos logísticos, alcançabilidade, ordenação topológica e análise de arcos críticos.

Pontos negativos

- O verificador de Euler da Aula 16 verifica a paridade dos graus, mas não verifica a conectividade do grafo. Essa condição é insuficiente: um grafo desconexo pode ter todos os vértices com grau par e não possuir um circuito euleriano único que percorra todas as arestas.
- O notebook da Aula 15 não apresenta asserções automatizadas de validação, apesar de executar os cenários.
- A documentação utiliza conceitos de teste de estresse e malha fechada, mas os exemplos apresentados ainda representam simulações computacionais.

Avaliação: É uma entrega tecnicamente interessante, principalmente pelo aprofundamento do PCV e pela aplicação dos grafos à logística de classificação. A verificação incompleta da condição de Euler merece correção, pois representa uma falha de rigor matemático.

### Grupo 5 — [Produção de Biodiesel — Grupo 5](https://github.com/igorfantucci/Aula-Automatica---GRUPO-5?utm_source=chatgpt.com)

média-alta

Pontos positivos

- Boa contextualização da teoria dos grafos na planta de produção de biodiesel.
- Os roteiros das Aulas 11 a 18 apresentam aprofundamento teórico e aplicação dos algoritmos ao processo.
- A Aula 12 relaciona a matriz de incidência aos balanços de massa e vazão.
- A Aula 13 apresenta BFS e DFS em uma malha de tubulações.
- A Aula 14 implementa Dijkstra para otimização de rotas hidráulicas.
- A Aula 15 desenvolve uma estrutura de diagnóstico e simulação de vazamentos, com recálculo de caminhos e análise de falhas.
- A Aula 16 explora problemas eulerianos e o Problema do Carteiro Chinês.
- A Aula 17 apresenta uma implementação de TSP com Vizinho Mais Próximo e 2-Opt, incluindo comparação com força bruta e limites inferiores.
- Os notebooks consultados apresentam registros de execução e várias asserções de validação.

Pontos negativos

- Na implementação da Aula 16, o teste de eulerianidade considera apenas a paridade dos graus. Falta verificar a conectividade dos vértices que possuem arestas.
- A duplicação de uma aresta específica para resolver o Problema do Carteiro Chinês não demonstra, por si só, que o emparelhamento escolhido seja sempre o de menor custo.
- Há afirmações fortes relacionadas a desempenho em tempo real e níveis SIL. Os resultados de simulação apresentados não comprovam atendimento a requisitos de segurança industrial ou certificação.
- A documentação é bastante extensa. Em alguns momentos, seria interessante priorizar a demonstração dos resultados e das verificações executadas em relação à exposição teórica.

Avaliação: O grupo apresenta uma entrega robusta, com bom desenvolvimento dos algoritmos e exemplos executáveis. O principal ponto de melhoria é o rigor na validação matemática dos circuitos eulerianos e na distinção entre simulação computacional e garantias de segurança industrial.

### Grupo 6 — [SCADA do Drone Agrícola — Grupo 6](https://github.com/marinazakimi/ECAA08--Grupo-06?utm_source=chatgpt.com)

alta

Pontos positivos

- Excelente organização da pasta `etapa-02-grafos`, com materiais das oito aulas, notebooks, documentação de apoio e relatório de validação.
- Boa continuidade entre a etapa de lógica e a etapa de grafos, preservando as identificações dos sensores, atuadores e equipamentos.
- A modelagem diferencia adequadamente o catálogo físico das tubulações da disponibilidade operacional dos trechos.
- A Aula 12 apresenta matrizes de incidência, adjacência e custos, com verificação de propriedades estruturais.
- A Aula 13 implementa BFS e DFS e diferencia corretamente menor número de arestas de menor custo ponderado.
- A Aula 14 implementa Dijkstra com tratamento de pesos inválidos, vértices bloqueados e ausência de rota.
- A Aula 15 demonstra uma abordagem particularmente cuidadosa: após a falha, calcula uma rota alternativa, mas mantém a bomba bloqueada enquanto a falha não for resolvida.
- A Aula 16 implementa Hierholzer com identificadores individuais de arestas, verifica conectividade e trata corretamente trilhas abertas e circuitos fechados.
- A Aula 17 apresenta Vizinho Mais Próximo e 2-Opt, com comparação por força bruta para verificar o ótimo global da instância.
- O relatório de validação registra a execução de 86 células de código, com 67 instruções `assert`, sem exceções. Também descreve comparação de Dijkstra com Floyd-Warshall em 1.440 consultas.
- O grupo explicita as limitações da simulação e não confunde uma rota alternativa calculada com autorização para retomar a pulverização.

Pontos negativos

- Os comprimentos, trajetórias e parâmetros de voo são hipotéticos, não medições de campo.
- O PCV resolve a ordem de visita aos pontos de serviço, mas não resolve a cobertura de toda a área agrícola por faixas de pulverização.
- A execução dos notebooks foi documentada, mas o relatório informa que não houve validação interativa em Jupyter ou Colab.
- Não há integração com hardware ou execução de comandos reais no drone.

Avaliação: É uma das entregas mais consistentes. Destaco especialmente a preocupação com validação, a separação entre diagnóstico e atuação, o tratamento correto de falhas e a verificação dos resultados matemáticos. O trabalho apresenta maturidade na construção de modelos computacionais e na interpretação de seus limites.

### Grupo 7 — [Linha de Produção de Paçoca — Grupo 7](https://github.com/AnnaGavinho/Grupo-7-ECAA08?utm_source=chatgpt.com)

média

Pontos positivos

- Boa contextualização dos grafos em uma linha de produção agroindustrial.
- Apresenta materiais teóricos das Aulas 11 a 18.
- A Aula 11 modela a movimentação de insumos entre silos, manifold, moinhos, homogeneizador e prensa.
- A Aula 12 apresenta adequadamente a matriz de incidência e a relação de balanço de massa.
- A Aula 13 apresenta BFS e DFS para a análise das redes de transporte.
- A Aula 14 aplica Dijkstra ao roteamento dos insumos.
- A Aula 15 relaciona a ocorrência de falhas com bloqueios de arestas e cálculo de rotas alternativas.
- A Aula 16 apresenta os critérios de eulerianidade para grafos dirigidos e não dirigidos.
- A Aula 17 descreve o PCV aplicado ao AGV de coleta de amostras.
- A Aula 18 complementa a modelagem com a logística de insumos e produtos acabados.

Pontos negativos

- Não localizei o notebook correspondente à Aula 15 nos caminhos esperados, embora o roteiro Markdown esteja disponível.
- Os notebooks inspecionados concentram o código em uma única célula, dificultando a análise independente de cada algoritmo.
- A Aula 17 possui uma implementação de TSP, mas não apresenta asserções de validação no notebook consultado.
- A documentação apresenta os algoritmos, mas há menos evidências de testes sistemáticos e validação cruzada do que nos grupos mais bem avaliados.
- Não foi localizado um README específico da pasta que consolide os materiais e os resultados da etapa.

Avaliação: O grupo demonstra boa compreensão conceitual e contextualização da matemática no processo industrial. Entretanto, a entrega precisa melhorar a organização dos notebooks, a completude dos materiais executáveis e a validação dos algoritmos.

### Grupo 8 — [Célula de Manufatura Flexível](https://github.com/d005810/ECAA08-Manufatura-Flexivel?utm_source=chatgpt.com)

baixa

Pontos positivos

- A aplicação escolhida é adequada à Teoria dos Grafos: célula de manufatura flexível, triagem de peças e roteamento para diferentes destinos.
- O README apresenta uma descrição do fluxo de produção, classificação e armazenamento dos produtos.
- Existe potencial para explorar caminhos, alcançabilidade, roteamento e logística interna.

Pontos negativos

- Não consegui localizar os arquivos da pasta `etapa-02-grafos` na branch padrão.
- As buscas por materiais relacionados a grafos e Dijkstra não retornaram os entregáveis da etapa.
- Não foi possível verificar a implementação de matrizes, BFS/DFS, Dijkstra, vazamentos, Euler ou Hamilton.
- A descrição da planta, embora relevante, não comprova a entrega dos algoritmos solicitados.

Avaliação: A proposta industrial é pertinente, mas faltam evidências disponíveis dos materiais específicos da Etapa 2. A avaliação fica limitada pela ausência dos entregáveis verificáveis.

### Grupo 9 — [Estação de Reabastecimento de Hidrogênio — SCADA-Core](https://github.com/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core?utm_source=chatgpt.com)

média-alta

Pontos positivos

- Excelente contextualização da Teoria dos Grafos em uma estação de reabastecimento de hidrogênio.
- Apresenta documentação das Aulas 11 a 18, com aplicação em armazenamento, compressão, condicionamento e distribuição de H₂.
- A Aula 11 constrói um dígrafo ponderado com equipamentos reais do cenário proposto.
- A Aula 12 apresenta matriz de incidência e balanço de massa.
- A Aula 13 aplica BFS e DFS à análise da rede de tubulações.
- A Aula 14 implementa Dijkstra com Min-Heap para selecionar rotas de abastecimento.
- A Aula 15 relaciona sensores de vazamento, bloqueios de tubulações, válvulas de isolamento e recálculo da rota.
- A Aula 16 aplica Hierholzer à inspeção das tubulações por um robô PIG.
- A Aula 17 utiliza o PCV para organizar a coleta de amostras por um AGV.
- A Aula 18 amplia a modelagem para a logística de insumos e produtos, separando grafos de processo e de circulação.
- O repositório também apresenta uma aplicação web que reúne simuladores de Dijkstra, BFS/DFS, vazamentos, Euler e Hamilton.

Pontos negativos

- A implementação da Aula 16 verifica a paridade dos graus, mas não a conectividade do grafo. Essa verificação precisa ser complementada para garantir a existência de um circuito euleriano cobrindo todas as arestas.
- Os notebooks das Aulas 14 a 17 apresentam código concentrado em uma única célula, com poucas asserções de validação.
- A documentação descreve desvio automático e atuação de válvulas, mas os resultados apresentados são simulações computacionais, não comprovação de atuação em hardware.
- Seria interessante ampliar os testes para cenários de falhas simultâneas e grafos desconexos.

Avaliação: O trabalho apresenta boa completude, aplicação coerente e integração com uma aplicação web. A principal melhoria necessária está na validação dos casos extremos dos algoritmos, especialmente na verificação das condições de Euler.

## Considerações finais do professor

Minha classificação geral é:

Melhores entregas

Grupo 6 — Drone agrícola

alta

Apresenta o melhor conjunto de testes documentados, validação matemática, tratamento de falhas e clareza sobre as limitações físicas.

Grupo 2 — Envasadora

alta

Destaca-se pela organização, aplicação web, materiais didáticos e testes dos algoritmos, além de uma boa discussão dos limites dos modelos.

Entregas intermediárias

Grupos 3, 4, 5 e 9 apresentam conteúdo relevante e boa cobertura dos assuntos. Os principais pontos a corrigir são validação dos algoritmos, testes automatizados, execução dos notebooks e rigor matemático em casos extremos.

Entregas que precisam de complementação

Grupos 1 e 8 não possuem materiais da Etapa 2 localizáveis na pasta exigida. O Grupo 7 possui boa documentação, mas precisa completar e fortalecer a parte executável e os testes.

### Recomendações técnicas para a turma

Há um ponto matemático que merece atenção especial nas entregas: a condição de paridade dos graus, isoladamente, não garante a existência de um circuito euleriano. Também é necessário verificar a conectividade dos vértices que possuem arestas. Essa falha apareceu nas implementações consultadas dos Grupos 4, 5 e 9.

Também recomendo reforçar a diferença entre:

- BFS: encontra caminhos com menor número de arestas, não necessariamente menor distância.
- Dijkstra: encontra o caminho de menor custo, desde que os pesos sejam não negativos.
- Euler: percorre todas as arestas exatamente uma vez.
- Hamilton/PCV: visita todos os vértices exatamente uma vez, retornando à origem em um ciclo.

Essas diferenças são fundamentais para demonstrar que os algoritmos não foram apenas implementados, mas compreendidos e aplicados corretamente.

Parecer final: os Grupos 2 e 6 apresentam as entregas mais maduras da turma nesta etapa. Os demais grupos com nota média-alta possuem uma boa base, mas ainda precisam corrigir ou comprovar aspectos específicos de suas implementações.