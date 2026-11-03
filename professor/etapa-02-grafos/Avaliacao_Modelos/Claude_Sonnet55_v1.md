Vou começar lendo o skill de leitura de arquivos e depois extrair os zips.

Avaliei os 9 zips. O arquivo JSON com os endereços não veio no upload, então usei só o conteúdo de cada zip (a pasta `etapa-02-grafos`) e não vi histórico de commits nem contribuição individual. Li os `.md`, os notebooks, os READMEs e os arquivos de apoio, e reexecutei o código de todos os notebooks.

## Resumo das notas

| Grupo | Nota |
|---|---|
| 4 | **alta** |
| 6 | **alta** |
| 2 | **média-alta** |
| 8 | **média-alta** |
| 3 | **média** |
| 5 | **média** |
| 9 | **média** |
| 7 | **baixa-média** |
| 1 | **baixa** |

## Avaliação por grupo

**Grupo 1 (baixa)**
- **Positivo:** os 8 notebooks rodam sem erro. O Dijkstra com heap e a injeção de bloqueio `W=∞` com desvio estão corretos e medem o tempo de recálculo.
- **Negativo:** o grafo tem só 6 a 7 nós do AGV e deixa de lado a tubulação e os instrumentos que o enunciado pede na Aula 11.
- **Negativo:** o `.md` da Aula 13 tem só um diagrama, sem teoria. Quase todos os notebooks têm uma única célula de código e há apenas 1 `assert`.
- **Negativo:** o teste de estresse da Aula 15 é um único bloqueio, sem falhas múltiplas. Faltam README, Carteiro Chinês e validação por força bruta no TSP.
- **Negativo:** os links "Open in Colab" apontam para arquivos com outros nomes.

**Grupo 2 (média-alta)**
- **Positivo:** é o único com README que declara honestamente o escopo e os limites do modelo.
- **Positivo:** tem 55 `assert`, além de Floyd-Warshall, Hierholzer, Carteiro Chinês e Kahn. A Aula 12 traz matriz de incidência 13×13 com ciclo fundamental verificado (B·c=0), e as Aulas 14 e 16 têm notebooks extensos.
- **Negativo:** o domínio é inconsistente entre as aulas. O README fala de uma envasadora pneumática, e a Aula 15 usa bomba A/B, tanque e comprimento em cm.
- **Negativo:** os nomes de arquivo misturam `_` e espaços, e isso quebra parte dos links do README.
- **Negativo:** as Aulas 11, 13 e 15 são menos densas que as demais.

**Grupo 3 (média)**
- **Positivo:** o README tem integrantes e contexto. O modelo da linha de envase é bem detalhado, com 17 vértices e tags ISA, e há imagem do grafo.
- **Positivo:** a Aula 15 trata bloqueio com desvio e também falha catastrófica sem rota, com parada de emergência, e tem 25 `assert`.
- **Negativo:** os notebooks 17 e 18 foram entregues sem saídas salvas.
- **Negativo:** cada notebook tem uma única célula, sem exploração pedagógica nem força bruta, e as Aulas 13 e 14 são muito parecidas com as dos grupos 5 e 7.
- **Negativo:** o README afirma conformidade com IEC 61508 / SIL-2, o que um trabalho de grafos não comprova.

**Grupo 4 (alta)**
- **Positivo:** é o trabalho mais rigoroso do ponto de vista matemático. Na Aula 17 audita a desigualdade triangular, faz fecho métrico, rastreia o Vizinho Mais Próximo passo a passo e usa 2-Opt com a fórmula do delta.
- **Positivo:** na mesma aula valida o resultado por força bruta (120 permutações), com Held-Karp, MST e cota 1-tree (gap máximo de 2,35%), e mostra o impacto de um corredor bloqueado.
- **Positivo:** os notebooks são em múltiplas células, bem narrados, com painel SCADA e imagem do grafo. Cobre Carteiro Chinês e Kahn.
- **Negativo:** não mede nem reporta a latência de reencaminhamento na Aula 15, que é o ponto central do entregável.
- **Negativo:** não tem README. Alguns nomes de arquivo fogem do padrão (`14 - Menor Caminho (Dijkstra)`). Os materiais são muito extensos e, em alguns trechos, mais verbosos do que informativos.

**Grupo 5 (média)**
- **Positivo:** domínio de biodiesel coerente, com tempo de decisão medido em vários notebooks. A Aula 15 tem falha simples, falha para o metóxido e falha dupla com parada de emergência.
- **Positivo:** a Aula 17 usa 2-Opt, MST como cota inferior e força bruta (ótimo de 402 m), e a Aula 16 inclui o Carteiro Chinês.
- **Negativo:** dois notebooks falham ao executar. Na Aula 16, o `assert dist_cpp == 185.0` contradiz o 205,0 m que a própria saída mostra. Na Aula 17, o cenário expandido quebra com "Matriz deve ser n x n", porque a matriz foi ampliada incorretamente.
- **Negativo:** as saídas salvas não incluem essas células, ou seja, o código não foi reexecutado do início ao fim antes da entrega.
- **Negativo:** compara a razão heurística/MST (1,451) com o limite de Christofides (1,5). Essa comparação não é válida, porque o limite de Christofides vale em relação ao ótimo e não à MST. Também falta README.

**Grupo 6 (alta)**
- **Positivo:** é o único com processo de validação documentado: relatório de validação, `validar_notebooks.py` e um documento de correspondência com a Etapa 1.
- **Positivo:** modela um drone agrícola de pulverização e mantém a continuidade com a Etapa 1.
- **Positivo:** o README é completo e diz as limitações sem exagero. Tem 67 `assert`, 86 células de código, notebooks independentes e bibliotecas apenas da stdlib.
- **Positivo:** a Aula 15 cobre falhas encadeadas e casos de borda (NaN, `None`, dado ausente).
- **Negativo:** a rubrica fala de "tubulação e instrumentos", e o grupo adapta isso para mangueiras e corredores aéreos de um drone. Está justificado, mas se afasta do enunciado literal.
- **Negativo:** os `.md` são curtos e as saídas salvas aparecem em poucas células.
- **Negativo:** renomeou os arquivos com `_`. Não tem Carteiro Chinês sobre grafo com vértices ímpares.

**Grupo 7 (baixa-média)**
- **Positivo:** domínio coerente (processamento de amendoim). Os notebooks 11 a 14, 17 e 18 têm saída e funcionam. O Dijkstra com moinho B bloqueado e desvio via moinho A está correto.
- **Negativo:** os notebooks 15 e 16 estão sem saídas, justamente o teste de falhas e o percurso euleriano. Há dois arquivos para a Aula 15 com nomes diferentes: `.md` "Vazamentos" e `.ipynb` "Falhas".
- **Negativo:** a Aula 17 tem a mesma estrutura e os mesmos números do grupo 9 (280 m para 260 m). As Aulas 13 e 14 são cerca de 95% idênticas às dos grupos 3 e 5, ou seja, pouca adaptação do modelo base.
- **Negativo:** o notebook da Aula 16 tem uma única célula, com tratamento mínimo. Não há README e a imagem tem 3,8 MB.

**Grupo 8 (média-alta)**
- **Positivo:** adapta o domínio para esteiras e triagem (FMS) de forma consistente, inclusive nos nomes dos arquivos.
- **Positivo:** a BFS/DFS (361 linhas) e o TSP (324 linhas) são extensos. A matriz de distâncias é euclidiana e há um diagnóstico da "armadilha" do Vizinho Mais Próximo.
- **Positivo:** a Aula 18 usa Kahn de forma intensa, e há 67 `assert`.
- **Negativo:** a Aula 15 testa só uma falha. Na Aula 16, o Euler só trata o caso feliz, sem grafo com grau ímpar nem Carteiro Chinês.
- **Negativo:** cada notebook é uma única célula grande, com pouca estrutura didática. Não tem README nem imagem do grafo.

**Grupo 9 (média)**
- **Positivo:** domínio de estação de H2 bem pensado, com tags ISA. Faz análise de pontes (trechos críticos) na Aula 15, que é uma boa ideia de teoria de grafos aplicada. Inclui `.png` e `.svg` do grafo.
- **Negativo:** a saída da Aula 15 foi entregue com o marcador de posição `0.0XXX` no tempo de decisão, ou seja, a latência nunca foi medida de fato.
- **Negativo:** quase não há Kahn nem DAG. O Euler só trata o caso feliz, e a Aula 17 é praticamente igual à do grupo 7. Não tem README, e o `proposicoes_logicas_H2.csv` é um resíduo da Etapa 1.
- **Observação:** na minha execução, as Aulas 14 a 18 do grupo 9 deram erro por uma limitação do meu ambiente (`sys.stdout.reconfigure`), e não por defeito do código. Não confirmei a execução completa delas, só as saídas salvas, que são consistentes.

## Observações gerais
- As Aulas 13 e 14 de 3, 5 e 7 têm 91 a 96% de similaridade. Isso provavelmente vem de partirem do mesmo modelo de referência e não prova cópia, mas o que diferencia os grupos é o quanto cada um adaptou e ampliou esse modelo.
- O padrão dos melhores trabalhos (4 e 6) é validar as soluções (força bruta, cotas inferiores, asserções, execução do começo ao fim) e documentar as limitações.
- Quase nenhum grupo fez um teste de estresse de verdade na Aula 15. Seria falha em série com avaliação de taxa de sucesso do desvio, que é o que o entregável "teste de estresse em malha fechada" sugere.

Se quiser, preparo uma versão em tabela com critérios (modelagem, cobertura dos entregáveis, qualidade do código, validação, documentação), para você justificar as notas aos grupos.