# Avaliação da Qualidade das Apresentações (Perspectiva de Professor Senior de Matemática Discreta)

Abaixo, apresento a avaliação consolidada para cada grupo. A nota reflete a **profundidade matemática**, a **correção conceitual**, a **integração entre teoria e aplicação (engenharia)**, a **clareza expositiva** e a **completude em relação aos 9 tópicos obrigatórios**.

---

### **Grupo 1 — AGV "Escada Corte" (Galpão Industrial)**
**Qualidade: `média-alta`**

*   **Pontos Fortes:** Modelagem completa como dígrafo ponderado; distinção clara entre BFS (menor saltos) e DFS (contingência); aplicação correta de Dijkstra com *min-heap* e justificativa energética; tratamento de obstáculos via peso infinito; resolução Euleriana via Carteiro Chinês + Hierholzer (graus ímpares); abordagem Hamiltoniana (TSP) com *Nearest Neighbor* + *2-OPT* e menção à complexidade fatorial; simulador com 5 cenários funcionais.
*   **Pontos de Atenção:** Confusão conceitual ao explicar Matriz de Incidência (descreveu propriedades da Adjacência); apresentador admitiu dificuldade de explicar matrizes "só falando"; avaliador externo questionou a adequação do cenário (AGV em galpão vs entrega urbana).

---

### **Grupo 2 — "Arco Index" (Máquina Envasadora)**
**Qualidade: `alta`**

*   **Pontos Fortes:** Modelagem impecável do processo industrial em 5 etapas; definição precisa de vértices (insumos), arcos (fluxo) e graus; uso de **4 matrizes** (Incidência, Adjacência, Custo, Ciclo) com propósitos distintos; BFS/DFS com objetivos claros (alcance vs contingência); Dijkstra para minimização de tempo; Teste de resiliência via bloqueio manual; Euleriano com demonstração numérica de transição circuito/trilha (graus pares/ímpares); Hamiltoniano com métricas comparativas (280s vs 260s); **Simulador extremamente robusto** (6 visões, painel interativo, bloqueio em tempo real, 5 modos de análise).
*   **Pontos de Atenção:** Pequenas hesitações verbais (esqueceu "Incidência", "Vizinho Mais Próximo"), mas sem prejuízo técnico.

---

### **Grupo 3 — Planta de Engarrafamento (Bebidas)**
**Qualidade: `alta`**

*   **Pontos Fortes:** Rigor engenharia de alto nível: redundância física (dobramento de componentes), Lei de Kirchhoff ($B \times Q = S$) aplicada a balanço de massa/vazão, Matriz de Incidência com convenção $-1/+1$, Matriz de Adjacência com atualização dinâmica. BFS justificado para evitar válvulas (desgaste), DFS para mapeamento de contingência. Dijkstra ("Digits") com comparação prática vs BFS (bypass +2m). **Tolerância a falhas excepcional**: decisão em 0.020ms, conectividade dupla, protocolo de emergência (golpe de aríete, válvula de alívio). Euleriano para robô NDT (graus pares). Hamiltoniano para amostragem (NN + 2-OPT: 280m→260m, 7% bateria). Simulador em formato de *game* web com cenários progressivos.
*   **Pontos de Atenção:** Incerteza na pronúncia de "Dijkstra"; diagrama simplificado por complexidade; confusão momentânea nos números do grafo Euleriano (6 arestas / 9 vértices).

---

### **Grupo 4 — Classificação de Grãos (Arroz)**
**Qualidade: `média-alta`**

*   **Pontos Fortes:** Modelagem com 14 vértices/arestas; aplicação rigorosa da **Lei de Kirchhoff ($B \times Q = S$)** com balanço de massa real (1200 kg/h, split 75/15/10); Cálculo do número ciclomático ($\mu = 1$) identificando realimentação; BFS para intertravamento (contagem de saltos), DFS para detectar realimentação (E14); Dijkstra com *min-heap* para roteamento de falha; Testes de estresse com 4 cenários de falha + monitoramento de vazão mássica; Euleriano para limpeza preventiva (explosão orgânica) — verificação de graus pares (evitou Carteiro Chinês); Hamiltoniano para QC (Gulosa 268m → 2-OPT 218m, -18.6%, 22% bateria); Arquitetura **Multi-camadas (Material/Transporte/Estocagem)** + **Kahn** para provar DAG no fluxo de material.
*   **Pontos de Atenção:** **Matriz de Adjacência não explicitada/distinguida** (simulador mostrou comportamento de incidência); Apresentador demonstrou insegurança técnica acentuada no simulador ("não sei falar", "prefiro pular esta parte").

---

### **Grupo 5 — Biodiesel (Refinaria Batelândia)**
**Qualidade: `média`**

*   **Pontos Fortes:** Visão sistêmica em 3 zonas; Modelagem com foco em norma (ISO 5.1); **Lei de Kirchhoff/Matriz de Incidência ($B, S$)** para balanço de massa em regime permanente ($BQ=0$); Otimização termo-hidráulica via **Darcy-Weisbach** (perda de carga/temperatura) resolvida com Dijkstra + *Min-Heap*; BFS para minimização de manobras (desgaste válvulas), DFS para mapeamento de contingência (Planos B/C/D); Reconfiguração dinâmica por "peso infinito"; Euleriano para robô NDT interno (otimização bateria/manutenção); Hamiltoniano para amostragem (NN + 2-OPT); Logística com **DAG (Kahn)** + Logística Reversa.
*   **Pontos Críticos (Omissões):** **Matriz de Adjacência não citada**; Matriz de Incidência **não nomeada explicitamente** (apenas matrizes $B$ e $S$); **Ausência total de "Teste de Estresse em Malha Fechada"**; **Simulador não demonstrado** (apenas citado repositório); Bellman-Ford citado na intro mas não usado.

---

### **Grupo 6 — Drone Agrícola (Pulverização)**
**Qualidade: `média-alta`**

*   **Pontos Fortes:** Modelagem dinâmica (11→12 nós, 11→13 arestas com redundância); **Lema do Aperto de Mãos** para validação de esteiras; Integridade de dados (ID único, peso não-negativo); **3 Matrizes explicitadas** (Incidência $-1/+1$, Adjacência, Custos); Analogias didáticas BFS (ondas/FIFO) e DFS (labirinto/LIFO); Diagnóstico de desconexão via BFS; Dijkstra tipo GPS (pesos em metros) + **Validação Cruzada Estatística (1440 consultas, 100% consistência)**; Tolerância a falha com *Interlock* de segurança (Operador OK) + latência SW (0.048ms) vs HW (golpe de aríete); Euleriano (Hierholzer/"re-rose"); Hamiltoniano (NN 660m → 2-OPT 575m, +11%, confirmado por Força Bruta/Cota Inferior); Validação formal via **8 Notebooks, 86 células, 67 asserts**; Simulador didático interativo (origem/destino, bloqueios, métricas).
*   **Pontos de Atenção:** Apresentador dependeu de "colinha"; Hesitação/confusão na distinção Adjacência vs Incidência; Erro verbal nos números do grafo Euleriano ("6 arestas, 9 linhas... ao contrário"); Glitch no slide ("dismônio sumiu").

---

### **Grupo 7 — Fábrica de Paçoca**
**Qualidade: `alta`**

*   **Pontos Fortes:** Modelagem enxuta (8 vértices, 9 arestas) + **Regra de Conservação de Conexões** (validação SCADA); **Matriz de Incidência (-1, 1, 0)** para **Equilíbrio de Massa** (sem acúmulo); Identificação de **redundância independente** (moinhos) via matemática; BFS para **minimizar válvulas** (desgaste/vazamento), DFS para **auditoria de falhas**; Dijkstra com **comprovação temporal** (0.14ms SW vs 2s HW pneumático → Segurança garantida); Euleriano para inspeção (poeira) — verificação graus 2/4, *Ear Decomposition* + Hierholzer, fallback Carteiro Chinês; Hamiltoniano para AGV Qualidade (vértices) — NN + 2-OPT (eliminação cruzamentos); **Arquitetura Multi-camadas madura**: Veículos (Cíclico), Materiais (DAG + Kahn), AGV (Canais); Conformidade ANVISA/CCP; Simulador integrado mostrando Dijkstra, Falha (peso infinito), AGV (amostras), Inspeção (arestas), DAG (transporte).
*   **Pontos de Atenção:** **Matriz de Adjacência ausente**; Problemas de UI no simulador ao vivo ("controle do trem ruim").

---

### **Grupo 8 — Célula Manufatura Flexível**
**Qualidade: `alta`**

*   **Pontos Fortes:** Modelagem bimodal **Rigorosa**: Fluxo Material = **DAG** (comprovado por **Kahn** + Ausência de arestas de retorno no DFS) vs Fluxo Veículos = **Cíclico**; **Lema do Aperto de Mãos** para dimensionar esteiras (9 vértices, 8 arestas); **Matriz de Incidência + Kirchhoff ($B \times V = S$)** → Conservação de peças (não cria/perde); BFS para **minimizar comutação pneumática** (ar comprimido, atrito, desgaste); DFS como **Auditoria Estrutural** (coloração arestas: árvore/avanço/retorno) → Prova formal de DAG; Dijkstra + BFS para caminho mínimo + **Tolerância a Falhas IEC 61511** (peso infinito, recalc 0.05ms vs atuador 150ms → 100x mais rápido); Euleriano (Inspeção) — Graus pares (2/4), Fallback Carteiro Chinês (Dijkstra), Hierholzer (Tempo Linear); Hamiltoniano (Logística) — NN (98m) → 2-OPT (86.3m, -11.7m) **Validado por Força Bruta (720 caminhos)**; Simulador com 5 cenários (Nominal, Pistão, Esteira, AGV, Hierholzer) + Log tempo/custo.
*   **Pontos de Atenção:** **Matriz de Adjacência omitida**; Termo "Hamiltoniano" não usado explicitamente (chamado de TSP/Roteamento); Fim da explicação do simulador abrupto.

---

### **Grupo 9 — SCADA Hidrogênio (Alta Pressão)**
**Qualidade: `média-alta`**

*   **Pontos Fortes:** **Teoria dos Grafos como Núcleo de Decisão SCADA** (Ciclo 100ms, Processamento <1ms — **Determinismo Hard Real-Time**); Modelagem setorizada (Armazenamento 100bar-1000bar, Criogênico -40°C SAE J2601, Dispensação 700bar); **Matriz de Incidência + Vetor Massa** (Ex: XV104 confluência 3 tanques → Chiller); BFS para **Segurança Ativa** (Menor Corte / Isolamento Mínimo de Válvulas sem despressurizar planta); DFS para **Detecção de Recirculação Perigosa** (Arestas de retorno = Alarme); Dijkstra Ponderado para **Roteamento Operacional Otimizado** (Troca Tanque 101→102) + **Análise de Cortes** (Vulnerabilidade/Intertravamento Global); Euleriano (Inspeção tubulação) — Diagnóstico correto de graus ímpares (início 3, fim 1) → Solução: adicionar base do robô; Hamiltoniano (Inspeção tanques) — Falha Gulosa (cruzamento tanque 3) → Correção **2-OPT (-20m)**; **Kahn (CAM)** para Intertravamento Sequencial (Evita Deadlock/Loop Infinito); Detalhamento do **Ciclo de Varredura SCADA** (10ms Leitura, Ajuste Pesos, Dijkstra, Saída).
*   **Pontos Críticos:** **Matriz de Adjacência ausente**; **Simulador não descrito** (apenas citado); **Bellman-Ford** prometido na intro mas **não aplicado/explicado**; Esqueceu nome de **Hierholzer** ("algoritmo desse cara que eu não sei qual o nome").

---

## Resumo Comparativo

| Grupo | Nota | Destaque Principal | Principal Lacuna |
| :--- | :---: | :--- | :--- |
| **2** | **Alta** | Simulador mais completo; 4 matrizes; Euleriano numérico perfeito. | Hesitações verbais mínimas. |
| **3** | **Alta** | Engenharia de confiabilidade (Kirchhoff, Redundância, Golpe de Aríete, 0.02ms). | Pronúncia Dijkstra; Números Eulerianos confusos. |
| **7** | **Alta** | Separação conceitual Euler (arestas) vs Hamilton (vértices); Multi-camadas + Kahn; Prova tempo real SW vs HW. | Matriz Adjacência ausente; UI Simulador. |
| **8** | **Alta** | Separação formal DAG (Kahn/DFS) vs Cíclico; Validação Força Bruta TSP; Norma IEC 61511; Hierholzer Linear. | Matriz Adjacência ausente; Fim abrupto. |
| **1** | **Média-Alta** | Carteiro Chinês + Hierholzer; TSP Fatorial; 5 Cenários Simulador. | Confusão Incidência/Adjacência; Cenário questionado. |
| **4** | **Média-Alta** | Kirchhoff + Balanço Massa Real + Ciclomático; Multi-camadas + Kahn; Euleriano (Explosão). | Matriz Adjacência confusa; Apresentador inseguro no Simulador. |
| **6** | **Média-Alta** | Validação Cruzada 1440 queries; Interlock Segurança; Força Bruta TSP; 8 Notebooks/67 Asserts. | "Colinha"; Confusão Matrizes/Numeração Euleriano. |
| **9** | **Média-Alta** | SCADA Real-Time (100ms/1ms); BFS Corte Mínimo; DFS Recirculação; Kahn Intertravamento; 2-OPT Corrige Gulosa. | **Sem Matriz Adjacência; Sem Simulador; Bellman-Ford órfão; Esqueceu Hierholzer.** |
| **5** | **Média** | Darcy-Weisbach + Dijkstra; BFS/DFS Manobra/Contingência; DAG Logística Reversa. | **Sem Matriz Adjacência; Incidência implícita; Sem Teste Estresse; Simulador não mostrado.** |

---

### Observação Geral do Professor
Os grupos **2, 3, 7 e 8** demonstraram maturidade de **nível de pós-graduação / indústria 4.0**, integrando teoria dos grafos, automação (SCADA/PLC), normas de segurança (IEC 61511, SAE J2601, ANVISA) e validação computacional rigorosa.

A **ausência recorrente da Matriz de Adjacência** (Grupos 4, 5, 7, 8, 9) sugere uma lacuna no *template* ou na instrução da atividade, pois é a representação canônica para algoritmos como Dijkstra (vizinhanca). Recomendo reforçar a distinção **Adjacência (Vértice-Vértice) vs Incidência (Vértice-Aresta)** nas próximas turmas.

O **Grupo 5**, apesar de boa engenharia de processo, apresentou a menor aderência aos requisitos formais de Matemática Discreta solicitados (9 tópicos).