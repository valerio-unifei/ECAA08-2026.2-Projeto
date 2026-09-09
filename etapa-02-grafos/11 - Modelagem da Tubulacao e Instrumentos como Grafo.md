# Aula 11: Teoria dos Grafos — Modelagem de Tubulações e Instrumentos

## 1. Fundamentos Matemáticos: Definição Formal de Dígrafos Ponderados

Um **Grafo Dirigido e Ponderado (Dígrafo)** é formalmente definido pela tripla:
$$G = (V, E, W)$$

Onde:
1. **$V = \{v_1, v_2, \dots, v_n\}$** é o conjunto finito de **vértices (nós)**: tanques, reatores, bombas, manifolds e granuladores.
2. **$E \subseteq V \times V$** é o conjunto de **arestas dirigidas (arcos)** de tubulação com sentido de fluxo permitido.
3. **$W: E \rightarrow \mathbb{R}^+$** é a **função de ponderação**, que associa a cada duto um custo operacional (comprimento físico $L\text{ [m]}$ ou perda de carga $\Delta P$).

```mermaid
graph LR
    TK301["TK-301: Amônia (NH3)"] -->|15m (XV-301)| MAN101["MAN-101: Manifold"]
    TK302["TK-302: Ácido (H3PO4)"] -->|12m (XV-302)| MAN101
    MAN101 -->|8m (XV-101A)| P101["P-101: Bomba A"]
    MAN101 -->|10m (XV-101B)| P102["P-102: Bomba B"]
    P101 -->|25m (XV-102A)| R101["R-101: Reator"]
    P102 -->|22m (XV-102B)| R101
    R101 -->|30m (XV-201)| GRAN201["GRAN-201: Granulador"]
    R101 -->|18m (XV-202)| TK303["TK-303: Pulmão"]
    TK303 -->|20m (XV-203)| GRAN201
```

---

## 2. Entregável da Aula 11

* **Classe `GrafoTubulacao` em Python:** Estrutura orientada a objetos com suporte a nós ISA-5.1, inserção de tubulações com peso e válvula associada, e exportação das matrizes de adjacência.
