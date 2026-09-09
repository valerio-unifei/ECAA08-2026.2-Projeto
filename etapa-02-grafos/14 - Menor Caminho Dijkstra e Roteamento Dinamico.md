# Aula 14: Menor Caminho — Algoritmo de Dijkstra e Roteamento Dinâmico de Fluidos

## 1. Fundamentos Matemáticos: Algoritmo Guloso de Dijkstra

Dado um dígrafo ponderado com pesos não-negativos $G = (V, E, W)$, o **Algoritmo de Dijkstra** calcula o caminho de custo mínimo entre um vértice fonte $s$ e os nós $v \in V$ em $O((|V| + |E|) \log |V|)$ com Min-Heap.

---

## 2. Entregável da Aula 14

* **Módulo `DijkstraRouter` em Python:** Implementação robusta do algoritmo com suporte a recálculo dinâmico de pesos e retorno da sequência de equipamentos e distância total.
