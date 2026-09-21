# Aula 12: Matrizes de Incidência, Adjacência e Balanço de Massa Matricial

## 1. Fundamentos Matemáticos: A Matriz de Incidência Vértice-Aresta ($B$)

Seja um dígrafo $G = (V, E)$ com $|V| = n$ vértices e $|E| = m$ arestas dirigidas. A **Matriz de Incidência** $B \in \{-1, 0, 1\}^{n \times m}$ é definida por:

$$B[i, j] = \begin{cases} -1, & \text{se a aresta } e_j \text{ sai do nó } v_i \text{ (origem)} \\ +1, & \text{se a aresta } e_j \text{ entra no nó } v_i \text{ (destino)} \\ 0, & \text{se o nó } v_i \text{ não incide na aresta } e_j \end{cases}$$

### Propriedades Formais:
1. **Soma por Coluna Nula:** Para toda coluna $j$, $\sum_{i=1}^n B[i, j] = 0$.
2. **Balanço de Massa em Regime Permanente:** $B \cdot \vec{Q} = \vec{S}$.

---

## 2. Aprofundamento Teórico

### 2.1. Interpretação Física da Propriedade da Soma Nula

A propriedade $\sum_{i=1}^n B[i,j] = 0$ decorre diretamente da definição: cada aresta $e_j = (u, v)$ contribui com exatamente um $-1$ (na linha de $u$) e um $+1$ (na linha de $v$), e $0$ em todas as demais linhas. Essa é a versão discreta e matricial da **Primeira Lei de Kirchhoff** (conservação de corrente/massa em nós), aplicada aqui a vazões de fluido ao invés de corrente elétrica — a mesma matemática que rege circuitos elétricos governa redes de tubulação, redes de tráfego e redes de dados.

### 2.2. Matriz de Incidência vs. Matriz de Adjacência

| Aspecto | Matriz de Incidência $B$ | Matriz de Adjacência $A$ |
| --- | --- | --- |
| Dimensão | $n \times m$ (vértices × arestas) | $n \times n$ (vértices × vértices) |
| Entradas | $\{-1, 0, +1\}$ (estrutural) | pesos reais ou $\{0,1\}$ |
| Uso principal | balanço de massa, análise de ciclos, espaço de cortes | busca de caminhos, algoritmos de menor custo |
| Relação algébrica | $B B^T$ é a **matriz Laplaciana** do grafo (não-dirigido subjacente) | $A$ não determina diretamente conservação de fluxo |

A relação $L = B B^T$ (Laplaciano) é a ponte entre as duas representações: seus autovalores revelam propriedades globais de conectividade, tema avançado que foge do escopo desta disciplina, mas que justifica por que a matriz de incidência é preferida em problemas de **fluxo em redes** (network flow), enquanto a matriz de adjacência é preferida em problemas de **busca de caminho** (Aulas 13 e 14).

### 2.3. Posto (Rank) da Matriz de Incidência e o Espaço de Ciclos

Para um grafo conexo com $n$ vértices, o posto da matriz de incidência (considerando o grafo não-dirigido subjacente, com entradas em $\{0,1\}$ e trabalhando sobre $\mathbb{GF}(2)$, ou considerando a versão orientada sobre $\mathbb{R}$) é $n - 1$. A dimensão do **núcleo** (espaço nulo à direita) de $B$ é $m - (n-1) = m - n + 1$, exatamente o número de arestas independentes que, se removidas, ainda deixam o grafo conexo — ou seja, o **número de ciclos independentes** da rede. Para a rede padrão da planta ($n=8$, $m=9$): dimensão do espaço de ciclos $= 9 - 8 + 1 = 2$, que corresponde às duas rotas paralelas via P-101/P-102 e via R-101/TK-303.

### 2.4. Balanço de Massa como Sistema Linear

A equação $B \cdot \vec{Q} = \vec{S}$ é um sistema linear onde:
* $\vec{Q} \in \mathbb{R}^m$ é o vetor de vazões volumétricas em cada tubulação (a incógnita, em problemas de balanceamento);
* $\vec{S} \in \mathbb{R}^n$ é o vetor de fontes/sumidouros líquidos em cada nó (positivo para consumo, negativo para alimentação externa, por convenção do sinal adotada no notebook).

Para um nó interno sem acúmulo (regime permanente, sem geração ou consumo de massa), a soma das vazões que entram deve igualar a soma das vazões que saem — daí o valor $0.0$ observado na tabela de balanço para `MAN-101`, `P-101`, `P-102` e demais nós intermediários. Apenas os tanques de alimentação (`TK-301_NH3`, `TK-302_H3PO4`) apresentam balanço líquido negativo, pois são fontes puras de massa para o sistema.

### 2.5. Matriz de Custos (Adjacência Ponderada) Revisitada

A matriz de custos $W \in (\mathbb{R}^+ \cup \{\infty\})^{n \times n}$ generaliza a matriz de adjacência binária ao substituir $1$ pelo peso real da aresta (comprimento, perda de carga ou tempo de trânsito) e $0$ por $\infty$ quando não há conexão direta. Essa é exatamente a estrutura de dados de entrada exigida pelo Algoritmo de Dijkstra (Aula 14) e pelo Algoritmo de Floyd-Warshall — este último, não implementado nesta etapa, mas conceitualmente relevante: enquanto Dijkstra calcula o menor caminho de **uma única origem**, Floyd-Warshall calcula o menor caminho **entre todos os pares** de vértices em $O(n^3)$, sendo mais adequado quando se deseja pré-computar a distância de qualquer tanque até qualquer outro equipamento da planta.

---

## 3. Exemplo Resolvido

**Pergunta:** Verifique manualmente a coluna $e_5$ (tubulação P-101 → R-101) da matriz de incidência $B$ apresentada no notebook e confirme a soma nula.

**Resolução:** A coluna $e_5$ tem $-1$ na linha `P-101` (origem) e $+1$ na linha `R-101` (destino); todas as demais linhas são $0$. Soma: $-1 + 1 + 0 \times 6 = 0$. ✓ A propriedade se confirma para essa coluna, como para qualquer outra.

---

## 4. Atividades de Investigação

1. Calcule manualmente $B \cdot \vec{Q}$ para um vetor hipotético $\vec{Q}$ em que todas as tubulações operam a $50\,\text{m}^3/\text{h}$, exceto a tubulação `TK-303_Pulmao -> GRAN-201`, que opera a $70\,\text{m}^3/\text{h}$. O nó `TK-303_Pulmao` continua balanceado? O que essa violação significa fisicamente?
2. Demonstre que o produto $B B^T$ (considerando o grafo subjacente não-dirigido) é a matriz Laplaciana $L = D - A$, onde $D$ é a matriz diagonal de graus e $A$ a matriz de adjacência não-dirigida.
3. Usando a fórmula da dimensão do espaço de ciclos, calcule quantos ciclos independentes surgiriam se fosse adicionada uma décima tubulação ligando `GRAN-201` de volta a `MAN-101` (linha de reciclo).
4. Compare o custo computacional de se obter a distância entre **todos os pares** de equipamentos usando (a) Dijkstra executado $n$ vezes a partir de cada vértice, versus (b) Floyd-Warshall executado uma única vez. Para quais valores de $n$ e $m$ cada abordagem é preferível?

---

## 5. Entregável da Aula 12

* **Motor Matricial de Balanço de Massa:** Geração automatizada da Matriz de Incidência $B \in \mathbb{R}^{n \times m}$ e validação da equação de conservação $B \cdot \vec{Q} = \vec{S}$.
