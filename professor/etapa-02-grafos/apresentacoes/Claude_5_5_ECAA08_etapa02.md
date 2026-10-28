# Avaliação da qualidade das apresentações (Etapa 2: Teoria de Grafos)

Observação: o documento traz **nove grupos**, mas o **Grupo 3** não tem título. Sua transcrição aparece logo após o Grupo 2 (planta de envase/encartonamento de bebidas, com redundância de tanques e bombas) e foi avaliada como Grupo 3.

Critérios: cobertura dos nove tópicos, correção conceitual, profundidade (resultados quantitativos, validação), domínio do apresentador e qualidade do simulador.

## Resumo

| Grupo | Projeto | Qualidade |
|---|---|---|
| 1 | AGV por visão computacional | **média-alta** |
| 2 | Envasadora de líquidos (mesa indexadora) | **média-alta** |
| 3 | Planta de bebidas com redundância | **alta** |
| 4 | Classificação de grãos de arroz | **alta** |
| 5 | Planta piloto de biodiesel | **média** |
| 6 | Drone agrícola de pulverização | **média-alta** |
| 7 | Linha de produção de paçoca | **média-alta** |
| 8 | Célula de manufatura flexível | **alta** |
| 9 | Hidrogênio (SCADA) | **média** |

## Justificativas

**Grupo 1: média-alta.**
- Pontos fortes: cobertura ampla (digrafo, BFS/DFS, Dijkstra, obstáculos, Euler com Carteiro Chinês e Hierholzer, TSP com Nearest Neighbor e 2-opt). Resultado quantitativo claro (160 m → 134 m, cerca de 17%) e simulador com cinco cenários.
- Fragilidades: a matriz de incidência foi anunciada, mas descrita como a de adjacência. O apresentador admitiu que a matriz era difícil de explicar só falando. A aplicação (AGV em galpão) foi criticada como forçada. A fala é desorganizada.
- Observação: o texto atribui a redução à "otimização de 20%", mas 160 → 134 m dá cerca de 16%.

**Grupo 2: média-alta.**
- Pontos fortes: cobriu as matrizes (adjacência, incidência, custo, ciclo), os algoritmos de busca, Dijkstra, Euler, Hamilton (280 s → 260 s), Kahn/DAG e um simulador completo com seis visões.
- Fragilidades: o apresentador esqueceu o nome da matriz de incidência e do vizinho mais próximo. Há imprecisões conceituais (o DFS "encontra um caminho mais longo", a explicação confusa sobre trilha aberta). Faltam mais detalhes teóricos nas explicações.

**Grupo 3: alta.**
- Pontos fortes: modelagem com atributos, matrizes de adjacência e incidência bem explicadas (exemplo TS1→VS1 com 5 m, sinais −1/+1), balanço de massa, comparação BFS × Dijkstra (o desvio de 2 m do bypass), tolerância a falhas com tempos de decisão, pontes e vértices críticos, conectividade dupla. Euler com Carteiro Chinês, TSP com 280 m → 260 m e 7% de economia de bateria. Simulador em formato de jogo com cenários realistas.
- Fragilidades: a transcrição está bastante ruidosa, com alguns trechos confusos. Houve incerteza na pronúncia de "Dijkstra" e o grafo exibido era simplificado.

**Grupo 4: alta.**
- Pontos fortes: modelagem com 14 vértices e 14 arestas, matriz de incidência com a lei de Kirchhoff (BQ = S), BFS e DFS com aplicações específicas (intertravamento, detecção do reciclo na E14), Dijkstra com heap, DAG, rede multicamadas e quatro cenários de estresse. Euler (89,5 m) e TSP (268 → 218 m, 18,6%, com 22% de autonomia de bateria). Testes em Python e simulador com balanço de massa.
- Fragilidades: a matriz de adjacência não foi claramente distinguida. O apresentador mostrou insegurança em partes da simulação e passou rápido por algumas seções.

**Grupo 5: média.**
- Pontos fortes: bom raciocínio de engenharia (Darcy-Weisbach, golpe de aríete, latência de decisão × tempo mecânico de válvula, logística reversa) e uso correto de BFS, DFS, Dijkstra, Euler e TSP.
- Fragilidades: a matriz de adjacência não foi abordada, o teste de estresse em malha fechada não foi citado e a matriz de incidência não foi nomeada. O simulador não foi demonstrado e os resultados numéricos foram remetidos ao repositório. Há erros conceituais, como "equipamentos = arestas" e Dijkstra descrito como guloso sem consequências. A transcrição também é confusa.

**Grupo 6: média-alta.**
- Pontos fortes: bom alinhamento com as aulas (11 a 18), uso explícito de dígrafo, três matrizes (A, B e W) e exemplo de balanço de volume. BFS e DFS com analogias didáticas, Dijkstra com validação cruzada (1440 consultas), segurança com reativação condicionada ao OK do operador. TSP com 660 m → 575 m e cota inferior. Validação com oito notebooks, 86 células e 67 asserções. Simulador didático funcional.
- Fragilidades: houve hesitações e trocas de termos nas matrizes, uso de "colinha", erros de fala e confusão com números (arestas e linhas). Algumas explicações do Euler ficaram imprecisas.

**Grupo 7: média-alta.**
- Pontos fortes: grafo de 8 vértices e 9 arestas, matriz de incidência com equilíbrio de massa, BFS e DFS justificados, Dijkstra com falha e custo infinito, tempo de recálculo (0,14 ms contra 2 s do atuador), Euler com Carteiro Chinês, AGV com vizinho mais próximo e 2-opt, DAG com Kahn, rede multicamadas. Boa contextualização prática e simulador demonstrado.
- Fragilidades: a matriz de adjacência não foi mencionada e a fala trocou BFS por DFS em certo ponto. Faltam números no TSP e o Euler teve explicações confusas ("ear housing"). Houve dificuldades com o controle do simulador.

**Grupo 8: alta.**
- Pontos fortes: modelagem rigorosa (9 vértices e 8 arestas), lema do aperto de mãos, matriz de incidência com Kirchhoff, classificação de arestas no DFS (árvore, retorno, avanço) provando que o grafo é um DAG, Dijkstra com latência de 0,05 ms contra 150 ms do pistão e referência à norma IEC 61511. Euler com Carteiro Chinês e Hierholzer. TSP com 98 m → 86,3 m, validação por força bruta e MST como cota. Separação em dois grafos (materiais × veículos) bem argumentada, e simulador com cinco cenários.
- Fragilidades: a matriz de adjacência não foi citada e o final foi um pouco abrupto. Há pequenos deslizes numéricos e de fala, como o número de caminhos (720) e a grafia de Hierholzer.

**Grupo 9: média.**
- Pontos fortes: bom contexto de engenharia (hidrogênio, SAE J2601, setores), incidência com exemplo no XV104, BFS para menor corte e DFS para recirculação, Dijkstra com rotas alternativas, Euler com ajuste de graus, TSP com 2-opt (20 m) e ciclo de varredura de 100 ms.
- Fragilidades: a matriz de adjacência não foi mencionada. O simulador foi citado apenas de passagem. O apresentador esqueceu nomes de algoritmos (Hierholzer, "Fart Line") e a explicação do Euler foi confusa e pouco rigorosa. A fala foi pouco precisa na teoria, e o item de Bellman-Ford e o CAM (provavelmente Kahn) foram mencionados sem desenvolvimento.

## Observações gerais

- Tópicos mais frágeis em vários grupos: a matriz de adjacência (omitida nos Grupos 5, 7, 8 e 9) e a distinção entre incidência e adjacência.
- Os melhores trabalhos (3, 4 e 8) combinaram teoria correta, validação quantitativa e simulador demonstrado.
- Limitação da análise: as transcrições são de fala automática e ruidosas, então parte das imprecisões pode ser da transcrição, não dos alunos. A avaliação se baseia só no texto, sem ver slides, código ou simuladores.