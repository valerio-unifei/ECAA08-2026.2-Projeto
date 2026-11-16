# Modelagem e Análise Formal com Redes de Petri: Árvore de Atingibilidade e Árvore de Cobertura
## Estudo de Caso: Sistema de Síntese, Neutralização e Tancagem do Complexo Industrial NPK

---

### 1. Introdução Didática: Por que Redes de Petri na Automação Química?

Em processos industriais contínuos e em batelada — como o **Setor 100 (Síntese e Neutralização no Reator `R-101`)** e o **Setor 300 (Tancagem de Utilidades e *Slurry* `TK-301/302/303`)** do Complexo NPK — os eventos ocorrem de forma **concorrente, assíncrona e sujeita a restrições físicas rígidas** (capacidade máxima de tanques, limite de pressão $P < 180\text{ bar}$ e concentração de amônia $\text{NH}_3 < 25\text{ ppm}$).

Enquanto autômatos finitos sofrem com a explosão combinatória de estados ao modelar paralelismo, as **Redes de Petri (RdP)** oferecem uma representação gráfica e algébrica compacta para verificar formalmente propriedades críticas de segurança e operação antes mesmo de escrever uma linha de código no CLP:
* **Limitação (*Boundedness*):** Garante que um tanque pulmão (ex.: `TK-303`) nunca transbordará.
* **Ausência de Bloqueio (*Deadlock-freedom*):** Garante que o ciclo de síntese e transferência não travará indefinidamente aguardando um recurso compartilhado.
* **Segurança de Estados (*Safety*):** Comprova matematicamente que estados proibidos (ex.: reação exotérmica ativa com válvula de descarga fechada e alarme de sobrepressão ativo) são **inatingíveis**.

---

### 2. Definição Formal da Rede de Petri Marcada

Uma Rede de Petri marcada é definida pela quíntupla:
$$N = (P, T, Pre, Post, M_0)$$

Onde:
* **$P = \{p_1, p_2, \dots, p_m\}$:** Conjunto finito de **Lugares** (representam condições locais, estados de equipamentos ou disponibilidade de insumos/capacidade).
* **$T = \{t_1, t_2, \dots, t_n\}$:** Conjunto finito de **Transições** ($P \cap T = \emptyset$, representam eventos ou ações de controle).
* **$Pre: P \times T \to \mathbb{N}$:** Matriz de pré-incidência (arcos que saem dos lugares para as transições; define os pré-requisitos para disparo).
* **$Post: P \times T \to \mathbb{N}$:** Matriz de pós-incidência (arcos que saem das transições para os lugares; define o efeito após o disparo).
* **$M_0: P \to \mathbb{N}$:** Vetor de **Marcação Inicial**, indicando o número de fichas (*tokens*) em cada lugar no instante $k = 0$.

#### Regra de Habilitação e Disparo (Equação de Estado)
Uma transição $t_j \in T$ está **habilitada** em uma marcação $M$ se, e somente se:
$$M(p_i) \ge Pre(p_i, t_j), \quad \forall p_i \in P$$

Ao disparar $t_j$, o sistema evolui para uma nova marcação $M'$ dada pela equação fundamental:
$$M' = M + C \cdot \vec{e}_j$$
onde $C = Post - Pre$ é a **Matriz de Incidência** ($m \times n$) e $\vec{e}_j$ é o vetor canônico correspondente à transição $t_j$.

---

### 3. Modelagem Aplicada à Planta Química NPK (Setores 100 e 300)

Para ilustrar rigorosamente tanto a **Árvore de Atingibilidade** (sistema limitado) quanto a **Árvore de Cobertura** (sistema ilimitado com símbolo $\omega$), modelaremos o subsistema acoplado de **Dosagem, Reação no `R-101` e Acúmulo no Tanque Pulmão `TK-303`**.

#### 3.1. Mapeamento dos Lugares ($P$) e Transições ($T$)

| Símbolo | Descrição Física na Planta NPK | Interpretação das Fichas (*Tokens*) |
| :---: | :--- | :--- |
| **$p_1$** | Reator `R-101` Ocioso / Pronto para Batelada | $1$ ficha = reator limpo, despressurizado e disponível. |
| **$p_2$** | Insumos (`NH3` via `TK-301` e `H3PO4` via `TK-302`) Liberados | $1$ ficha = válvulas `XV-101` e `XV-102` abertas e dosagem concluída. |
| **$p_3$** | Reação Exotérmica em Curso (`R-101` Ativo) | $1$ ficha = mistura em neutralização monitorada por `PT-101` e `TT-101`. |
| **$p_4$** | Tanque Pulmão de *Slurry* (`TK-303`) | $k$ fichas = lotes de *slurry* acumulados aguardando granulação (`GRAN-201`). |
| **$p_5$** | Falha / Intertravamento de Segurança (`ESD-100` / Alta Pressão) | $1$ ficha = bloqueio físico acionado (`PT-101` $\ge 180\text{ bar}$ ou `AT-101` $\ge 25\text{ ppm}$). |

| Símbolo | Evento / Ação de Controle | Pré-condições ($Pre$) | Pós-condições ($Post$) |
| :---: | :--- | :--- | :--- |
| **$t_1$** | **Iniciar Dosagem de Reagentes** (Abrir `XV-101`/`XV-102`) | $p_1$ ($1$) | $p_2$ ($1$) |
| **$t_2$** | **Iniciar Neutralização Exotérmica** (`R-101`) | $p_2$ ($1$) | $p_3$ ($1$) |
| **$t_3$** | **Concluir Reação e Transferir *Slurry* para `TK-303`** | $p_3$ ($1$) | $p_1$ ($1$), $p_4$ ($1$) |
| **$t_4$** | **Disparar Intertravamento `ESD-100`** (Anomalia Térmica/Pressão) | $p_3$ ($1$) | $p_5$ ($1$) |
| **$t_5$** | **Reset Manual após Manutenção e Alívio Seguro** | $p_5$ ($1$) | $p_1$ ($1$) |

---

### 4. Parte A: Árvore de Atingibilidade (Subsistema Limitado)

Inicialmente, analisamos o **ciclo de controle do Reator `R-101`** considerando os lugares $\{p_1, p_2, p_3, p_5\}$ (antes de acoplar o acúmulo irrestrito de estoque em $p_4$).

* **Marcação Inicial:** $M_0 = [1, 0, 0, 0]^T$ (Reator pronto, sem dosagem, sem reação, sem falha).

#### Construção Passo a Passo:
1. **Nó Raiz $M_0 = [1, 0, 0, 0]^T$:**
   * Apenas $t_1$ está habilitada ($M_0(p_1) = 1 \ge 1$).
   * Disparando $t_1$: $M_1 = [0, 1, 0, 0]^T$ (*Nó Novo*).
2. **Nó $M_1 = [0, 1, 0, 0]^T$:**
   * Apenas $t_2$ está habilitada.
   * Disparando $t_2$: $M_2 = [0, 0, 1, 0]^T$ (*Nó Novo* — Reação exotérmica ativa).
3. **Nó $M_2 = [0, 0, 1, 0]^T$ (Conflito Estrutural / Ramificação):**
   * Duas transições estão habilitadas simultaneamente: **$t_3$** (operação normal) e **$t_4$** (falha crítica de processo).
   * Disparando $t_3$: $M_3 = [1, 0, 0, 0]^T$. Como $M_3 = M_0$, este nó é marcado como **Duplicado (Folha da Árvore)** e não é expandido novamente.
   * Disparando $t_4$: $M_4 = [0, 0, 0, 1]^T$ (*Nó Novo* — Sistema em estado seguro `ESD-100`).
4. **Nó $M_4 = [0, 0, 0, 1]^T$:**
   * Apenas $t_5$ (Reset após inspeção) está habilitada.
   * Disparando $t_5$: $M_5 = [1, 0, 0, 0]^T = M_0$ (**Nó Duplicado**).

```
                    M0 = [1, 0, 0, 0]  (Reator Pronto)
                           |
                          t1 (Abrir XV-101/102)
                           v
                    M1 = [0, 1, 0, 0]  (Dosagem Concluída)
                           |
                          t2 (Iniciar Reação R-101)
                           v
                    M2 = [0, 0, 1, 0]  (Reação Ativa)
                      /          \
         t3 (Normal) /            \ t4 (Sobrepressão/NH3)
                    v              v
       M3 = [1, 0, 0, 0]        M4 = [0, 0, 0, 1]  (ESD-100 Ativo)
          (Duplicado)                  |
                                      t5 (Reset Seguro)
                                       v
                                M5 = [1, 0, 0, 0]
                                   (Duplicado)
```

#### Diagnóstico de Engenharia pela Árvore de Atingibilidade:
* **Finitude e Limitação ($k$-bounded):** O conjunto de marcações atingíveis $R(N, M_0) = \{M_0, M_1, M_2, M_4\}$ é finito e $1$-limitado (*Safe*). Nunca haverá duas bateladas simultâneas dentro do mesmo reator `R-101`.
* **Vivacidade (*Liveness*):** Não existem nós terminais sem saída (*Deadlocks*). Mesmo após uma falha grave ($M_4$), existe um caminho de recuperação controlado ($t_5 \to M_0$).
* **Exclusão Mútua:** É impossível atingir uma marcação onde $M(p_3) = 1$ e $M(p_5) = 1$ simultaneamente — garantindo que a reação seja interrompida assim que o `ESD-100` atuar.

---

### 5. Parte B: Árvore de Cobertura (Sistemas Ilimitados e o Símbolo $\omega$)

Agora incluímos o **Tanque Pulmão `TK-303` ($p_4$)** sem modelar o escoamento para o Setor 200 (`GRAN-201`). Cada vez que o ciclo $t_1 \to t_2 \to t_3$ é concluído, uma nova ficha de *slurry* é depositada em $p_4$.

Se tentássemos construir a Árvore de Atingibilidade convencional, teríamos uma sequência infinita de estados distintos:
$$[1,0,0,0,0] \xrightarrow{t_1 t_2 t_3} [1,0,0,1,0] \xrightarrow{t_1 t_2 t_3} [1,0,0,2,0] \xrightarrow{t_1 t_2 t_3} \dots \to \infty$$

#### Algoritmo de Karp-Miller (Introdução de $\omega$)
Para manter a árvore finita e decidir propriedades de limitação, aplicamos a **Árvore de Cobertura**:
> **Regra de Substituição ($\omega$):** Se ao gerar uma nova marcação $M'$, existir um nó ancestral $M$ no caminho da raiz até $M'$ tal que $M' \ge M$ (componente a componente) e $M' \neq M$, então para cada lugar $p_i$ onde $M'(p_i) > M(p_i)$, substituímos $M'(p_i)$ pelo símbolo **$\omega$** (que representa um número arbitrariamente grande de fichas, com a aritmética $\omega \pm c = \omega$).

#### Evolução do Vetor Completo $M = [p_1, p_2, p_3, p_4, p_5]^T$:
1. $M_0 = [1, 0, 0, 0, 0]^T$
2. $M_0 \xrightarrow{t_1} M_1 = [0, 1, 0, 0, 0]^T$
3. $M_1 \xrightarrow{t_2} M_2 = [0, 0, 1, 0, 0]^T$
4. $M_2 \xrightarrow{t_3} M'_3 = [1, 0, 0, 1, 0]^T$
   * **Comparação com o ancestral $M_0 = [1, 0, 0, 0, 0]^T$:** Observamos que $M'_3 \ge M_0$ em todas as coordenadas, e estritamente maior na coordenada $p_4$ ($1 > 0$).
   * **Aplicação de $\omega$:** O nó torna-se $M_3 = [1, 0, 0, \omega, 0]^T$.
5. Expandindo $M_3 = [1, 0, 0, \omega, 0]^T$:
   * $M_3 \xrightarrow{t_1} M_4 = [0, 1, 0, \omega, 0]^T$
   * $M_4 \xrightarrow{t_2} M_5 = [0, 0, 1, \omega, 0]^T$
   * $M_5 \xrightarrow{t_3} M_6 = [1, 0, 0, \omega + 1, 0]^T = [1, 0, 0, \omega, 0]^T = M_3$ (**Nó Duplicado — Encerra o ramo!**)
   * $M_5 \xrightarrow{t_4} M_7 = [0, 0, 0, \omega, 1]^T \xrightarrow{t_5} M_8 = [1, 0, 0, \omega, 0]^T = M_3$ (**Nó Duplicado!**)

```
                 M0 = [1, 0, 0, 0, 0]
                          | t1
                 M1 = [0, 1, 0, 0, 0]
                          | t2
                 M2 = [0, 0, 1, 0, 0]
                    /            \
                t3 /              \ t4
                  v                v
     M3 = [1, 0, 0, w, 0]     M_err = [0, 0, 0, 0, 1]
          | t1                     | t5
     M4 = [0, 1, 0, w, 0]     M_rec = [1, 0, 0, 0, 0] (Duplicado de M0)
          | t2
     M5 = [0, 0, 1, w, 0]
        /            \
    t3 /              \ t4
      v                v
[1, 0, 0, w, 0]   [0, 0, 0, w, 1]
 (Duplicado M3)        | t5
                       v
                  [1, 0, 0, w, 0]
                   (Duplicado M3)
```

---

### 6. Correção de Engenharia: Tornando o Tanque `TK-303` Limitado (Capacidade Finita)

A presença do símbolo **$\omega$** na coordenada $p_4$ da Árvore de Cobertura emite um **alerta formal de projeto**: *se o Setor 200 (Granulação) parar ou operar em vazão inferior ao Setor 100, o tanque pulmão `TK-303` sofrerá transbordamento físico*.

#### Solução via Lugar Complementar ($p_{\text{cap}}$)
Para impor uma capacidade máxima física de $K = 3$ lotes no tanque `TK-303` e eliminar o $\omega$, adicionamos:
1. Um **Lugar Complementar** $p_6$ (*Espaço Livre no `TK-303`*) com marcação inicial $M_0(p_6) = 3$.
2. Uma **Transição de Consumo** $t_6$ (*Enviar Lote de Slurry para Granulação `GRAN-201`*).

Com isso, o invariante linear de conservação de massa do tanque passa a ser garantido estruturalmente pela equação:
$$M(p_4) + M(p_6) = 3, \quad \forall M \in R(N, M_0)$$

Assim, $t_3$ (transferência do reator `R-101` para `TK-303`) só estará habilitada se houver pelo menos $1$ unidade de espaço livre em $p_6$ ($M(p_6) \ge 1$), garantindo que a rede volte a ter uma **Árvore de Atingibilidade finita e livre de $\omega$**.

---

### 7. Resumo Comparativo para Projeto de Automação

| Critério | Árvore de Atingibilidade | Árvore de Cobertura |
| :--- | :--- | :--- |
| **Aplicabilidade** | Apenas Redes de Petri **Limitadas** (*Bounded*). | **Qualquer** Rede de Petri (limitada ou ilimitada). |
| **Representação de Crescimento** | Exata (números naturais $\mathbb{N}$). | Aproximada via símbolo **$\omega$** para lugares ilimitados. |
| **Decidibilidade** | Decide todas as propriedades comportamentais exatas. | Decide limitação ($k$-boundedness), cobertura de marcações e existência de $\omega$. |
| **Uso na Planta NPK** | Validação de intertravamentos de segurança (`ESD-100`, `XV-101/102`) e exclusão mútua. | Detecção de gargalos e risco de transbordamento em tanques intermediários (`TK-303`). |