# Aula 16: Problemas Eulerianos e Inspeção Autônoma de Infraestrutura

## 1. Fundamentos Matemáticos: Teorema de Euler e Circuitos Eulerianos

Um **Circuito Euleriano** em um grafo não-dirigido conexo existe se e somente se **todos os vértices tiverem grau par**. Em grafos dirigidos, exige-se $\text{deg}^+(v) = \text{deg}^-(v)$ para todo nó.

---

## 2. Aprofundamento Teórico

### 2.1. Contexto Histórico: O Problema das Pontes de Königsberg

O estudo de Teoria dos Grafos como disciplina matemática nasce formalmente em **1736**, quando Leonhard Euler resolveu o problema das sete pontes de Königsberg: a cidade (atual Kaliningrado) tinha quatro regiões de terra conectadas por sete pontes sobre o rio Pregel, e a pergunta era se existia um passeio que atravessasse cada ponte exatamente uma vez, retornando ao ponto de partida. Euler provou que **não**, e ao fazê-lo formulou o critério geral que hoje leva seu nome — sendo por isso considerado o marco fundador da Teoria dos Grafos. A aula de hoje aplica exatamente o mesmo raciocínio a um problema estruturalmente idêntico: percorrer cada tubulação exatamente uma vez para inspeção.

### 2.2. Definição Formal e Prova do Teorema (Caso Não-Dirigido)

**Teorema (Euler, 1736):** Um multigrafo conexo $G$ possui um circuito euleriano se e somente se todo vértice tem grau par.

**Prova (necessidade):** se existe um circuito euleriano, cada vez que o circuito "passa por" um vértice $v$ (sem ser o início/fim), ele consome uma aresta de entrada e uma de saída — contribuindo $+2$ ao grau de $v$. Como o circuito é fechado, mesmo o vértice inicial/final tem suas arestas de entrada e saída emparelhadas dessa forma. Logo, o grau de todo vértice deve ser par.

**Prova (suficiência, esboço construtivo):** se todos os graus são pares, é possível construir um circuito fechado a partir de qualquer vértice (pois nunca "ficamos presos" sem saída — sempre que entramos em um vértice por uma aresta não usada, resta um número par de arestas não usadas, logo pelo menos uma saída livre, exceto no vértice inicial ao completar o ciclo). Se esse circuito não usar todas as arestas, o subgrafo restante ainda tem todos os graus pares e compartilha pelo menos um vértice com o circuito já construído (pois o grafo é conexo); um novo circuito é construído nesse subgrafo e "costurado" ao anterior no vértice compartilhado. Repetindo esse processo, esgotam-se todas as arestas. $\blacksquare$

Esse argumento construtivo é precisamente o que o **Algoritmo de Hierholzer** (1873) formaliza e implementa de maneira eficiente.

### 2.3. Adaptação para Dígrafos

Em um grafo dirigido, o critério análogo é $\deg^+(v) = \deg^-(v)$ para todo vértice — ou seja, todo nó deve "receber" tantas arestas quanto "emite". Isso reflete a intuição de conservação: se o robô de inspeção entra em um vértice $k$ vezes ao longo do circuito, deve sair $k$ vezes também. A rede da malha de tubulação implementada no notebook usa arestas **não-dirigidas** (`self.adj[u].append((v, id_duto)); self.adj[v].append((u, id_duto))`), pois a inspeção de corrosão trafega igualmente em ambos os sentidos do duto — daí o uso do critério de grau par simples, e não do critério dirigido.

### 2.4. O Algoritmo de Hierholzer — Análise Detalhada

O algoritmo implementado em `calcular_circuito_hierholzer` segue a estratégia de **pilha explícita com remoção de arestas visitadas**:

1. Empilha o vértice inicial.
2. Enquanto o vértice no topo da pilha (`u`) tiver arestas não visitadas, avança para um vizinho `v` (removendo a aresta de ambas as listas de adjacência, já que o grafo é não-dirigido) e empilha `v`.
3. Quando o vértice no topo não tem mais arestas disponíveis, ele é desempilhado e anexado ao circuito final.
4. Ao término, o circuito é invertido (pois foi construído de trás para frente).

**Complexidade:** $O(|E|)$, pois cada aresta é removida (visitada) exatamente uma vez, e cada vértice entra e sai da pilha um número de vezes proporcional ao seu grau. Essa é a complexidade ótima possível para o problema, já que qualquer solução precisa necessariamente examinar cada aresta ao menos uma vez.

### 2.5. Relação com o Problema do Carteiro Chinês

Quando a rede **não** satisfaz o critério de Euler (existem vértices de grau ímpar), o problema de "percorrer todas as arestas com o menor custo total, permitindo repetições onde necessário" é conhecido como **Problema do Carteiro Chinês** (*Chinese Postman Problem*, Kwan Mei-Ko, 1962). A solução consiste em: (i) identificar os vértices de grau ímpar (sempre em número par, pelo Lema do Aperto de Mãos); (ii) encontrar o **emparelhamento de custo mínimo** entre pares desses vértices ímpares (usando os menores caminhos entre eles, calculáveis com o Dijkstra da Aula 14); (iii) duplicar as arestas dos caminhos desse emparelhamento, tornando artificialmente todos os graus pares; (iv) aplicar Hierholzer normalmente no grafo aumentado. Esse problema é resolvido em tempo polinomial (ao contrário do problema Hamiltoniano da Aula 17), pois o emparelhamento mínimo em grafos gerais é solucionável em $O(n^3)$ pelo Algoritmo de Edmonds.

---

## 3. Exemplo Resolvido

**Pergunta:** Verifique manualmente, pelo Lema do Aperto de Mãos, que a rede de inspeção do notebook (9 dutos não-dirigidos) tem todos os graus pares.

**Resolução:** Cada duto contribui $+1$ ao grau de cada um de seus dois extremos. Contando as incidências por vértice na lista `adicionar_duto`:
* `Base`: aparece em `d1` e `d6` → grau $2$.
* `TK301`: aparece em `d1, d2, d7, d9` → grau $4$.
* `MAN101`: aparece em `d2, d3, d8, d9` → grau $4$.
* `R101`: aparece em `d3, d4, d7, d8` → grau $4$.
* `TK303`: aparece em `d4, d5` → grau $2$.
* `GRAN201`: aparece em `d5, d6` → grau $2$.

Todos os graus são pares ($2$ ou $4$), confirmando o resultado `Grafo é Euleriano: True` reportado pelo notebook.

---

## 4. Atividades de Investigação

1. Adicione um décimo duto `GRAN201 -> TK303` (paralelo ao `d5` existente) e verifique se o grafo permanece euleriano. Quais vértices passam a ter grau ímpar?
2. Para o cenário do item anterior, aplique manualmente a estratégia do Problema do Carteiro Chinês: quais arestas precisariam ser duplicadas para restaurar a paridade de todos os graus?
3. Compare o circuito gerado por `calcular_circuito_hierholzer` partindo de `Base` com um circuito hipotético partindo de `R101`. Ambos são igualmente válidos? O comprimento total percorrido muda?
4. Pesquise a solução do problema original das Sete Pontes de Königsberg e desenhe o grafo correspondente, identificando os graus de cada uma das quatro regiões de terra.

---

## 5. Entregável da Aula 16

* **Algoritmo de Rota de Inspeção Euleriana em Python:** Mapeamento da malha física e cálculo do circuito ótimo de inspeção de corrosão com o algoritmo de Hierholzer.
