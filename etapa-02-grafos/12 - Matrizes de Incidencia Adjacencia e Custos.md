# Aula 12: Matrizes de Incidência, Adjacência e Balanço de Massa Matricial

## 1. Fundamentos Matemáticos: A Matriz de Incidência Vértice-Aresta ($B$)

Seja um dígrafo $G = (V, E)$ com $|V| = n$ vértices e $|E| = m$ arestas dirigidas. A **Matriz de Incidência** $B \in \{-1, 0, 1\}^{n \times m}$ é definida por:

$$B[i, j] = \begin{cases} -1, & \text{se a aresta } e_j \text{ sai do nó } v_i \text{ (origem)} \\ +1, & \text{se a aresta } e_j \text{ entra no nó } v_i \text{ (destino)} \\ 0, & \text{se o nó } v_i \text{ não incide na aresta } e_j \end{cases}$$

### Propriedades Formais:
1. **Soma por Coluna Nula:** Para toda coluna $j$, $\sum_{i=1}^n B[i, j] = 0$.
2. **Balanço de Massa em Regime Permanente:** $B \cdot \vec{Q} = \vec{S}$.

---

## 2. Entregável da Aula 12

* **Motor Matricial de Balanço de Massa:** Geração automatizada da Matriz de Incidência $B \in \mathbb{R}^{n \times m}$ e validação da equação de conservação $B \cdot \vec{Q} = \vec{S}$.
