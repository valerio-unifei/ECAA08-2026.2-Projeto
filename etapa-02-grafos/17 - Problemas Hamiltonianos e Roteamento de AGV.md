# Aula 17: Problemas Hamiltonianos e Roteamento Logístico de AGVs (TSP)

## 1. Fundamentos Matemáticos: Ciclos Hamiltonianos e o Caixeiro-Viajante (TSP)

O **Problema do Caixeiro-Viajante (TSP)** busca o Ciclo Hamiltoniano de menor custo que visita todos os vértices uma única vez e retorna à base, resolvido por heurísticas construtivas (Nearest Neighbor) e busca local (2-Opt).

---

## 2. Aprofundamento Teórico

### 2.1. Ciclo Hamiltoniano vs. Circuito Euleriano — Contraste Fundamental

É essencial não confundir os dois problemas centrais desta etapa:

| Propriedade | Circuito Euleriano (Aula 16) | Ciclo Hamiltoniano (Aula 17) |
| --- | --- | --- |
| O que visita | Cada **aresta** exatamente uma vez | Cada **vértice** exatamente uma vez |
| Vértices podem repetir? | Sim (desde que a aresta usada seja diferente) | Não, exceto o vértice inicial/final |
| Critério de existência | Simples e verificável em $O(|V|+|E|)$ (Teorema de Euler) | **Não existe critério simples conhecido**; o problema de decisão é NP-completo |
| Aplicação típica na planta | Robô de inspeção percorrendo toda a tubulação | AGV coletando amostras em pontos específicos, sem necessidade de percorrer todo o duto |

Essa é a razão nomeada do nome: "Euleriano" para arestas, "Hamiltoniano" em homenagem a William Rowan Hamilton, que estudou o problema de percorrer todos os vértices de um dodecaedro em 1857 (o *Icosian Game*).

### 2.2. Por que o TSP é Computacionalmente Difícil

O TSP pertence à classe **NP-difícil** (e sua versão de decisão, "existe um ciclo hamiltoniano de custo $\leq k$?", é **NP-completa**). Isso significa que, com o conhecimento atual, não existe algoritmo conhecido capaz de resolvê-lo exatamente em tempo polinomial para o caso geral. A abordagem por **força bruta** (testar todas as permutações possíveis dos $n$ vértices) tem complexidade $O(n!)$: para $n=6$ locais (como na rede do notebook), já são $5! = 120$ permutações distintas a avaliar (fixando o ponto de partida); para $n=20$, seriam $19! \approx 1{,}2 \times 10^{17}$ permutações — computacionalmente inviável mesmo para os supercomputadores mais rápidos atuais.

A programação dinâmica de **Held-Karp** (1962) melhora esse cenário para $O(n^2 \cdot 2^n)$, ainda exponencial, mas significativamente melhor que o fatorial — viável para $n$ até aproximadamente 20-25 vértices. Para instâncias maiores, como o roteamento de uma frota de AGVs em uma planta com centenas de pontos de coleta, recorre-se a **heurísticas**, que não garantem a solução ótima, mas produzem soluções de boa qualidade em tempo polinomial.

### 2.3. Heurística do Vizinho Mais Próximo (*Nearest Neighbor*) — Análise

A heurística implementada em `vizinho_mais_proximo` constrói a rota gulosamente: a cada passo, salta para o local não visitado mais próximo do local atual. Complexidade: $O(n^2)$, pois a cada um dos $n$ passos é necessário buscar o mínimo entre até $n$ candidatos restantes.

**Limitação conhecida:** essa heurística pode ficar presa em decisões "gulosas" que parecem boas localmente, mas que deixam um "salto longo" obrigatório no final da rota — geralmente quando o último vértice remanescente está distante de todos os demais. Formalmente, é possível construir instâncias em que o Vizinho Mais Próximo produz uma rota até $\Theta(\log n)$ vezes pior que a ótima, no pior caso.

### 2.4. Refinamento por Busca Local 2-Opt — Análise

A técnica **2-Opt** (Croes, 1958) corrige parte dessa limitação: dada uma rota, ela testa a **remoção de duas arestas não-adjacentes** e a reconexão dos dois segmentos resultantes na única outra forma possível (invertendo um dos segmentos), aceitando a troca sempre que ela reduzir o custo total. A implementação de `otimizar_2opt` faz exatamente isso, iterando `melhor[:i] + melhor[i:j+1][::-1] + melhor[j+1:]` até que nenhuma troca melhore o resultado (convergência para um **ótimo local**).

**Complexidade:** cada iteração completa de varredura por todos os pares $(i,j)$ custa $O(n^2)$ e, na pior das hipóteses, é necessário repetir a varredura $O(n)$ vezes até a convergência, resultando em $O(n^3)$ no pior caso — ainda polinomial, portanto tratável mesmo para centenas de vértices.

**Por que a combinação NN + 2-Opt é uma boa prática:** a heurística construtiva (NN) fornece um ponto de partida razoável rapidamente ($O(n^2)$), e a busca local (2-Opt) refina esse ponto de partida, eliminando os "cruzamentos" óbvios de rota (geometricamente, o 2-Opt elimina qualquer par de arestas que se cruzem no plano, pois a reconexão sem cruzamento é sempre igual ou mais curta pela desigualdade triangular).

### 2.5. Cota Inferior e Qualidade da Solução

Uma pergunta natural é: "o quão longe a solução heurística está do ótimo verdadeiro?" Sem calcular o ótimo exato (inviável para $n$ grande), pode-se estimar uma **cota inferior** — por exemplo, a soma dos dois menores pesos de aresta incidentes a cada vértice, dividida por dois (relaxação de emparelhamento), ou o custo de uma **Árvore Geradora Mínima** (MST) sobre os vértices, que é sempre $\leq$ o custo do ciclo hamiltoniano ótimo (pois remover uma aresta do ciclo ótimo produz uma árvore geradora, e a MST é a árvore geradora de menor custo possível). Essa técnica de cota inferior via MST é a base do algoritmo de aproximação com garantia $2\times$ o ótimo, e do algoritmo de **Christofides** (1976), que garante $1{,}5\times$ o ótimo para instâncias que satisfazem a desigualdade triangular — não implementado nesta etapa, mas relevante para consulta futura.

---

## 3. Exemplo Resolvido

**Pergunta:** Por que a rota do 2-Opt (`Lab -> TK301 -> TK302 -> R101 -> GRAN201 -> TK303`, custo $260{,}0\,\text{m}$) é melhor que a rota inicial do Vizinho Mais Próximo (`Lab -> TK301 -> TK302 -> R101 -> TK303 -> GRAN201`, custo $280{,}0\,\text{m}$), mesmo compartilhando os quatro primeiros passos?

**Resolução:** As duas rotas diferem apenas na ordem dos dois últimos locais antes de retornar ao `Lab`. Na rota NN, o segmento final é `R101 -> TK303 -> GRAN201 -> Lab` (usando a matriz de distâncias: $25 + 35 + 110 = 170$). Na rota 2-Opt, o segmento final é `R101 -> GRAN201 -> TK303 -> Lab` ($40 + 35 + 75 = 150$). A troca de ordem entre `TK303` e `GRAN201`, mantendo os mesmos quatro pontos, evitou o "salto longo e caro" de volta ao `Lab` a partir de `GRAN201` (que custaria $110$), substituindo-o pelo retorno mais barato a partir de `TK303` (que custa $75$) — exatamente o tipo de correção geométrica que o 2-Opt foi projetado para encontrar, eliminando o cruzamento implícito de trajetória.

---

## 4. Atividades de Investigação

1. Calcule o custo de todas as $5! = 120$ permutações possíveis (fixando `Lab` como início) usando força bruta e confirme se a solução do 2-Opt encontrada pelo notebook é de fato a ótima global para esta instância pequena.
2. Execute a heurística do Vizinho Mais Próximo a partir de um local diferente (por exemplo, `TK303`, índice 4) e compare a rota inicial resultante com a obtida a partir de `Lab`.
3. Calcule a Árvore Geradora Mínima (MST) da matriz de distâncias fornecida e compare seu custo total com o custo da rota hamiltoniana ótima encontrada. Confirme que a MST é uma cota inferior válida.
4. Pesquise o Algoritmo de Christofides e explique, em termos gerais, como ele combina uma MST com um emparelhamento mínimo para garantir uma solução a no máximo $1{,}5\times$ o custo ótimo.

---

## 5. Entregável da Aula 17

* **Otimizador Logístico de AGV em Python:** Implementação da heurística Nearest Neighbor combinada com refinamento local 2-Opt para o trajeto dos veículos industriais.
