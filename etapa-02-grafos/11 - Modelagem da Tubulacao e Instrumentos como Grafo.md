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
    TK301["TK-301: Amônia - NH3"] -->|15m - XV-301| MAN101["MAN-101: Manifold"]
    TK302["TK-302: Ácido - H3PO4"] -->|12m - XV-302| MAN101
    MAN101 -->|8m - XV-101A| P101["P-101: Bomba A"]
    MAN101 -->|10m - XV-101B| P102["P-102: Bomba B"]
    P101 -->|25m - XV-102A| R101["R-101: Reator"]
    P102 -->|22m - XV-102B| R101
    R101 -->|30m - XV-201| GRAN201["GRAN-201: Granulador"]
    R101 -->|18m - XV-202| TK303["TK-303: Pulmão"]
    TK303 -->|20m - XV-203| GRAN201
```

A leitura do diagrama acima é direta: cada seta representa um trecho físico de tubulação com sentido de escoamento fixo (definido pela bomba ou pela gravidade), e o rótulo indica o comprimento em metros e a tag ISA-5.1 da válvula de bloqueio instalada naquele trecho.

---

## 2. Por que um Grafo e não uma Lista de Equipamentos?

Uma planta química pode, em princípio, ser descrita apenas por uma lista de equipamentos e uma lista de tubulações — e é exatamente assim que a maioria dos bancos de dados de engenharia (P&ID databases, `intools`, `SmartPlant`) armazena a informação. A diferença ao adotar a **estrutura de grafo** é que ela expõe propriedades topológicas que uma tabela simples esconde:

1. **Conectividade:** É possível provar formalmente se existe (ou não) um caminho de um tanque de matéria-prima até o granulador, sem inspecionar manualmente o P&ID.
2. **Redundância:** O grau de entrada do reator ($\deg^-(R\text{-}101) = 2$, alimentado por P-101 e P-102) evidencia a existência de bombas reservas — uma propriedade de tolerância a falhas que fica implícita em uma tabela.
3. **Composição de algoritmos:** Uma vez que a planta é um grafo, toda a teoria desenvolvida ao longo de mais de um século (Euler, 1736; Dijkstra, 1959; Hierholzer, 1873) torna-se aplicável sem reformulação — é isso que exploraremos nas Aulas 12 a 18.

### 2.1. Definições Fundamentais de Teoria dos Grafos

Para tornar o vocabulário preciso, formalizamos os conceitos que serão usados em toda a etapa:

* **Ordem** do grafo: $|V| = n$, o número de vértices (equipamentos e instrumentos).
* **Tamanho** do grafo: $|E| = m$, o número de arestas (trechos de tubulação).
* **Passeio (*walk*):** sequência alternada $v_0, e_1, v_1, e_2, \dots, e_k, v_k$ onde cada $e_i = (v_{i-1}, v_i) \in E$. Representa fisicamente o percurso de uma molécula de fluido, podendo repetir tubulações.
* **Caminho (*path*):** um passeio sem vértices repetidos. É o objeto de interesse quando queremos saber *a rota* de um reagente entre dois pontos, sem retrocessos.
* **Trilha (*trail*):** um passeio sem arestas repetidas (mas vértices podem se repetir). Relevante na Aula 16, quando o robô de inspeção pode passar duas vezes pelo mesmo manifold, mas nunca inspeciona o mesmo trecho de duto duas vezes.
* **Ciclo (*cycle*):** um caminho fechado ($v_0 = v_k$) com $k \geq 1$ arestas e sem repetição de vértices intermediários. A existência de ciclos no grafo de tubulação indica **rotas alternativas de contingência**, tema central da Aula 15.
* **Grau de saída** $\deg^+(v)$: número de arestas que partem de $v$ (dutos que descarregam de $v$).
* **Grau de entrada** $\deg^-(v)$: número de arestas que chegam a $v$ (dutos que alimentam $v$).

### 2.2. Lema do Aperto de Mãos Dirigido

Para qualquer dígrafo $G = (V, E)$:

$$\sum_{v \in V} \deg^+(v) = \sum_{v \in V} \deg^-(v) = |E|$$

**Justificativa:** cada aresta contribui exatamente $+1$ para o grau de saída de sua origem e $+1$ para o grau de entrada de seu destino — nunca mais, nunca menos. Essa identidade é a base da verificação de consistência de qualquer P&ID digitalizado: se a soma dos graus de saída não bater com o número de tubulações cadastradas, há um erro de modelagem (duto duplicado, órfão ou com origem/destino trocados).

**Verificação na rede do notebook:** a tabela de graus topológicos calculada na Aula 11 mostra 9 tubulações. Somando a coluna `deg+`: $1+1+2+1+1+2+1+0 = 9$. Somando `deg-`: $0+0+2+1+1+2+1+2=9$. A identidade se confirma.

### 2.3. Representações Computacionais e Trade-offs

| Representação | Estrutura | Custo de espaço | Consulta "existe aresta $(u,v)$?" | Quando usar |
| --- | --- | --- | --- | --- |
| Matriz de adjacência | `float[n][n]` | $O(n^2)$ | $O(1)$ | Grafos densos ou quando se precisa de álgebra matricial (Aula 12) |
| Lista de adjacência | `dict[str, list]` | $O(n + m)$ | $O(\deg(u))$ | Grafos esparsos — típico em plantas reais, onde $m \approx n$ a $2n$ |
| Matriz de incidência | `int[n][m]` | $O(n \cdot m)$ | — (usada para balanço, não busca) | Balanço de massa e análise de ciclos (Aula 12) |

A classe `GrafoTubulacao` implementada no notebook desta aula adota a **matriz de adjacência dupla**: uma matriz binária (`adj_binaria`, para existência de conexão) e uma matriz de pesos (`adj_pesos`, inicializada com $\infty$ fora da diagonal e $0$ na diagonal — a convenção padrão para algoritmos de caminho mínimo, pois $\infty$ representa "sem rota direta" e $0$ representa "custo de ficar no mesmo nó").

### 2.4. Grafo Simples vs. Multigrafo

Um detalhe frequentemente negligenciado: se dois equipamentos são conectados por **duas tubulações paralelas** (comum em sistemas críticos, como alimentação dupla de amônia por redundância), o modelo deixa de ser um grafo simples e passa a ser um **multigrafo**, pois existe mais de uma aresta entre o mesmo par ordenado de vértices. A implementação com matriz de adjacência simples (como a do notebook) não captura essa redundância diretamente — seria necessário armazenar uma lista de pesos por par $(u,v)$ ao invés de um escalar. Isso é retomado como exercício.

---

## 3. Exemplo Resolvido

**Pergunta:** Qual é o grau de saída total da rede e o que ele representa fisicamente?

**Resolução:** Some a coluna `deg+` da tabela topológica: $\deg^+(\text{TK-301}) + \deg^+(\text{TK-302}) + \deg^+(\text{MAN-101}) + \deg^+(\text{P-101}) + \deg^+(\text{P-102}) + \deg^+(\text{R-101}) + \deg^+(\text{TK-303}) + \deg^+(\text{GRAN-201})$
$= 1 + 1 + 2 + 1 + 1 + 2 + 1 + 0 = 9$.

Fisicamente, esse total representa o número de válvulas de bloqueio de saída instaladas na malha — uma informação diretamente utilizável na lista de instrumentação (*instrument index*) da planta.

---

## 4. Atividades de Investigação

1. Prove, a partir do Lema do Aperto de Mãos Dirigido, que é impossível existir um dígrafo com exatamente um vértice de grau de saída ímpar e todos os demais com grau de saída par, se a soma dos graus de entrada for par.
2. Adicione uma tubulação redundante `TK-301_NH3 -> MAN-101` (uma segunda linha física) e discuta por que a matriz de adjacência binária simples não representa corretamente essa redundância. Proponha uma estrutura de dados alternativa.
3. Classifique cada um dos 9 trechos da rede padrão como pertencente a um caminho, uma trilha ou nenhum dos dois, considerando a rota completa de `TK-301_NH3` até `GRAN-201` passando por `TK-303_Pulmao`.
4. Se o granulador `GRAN-201` tivesse uma saída de retorno para `R-101` (reprocessamento de finos), quantos ciclos simples passariam a existir na rede? Enumere-os.

---

## 5. Entregável da Aula 11

* **Classe `GrafoTubulacao` em Python:** Estrutura orientada a objetos com suporte a nós ISA-5.1, inserção de tubulações com peso e válvula associada, e exportação das matrizes de adjacência.
