# Aula 13: Algoritmos de Busca (BFS e DFS) em Malhas de Tubulação

## 1. Fundamentos Matemáticos: Travessia em Grafos

1. **Busca em Largura (BFS):** Utiliza fila FIFO. Encontra o caminho com o **menor número de arestas/válvulas** ($O(|V| + |E|)$).
2. **Busca em Profundidade (DFS):** Utiliza recursão/pilha LIFO. Permite detectar ciclos e enumerar todos os caminhos alternativos de contingência.

---

## 2. Aprofundamento Teórico

### 2.1. Busca em Largura (BFS) — Definição Formal

O algoritmo BFS explora o grafo **por camadas**: a partir de um vértice origem $s$, visita primeiro todos os vértices a distância $1$ (medida em número de arestas), depois todos os vértices a distância $2$, e assim sucessivamente. Formalmente, seja $d(s, v)$ a distância mínima (em número de arestas) de $s$ até $v$. O BFS garante a seguinte invariante ao processar a fila:

$$\text{Se } v \text{ é retirado da fila antes de } u, \text{ então } d(s, v) \leq d(s, u).$$

Essa invariante é o que garante que **o primeiro caminho encontrado até um vértice é necessariamente o mais curto em número de arestas** — daí o uso na Aula 13 para encontrar a rota com menos válvulas, mesmo que ela não seja a rota de menor comprimento físico (esse critério pertence a Dijkstra, Aula 14).

**Complexidade:** cada vértice é enfileirado exatamente uma vez ($O(V)$) e cada aresta é examinada exatamente uma vez ($O(E)$) ao expandir seus vizinhos, resultando em $O(|V| + |E|)$ — complexidade linear no tamanho do grafo.

### 2.2. Busca em Profundidade (DFS) — Definição Formal

O DFS explora o grafo **aprofundando-se ao máximo** por um ramo antes de retroceder (*backtrack*). Ao processar as arestas durante uma DFS em um dígrafo, cada aresta é classificada em uma de quatro categorias, conforme o "tempo de descoberta" e "tempo de finalização" dos vértices envolvidos:

| Tipo de aresta | Definição | Interpretação na planta |
| --- | --- | --- |
| **Aresta de árvore** (*tree edge*) | leva a um vértice ainda não visitado | trecho principal do percurso de busca |
| **Aresta de retorno** (*back edge*) | leva a um ancestral na árvore de busca | indica um **ciclo** no dígrafo (rota alternativa) |
| **Aresta de avanço** (*forward edge*) | leva a um descendente já visitado | atalho para um nó já alcançável por outro ramo |
| **Aresta de cruzamento** (*cross edge*) | leva a um vértice em outro ramo, não ancestral nem descendente | conecta sub-árvores de busca distintas |

A detecção de uma aresta de retorno durante a DFS é o critério formal usado para provar que um dígrafo **não é um DAG** (grafo acíclico dirigido) — uma verificação relevante em plantas de processo, pois um ciclo de fluxo sem válvula de bloqueio pode indicar um caminho de recirculação não intencional.

**Complexidade:** idêntica à BFS, $O(|V| + |E|)$, pois cada vértice e cada aresta são visitados uma única vez.

### 2.3. BFS vs. DFS: Quando Usar Cada Um

| Critério | BFS | DFS |
| --- | --- | --- |
| Garante caminho mínimo em nº de arestas | Sim | Não |
| Uso de memória no pior caso | $O(|V|)$ (toda a "fronteira" pode estar na fila) | $O(\text{profundidade máxima})$, geralmente menor |
| Enumeração de todos os caminhos | Possível, mas custosa | Natural (usada no notebook para listar as 4 rotas alternativas) |
| Detecção de ciclos em dígrafo | Não direta | Direta, via arestas de retorno |
| Aplicação típica na planta | Rota com menos válvulas a comutar (menor risco operacional de falha de abertura) | Análise de contingência: enumerar *todas* as rotas possíveis antes de escolher |

### 2.4. Bloqueio Dinâmico de Nós como Simulação de Falha

A implementação de `NavegadorGrafos` aceita um conjunto `nos_bloqueados`, que remove temporariamente vértices da busca — uma forma simples e eficaz de simular a falha de um equipamento (por exemplo, a bomba P-101 em manutenção) sem alterar a estrutura permanente do grafo. Do ponto de vista de complexidade, essa técnica não altera a ordem assintótica do algoritmo: continua sendo $O(|V| + |E|)$, apenas com uma verificação adicional de pertencimento ao conjunto (custo amortizado $O(1)$ com `set` em Python).

---

## 3. Exemplo Resolvido

**Pergunta:** Por que a BFS retorna `TK-301_NH3 -> MAN-101 -> P-101 -> R-101 -> GRAN-201` (4 arestas) como a rota de menor número de válvulas, ao invés da rota via `TK-303_Pulmao` (5 arestas), mesmo que esta última possa ter comprimento físico menor em algum cenário?

**Resolução:** A BFS opera exclusivamente sobre a **contagem de arestas** (número de válvulas atravessadas), ignorando completamente o peso associado a cada uma. Isso é uma escolha de modelagem deliberada: minimizar válvulas reduz o número de pontos de falha mecânica na rota, um critério de **confiabilidade operacional**, distinto do critério de **menor distância física** explorado na Aula 14. Ambos os critérios são legítimos; a escolha depende da pergunta de engenharia que se deseja responder.

---

## 4. Atividades de Investigação

1. Execute manualmente a BFS a partir de `TK-302_H3PO4` até `GRAN-201` e determine a camada (distância em arestas) de cada vértice visitado.
2. Classifique as arestas percorridas pela DFS ao enumerar as 4 rotas do notebook: existe alguma aresta de retorno na rede? Justifique por que a rede da Aula 11 é um DAG (grafo acíclico dirigido).
3. Bloqueie simultaneamente `P-101` e `TK-303_Pulmao` e execute a BFS de `TK-301_NH3` até `GRAN-201`. O algoritmo retorna `None`? O que essa resposta representa fisicamente para a operação da planta?
4. Modifique a DFS para interromper a enumeração assim que encontrar 2 caminhos, e compare o tempo de execução teórico com a enumeração completa.

---

## 5. Entregável da Aula 13

* **Motor de Busca Topológica em Python:** Implementação de classes `BFS_Router` e `DFS_PathFinder` com suporte a nós bloqueados.
