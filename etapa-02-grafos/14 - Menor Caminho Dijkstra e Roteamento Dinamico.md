# Aula 14: Menor Caminho — Algoritmo de Dijkstra e Roteamento Dinâmico de Fluidos

## 1. Fundamentos Matemáticos: Algoritmo Guloso de Dijkstra

Dado um dígrafo ponderado com pesos não-negativos $G = (V, E, W)$, o **Algoritmo de Dijkstra** calcula o caminho de custo mínimo entre um vértice fonte $s$ e os nós $v \in V$ em $O((|V| + |E|) \log |V|)$ com Min-Heap.

---

## 2. Aprofundamento Teórico

### 2.1. O Princípio de Relaxação de Arestas

O conceito central do algoritmo é a **operação de relaxação**: para cada aresta $(u, v)$ com peso $w(u,v)$, se a distância provisória até $u$ mais o peso da aresta for menor que a distância provisória conhecida até $v$, atualizamos:

$$\text{se } d[u] + w(u,v) < d[v] \implies d[v] \leftarrow d[u] + w(u,v), \quad \text{pred}[v] \leftarrow u$$

Essa é exatamente a lógica do bloco `if nova_d < dist[v]` na implementação de `RoteadorDijkstra`. Repetir essa relaxação sistematicamente, sempre a partir do vértice de menor distância provisória ainda não finalizado, é o que caracteriza a estratégia **gulosa** de Dijkstra.

### 2.2. Por Que a Estratégia Gulosa Funciona (Esboço de Prova)

A correção do algoritmo depende crucialmente da hipótese de **pesos não-negativos**. A prova por indução segue a ideia:

* **Hipótese de indução:** todo vértice já retirado do heap (marcado como "finalizado") tem sua distância $d[v]$ igual à distância real mínima $\delta(s, v)$.
* **Passo indutivo:** ao retirar do heap o vértice $u$ com menor $d[u]$ entre os não finalizados, suponha por contradição que existe um caminho mais curto até $u$. Esse caminho, em algum ponto, deveria sair do conjunto de vértices finalizados através de uma aresta $(x, y)$ com $x$ finalizado e $y$ não finalizado. Como os pesos são não-negativos, $d[y] \leq \delta(s, u) < d[u]$ — mas isso contradiz a escolha de $u$ como o vértice de menor $d$ entre os não finalizados. Logo, $d[u] = \delta(s, u)$. $\blacksquare$

Essa é a razão formal pela qual **pesos negativos quebram Dijkstra**: se um trecho pudesse ter peso negativo (por exemplo, representando um "ganho" energético), o argumento acima falha, pois um caminho passando por uma aresta negativa fora do conjunto finalizado poderia, mais tarde, produzir uma distância menor do que a já "fechada". Nesses casos, seria necessário o **Algoritmo de Bellman-Ford**, que tolera pesos negativos (desde que não existam ciclos de peso negativo) ao custo de complexidade $O(|V| \cdot |E|)$, sensivelmente pior que Dijkstra.

### 2.3. Análise de Complexidade Detalhada

| Estrutura de dados para a fila de prioridade | Complexidade total |
| --- | --- |
| Busca linear (sem heap) | $O(|V|^2)$ |
| Heap binário (`heapq`, usado no notebook) | $O((|V| + |E|) \log |V|)$ |
| Heap de Fibonacci (teórico) | $O(|E| + |V| \log |V|)$ |

Para a rede da planta ($|V|=8$, $|E|=9$), qualquer uma dessas estruturas executa em tempo desprezível — a escolha do heap binário no notebook prioriza clareza e é a opção padrão recomendada para redes de porte pequeno a médio (dezenas a milhares de vértices), como é o caso típico de uma planta industrial real.

### 2.4. Reconstrução do Caminho via Vetor de Predecessores

O algoritmo não armazena o caminho completo a cada iteração (isso seria custoso); em vez disso, mantém um vetor `pred[v]`, atualizado a cada relaxação bem-sucedida. Ao final, o caminho é reconstruído por **retropropagação**: partindo do destino, seguimos `pred` até alcançar a origem, e então invertemos a sequência. Esse padrão de "reconstrução por predecessores" reaparece em praticamente todos os algoritmos de caminho mínimo (BFS, Dijkstra, Bellman-Ford, Floyd-Warshall) e vale a pena internalizá-lo como técnica geral.

### 2.5. Corretude com Bloqueios Dinâmicos

Assim como na Aula 13, `RoteadorDijkstra.calcular_menor_caminho` aceita um conjunto de `bloqueios`. Do ponto de vista teórico, isso equivale a definir $w(u,v) = \infty$ para toda aresta incidente a um vértice bloqueado — uma transformação que não compromete a hipótese de pesos não-negativos ($\infty$ continua sendo, por convenção, maior ou igual a qualquer peso finito), preservando a corretude do algoritmo.

---

## 3. Exemplo Resolvido

**Pergunta:** Trace manualmente as três primeiras iterações de Dijkstra a partir de `TK-301_NH3`.

**Resolução:**
1. **Inicialização:** $d[\text{TK-301}] = 0$, todos os demais $= \infty$. Heap: $\{(0, \text{TK-301})\}$.
2. **Iteração 1:** retira `TK-301` ($d=0$). Relaxa a aresta para `MAN-101`: $d[\text{MAN-101}] = 0 + 15 = 15$. Heap: $\{(15, \text{MAN-101})\}$.
3. **Iteração 2:** retira `MAN-101` ($d=15$). Relaxa para `P-101`: $d = 15+8=23$; relaxa para `P-102`: $d=15+10=25$. Heap: $\{(23, \text{P-101}), (25, \text{P-102})\}$.
4. **Iteração 3:** retira `P-101` ($d=23$, menor do heap). Relaxa para `R-101`: $d = 23+25=48$.

Continuando o processo, o algoritmo eventualmente encontra a rota `TK-301_NH3 -> MAN-101 -> P-102 -> R-101 -> GRAN-201` com custo $77.0\,\text{m}$ — note que, mesmo P-101 sendo alcançado primeiro (distância $23$ contra $25$ de P-102), a rota final ótima passa por P-102 porque a soma $25 + 22 = 47$ (via P-102 até R-101) é menor que $23+25=48$ (via P-101), demonstrando que a escolha gulosa local não impede o algoritmo de encontrar o ótimo global — ele apenas processa os vértices em uma ordem específica, sem "comprometer-se" com uma rota até que todas as relaxações relevantes sejam feitas.

---

## 4. Atividades de Investigação

1. Complete manualmente o traçado de Dijkstra iniciado no Exemplo Resolvido até `GRAN-201` e confirme o valor de $77.0\,\text{m}$ retornado pelo notebook.
2. Adicione uma aresta hipotética com peso $-5$ entre `R-101` e `GRAN-201` e explique, usando o argumento da Seção 2.2, por que o algoritmo de Dijkstra pode retornar um resultado incorreto nesse cenário.
3. Compare a complexidade de executar Dijkstra a partir de cada um dos 8 vértices da rede (para obter todas as distâncias par-a-par) versus executar Floyd-Warshall uma única vez (mencionado na Aula 12). Para qual valor aproximado de $|V|$ as duas abordagens têm custo comparável?
4. Bloqueie o vértice `MAN-101` e execute o algoritmo de `TK-301_NH3` até `GRAN-201`. Qual é o resultado, e o que ele indica sobre a topologia da rede (existe algum caminho que não passa pelo manifold)?

---

## 5. Entregável da Aula 14

* **Módulo `DijkstraRouter` em Python:** Implementação robusta do algoritmo com suporte a recálculo dinâmico de pesos e retorno da sequência de equipamentos e distância total.
