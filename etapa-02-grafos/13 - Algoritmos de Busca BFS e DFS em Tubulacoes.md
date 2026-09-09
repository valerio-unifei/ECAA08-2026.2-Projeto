# Aula 13: Algoritmos de Busca (BFS e DFS) em Malhas de Tubulação

## 1. Fundamentos Matemáticos: Travessia em Grafos

1. **Busca em Largura (BFS):** Utiliza fila FIFO. Encontra o caminho com o **menor número de arestas/válvulas** ($O(|V| + |E|)$).
2. **Busca em Profundidade (DFS):** Utiliza recursão/pilha LIFO. Permite detectar ciclos e enumerar todos os caminhos alternativos de contingência.

---

## 2. Entregável da Aula 13

* **Motor de Busca Topológica em Python:** Implementação de classes `BFS_Router` e `DFS_PathFinder` com suporte a nós bloqueados.
