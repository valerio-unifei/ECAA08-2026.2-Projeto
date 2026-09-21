# Aula 15: Simulação de Vazamentos e Desvio Automático em Malha Fechada

## 1. Fundamentos Matemáticos: Reconfiguração Dinâmica de Grafos em Tempo Real

Na detecção de um vazamento em um segmento de duto $(u, v)$, o sistema executa a punição topológica $W(u, v) \leftarrow \infty$ e recalcula instantaneamente a rota via Dijkstra para comutação de válvulas.

---

## 2. Aprofundamento Teórico

### 2.1. Grafos Dinâmicos e o Conceito de Reponderação

Um **grafo dinâmico** é aquele cujo conjunto de arestas ou pesos varia ao longo do tempo, $G_t = (V, E_t, W_t)$, em contraste com o grafo estático estudado nas Aulas 11-14. A técnica de reponderação usada nesta aula — atribuir $W(u,v) \leftarrow \infty$ a um trecho isolado — é a forma mais simples de modelar uma mudança topológica sem alterar a estrutura de dados subjacente: ao invés de remover fisicamente a aresta da lista/matriz de adjacência (uma operação que exigiria realocar índices em algumas implementações), basta torná-la "infinitamente cara", o que garante que nenhum algoritmo de menor caminho jamais a selecione, preservando ao mesmo tempo o registro histórico de que aquela conexão existe fisicamente (apenas está indisponível).

### 2.2. Recomputar do Zero vs. Algoritmos Incrementais

A estratégia adotada no notebook — **recomputar Dijkstra do zero** a cada mudança de peso — é a mais simples e robusta, com custo $O((|V|+|E|)\log|V|)$ por recomputação. Isso é aceitável para os tamanhos de rede aqui trabalhados (a fábrica tem dezenas de nós), mas em redes de grande escala (centenas de milhares de vértices, como uma malha de distribuição de gás natural regional) essa abordagem se torna custosa se aplicada a cada evento de falha. Nesses casos, a literatura de **algoritmos dinâmicos de grafos** oferece estruturas de dados especializadas (árvores de menor caminho dinâmicas, *dynamic shortest path trees*) que atualizam apenas a porção do grafo afetada pela mudança, evitando reprocessar do zero. Este tópico é mencionado aqui como motivação para estudos futuros, mas não é implementado nesta etapa.

### 2.3. Tempo de Decisão como Métrica de Engenharia

O notebook desta aula reporta explicitamente o **tempo de decisão** (`Tempo_Decisão_ms`) do recálculo, medido em milissegundos. Essa métrica não é acadêmica: em um sistema de intertravamento de segurança (SIS — *Safety Instrumented System*), o tempo entre a detecção de uma falha e a ação corretiva (fechamento/abertura de válvulas) é normatizado pela IEC 61511 como parte do **tempo de resposta do processo** (*process safety time*). Um algoritmo de Dijkstra que processa em frações de milissegundo, como demonstrado no exemplo, é órdens de magnitude mais rápido que o tempo típico de atuação de uma válvula motorizada (segundos), confirmando que o **gargalo de segurança está na atuação física, não no cálculo computacional**.

### 2.4. Conectividade, Pontes e Vértices de Articulação

A simulação de vazamento levanta uma pergunta estrutural mais profunda: **quais trechos da rede, se isolados, desconectariam completamente a planta?** Um trecho cuja remoção aumenta o número de componentes conexos do grafo é chamado de **ponte** (*bridge*); um vértice com a mesma propriedade é um **vértice de articulação** (*cut vertex* ou *articulation point*). Formalmente, uma aresta $(u,v)$ é uma ponte se e somente se ela não pertence a nenhum ciclo do grafo. Na rede da planta, o trecho isolado no exemplo (`R-101 -> GRAN-201`) **não é uma ponte**, pois existe a rota alternativa via `TK-303_Pulmao`, o que justifica exatamente por que o recálculo de Dijkstra encontra uma rota substituta viável. Se o trecho isolado fosse uma ponte verdadeira, o algoritmo retornaria "sem rota" (custo $\infty$), sinalizando uma falha catastrófica de disponibilidade.

**Algoritmo de detecção de pontes (Tarjan, 1974):** executa uma única DFS ($O(|V|+|E|)$) mantendo, para cada vértice, o tempo de descoberta e o menor tempo de descoberta alcançável por uma aresta de retorno (*low-link value*). Embora não implementado neste notebook, esse algoritmo complementaria perfeitamente a simulação de vazamentos: ao invés de simular falhas uma a uma, ele identificaria **de antemão** todos os trechos críticos cuja falha isolaria parte da planta — uma análise de risco proativa.

### 2.5. Resiliência de Rede: k-Conectividade

Generalizando o conceito de ponte, dizemos que um grafo é **$k$-aresta-conexo** se é necessário remover pelo menos $k$ arestas para desconectá-lo. A rede da planta, tendo pelo menos duas rotas independentes entre `MAN-101` e `GRAN-201` (via P-101/R-101 direto, e via P-102/R-101/TK-303), é pelo menos $2$-aresta-conexa nesse trecho — uma propriedade desejável de projeto para qualquer planta crítica, pois garante tolerância a uma única falha simultânea de duto.

---

## 3. Exemplo Resolvido

**Pergunta:** Se, além do trecho `R-101 -> GRAN-201`, o trecho `TK-303_Pulmao -> GRAN-201` também sofresse um vazamento simultâneo, qual seria o resultado do recálculo de Dijkstra?

**Resolução:** Ambas as arestas de entrada em `GRAN-201` estariam com peso $\infty$, tornando o grau de entrada efetivo do granulador igual a zero. Como Dijkstra nunca atravessa uma aresta de peso $\infty$, o algoritmo terminaria com $d[\text{GRAN-201}] = \infty$ e nenhum predecessor definido, retornando "sem rota" — evidenciando que, embora a rede tolere uma única falha, ela **não é resiliente a duas falhas simultâneas nas arestas de entrada do granulador**, pois ambas convergem para o mesmo vértice sem uma terceira rota alternativa.

---

## 4. Atividades de Investigação

1. Implemente uma função que teste, para cada aresta da rede padrão, se sua remoção (reponderação para $\infty$) desconecta `TK-301_NH3` de `GRAN-201`. Quantas "pontes" existem na rede?
2. Compare o tempo de decisão reportado pelo notebook com o tempo típico de abertura de uma válvula motorizada industrial (pesquise valores típicos, tipicamente entre 5 e 30 segundos). Quantas ordens de magnitude separam os dois tempos?
3. Proponha uma terceira rota física entre `R-101` e `GRAN-201` (um novo duto hipotético) que tornaria a rede resiliente ao cenário de dupla falha do Exemplo Resolvido. Onde essa rota deveria se originar?
4. Pesquise o conceito de *dynamic shortest path trees* e explique, em termos gerais, por que recomputar Dijkstra do zero a cada evento se torna impraticável para redes com mais de $10^5$ vértices.

---

## 5. Entregável da Aula 15

* **Simulador de Desvio de Vazamento:** Teste de estresse com injeção programada de vazamento e validação de recálculo em milissegundos.
