## Documentação Técnica: Aplicação de STP / RSTP na Rede SCADA-Core (Complexo Industrial NPK)

### 1. Contextualização da Planta e Criticidade de Rede

No **Complexo Industrial de Fertilizantes Químicos NPK**, o sistema **SCADA-Core** supervisiona e atua sobre quatro setores físicos interdependentes com alta criticidade térmica, química e toxicológica:

* **Setor 100 (Síntese e Neutralização):** Reator *Pre-Neutralizer* (`R-101`), bombas de alimentação redundantes (`P-101`, `P-102`), manifold (`MAN-101`) e instrumentos críticos de intertravamento (`PT-101`, `TT-101`, `AT-101`, `LT-101A/B`, `ESD-100`, `XV-101`, `XV-102`).
* **Setor 200 (Granulação e Secagem):** Tambor granulador (`GRAN-201`), secador rotativo térmico (`SEC-201`) e peneira classificadora (`PEN-201`).
* **Setor 300 (Parque de Tancagem e Utilidades):** Tanques de amônia líquida (`TK-301`), ácido fosfórico (`TK-302`) e tanque pulmão de *slurry* (`TK-303`).
* **Setor 400 (Armazenamento e Logística):** Ensacamento automatizado (`EXP-401`) e robô coletor de amostras (`AGV-401`).

Para garantir alta disponibilidade operacional e evitar perda de visibilidade ou atraso nos comandos de intertravamento (como o fechamento *fail-safe* de `XV-101` e `XV-102` em caso de sobrepressão $P \ge 180\text{ bar}$ ou vazamento de $\text{NH}_3 \ge 25\text{ ppm}$), a rede Ethernet industrial (PROFINET / Modbus TCP / EtherNet/IP) interliga os switches de campo de cada setor em **topologia física em anel (ou malha parcial)** até a Sala de Controle Central (`SCADA-Core`).

---

### 2. Fundamentação em Matemática Discreta (Teoria dos Grafos)

A infraestrutura física de switches gerenciáveis da planta é modelada como um grafo não-direcionado, conexo e ponderado $G = (V, E, w)$, onde:

* **$V$ (Conjunto de Vértices):** Representa os switches industriais de camada 2 (L2) distribuídos nos setores e no núcleo de supervisão:

$$V = \{v_{\text{CORE}}, v_{\text{S100}}, v_{\text{S200}}, v_{\text{S300}}, v_{\text{S400}}\}$$


* **$E$ (Conjunto de Arestas):** Representa os enlaces físicos redundantes de fibra óptica ou cabo industrial par trançado blindado entre os switches ($\vert{}E\vert{} \ge \vert{}V\vert{}$).
* **$w: E \to \mathbb{R}^+$ (Função de Peso):** Atribui a cada enlace $e \in E$ o **Custo de Caminho (Path Cost)** definido pela norma IEEE 802.1D / 802.1w, inversamente proporcional à largura de banda nominal do enlace:

| Velocidade do Enlace Industrial | Custo Padrão IEEE 802.1w (RSTP) | Aplicação Típica na Planta NPK |
| --- | --- | --- |
| $100\text{ Mbps}$ (Fast Ethernet) | $200.000$ | Enlaces secundários / legados de campo |
| $1\text{ Gbps}$ (Gigabit Ethernet) | $20.000$ | Anel principal em fibra óptica entre Setores |
| $10\text{ Gbps}$ (10G Ethernet) | $2.000$ | Backbone entre Sala de Controle e Setor 100 |

#### O Problema dos Ciclos na Camada 2 (Ethernet)

Como a topologia física possui enlaces redundantes para tolerância a falhas, o grafo $G$ contém ciclos simples ($C_k \subseteq G$). Como quadros Ethernet (Layer 2) **não possuem campo TTL (Time-To-Live)** no cabeçalho IEEE 802.3, qualquer quadro de *broadcast* (ex.: requisições ARP ou pacotes de descoberta de dispositivos de campo) transmitido em um grafo cíclico é replicado indefinidamente pelos switches, gerando:

1. **Tempestade de Broadcast (*Broadcast Storm*):** Saturação imediata de $100\%$ da banda, derrubando a comunicação determinística com os CLPs do Reator `R-101`.
2. **Instabilidade da Tabela MAC (*MAC Flapping*):** Um mesmo endereço MAC de um transmissor ou CLP passa a ser aprendido alternadamente em múltiplas portas do switch.

#### Solução Formal: Árvore Geradora Mínima (MST)

O protocolo **STP / RSTP** executa uma variação distribuída do algoritmo de construção de **Árvore Geradora Mínima (*Minimum Spanning Tree* - MST)**, extraindo de $G$ um subgrafo gerador $T = (V, E_T)$ tal que:

1. $T$ é conexo e acíclico ($\vert{}E_T\vert{} = \vert{}V\vert{} - 1 = 4$ arestas ativas).
2. A soma dos custos dos caminhos da raiz ($v_{\text{root}}$) até qualquer vértice $v_i \in V$ é minimizada.
3. As arestas redundantes $e \in (E \setminus E_T)$ são colocadas logicamente no estado **Discarding (Bloqueada)**, permanecendo em *standby* quente para comutação imediata em caso de ruptura física.

---

### 3. Comparativo Técnico: STP (802.1D) vs. RSTP (802.1w) na Planta NPK

Para sistemas de automação industrial que lidam com reações exotérmicas rápidas ($\Delta H^\circ = -135\text{ kJ/mol}$ para MAP e $-228\text{ kJ/mol}$ para DAP), o tempo de convergência da rede após o rompimento de um cabo define a segurança do processo.

| Critério Técnico | STP Clássico (IEEE 802.1D) | RSTP (IEEE 802.1w) — Recomendado | Impacto Operacional no SCADA-Core |
| --- | --- | --- | --- |
| **Tempo de Convergência** | $30\text{ s}$ a $50\text{ s}$ | **$< 1\text{ s}$** (tipicamente $50\text{ ms}$ a $200\text{ ms}$) | No STP, $50\text{ s}$ sem telemetria de `PT-101` ou `TT-101` compromete a supervisão crítica. O RSTP restaura o enlace antes do *timeout* de *watchdog* do SCADA. |
| **Estados de Porta** | 5 estados (*Disabled, Blocking, Listening, Learning, Forwarding*) | 3 estados (*Discarding, Learning, Forwarding*) | Elimina os atrasos passivos de *Forward Delay* ($2 \times 15\text{ s}$) através de negociação ativa (*Proposal/Agreement*). |
| **Papéis de Porta** | *Root, Designated, Non-Designated* | *Root, Designated, Alternate, Backup* | A porta *Alternate* já possui um caminho pré-calculado para a raiz, assumindo o encaminhamento instantaneamente sem recálculo global. |
| **Geração de BPDUs** | Apenas o *Root Bridge* gera; demais reencaminham | Todos os switches geram BPDUs a cada *Hello Time* ($2\text{ s}$) | Detecção de falha de enlace vizinho ocorre em no máximo $3 \times \text{Hello Time}$ ($6\text{ s}$) ou imediatamente via perda de sinal físico (*Link Down*). |

---

### 4. Arquitetura Lógica e Determinismo de Papéis na Planta

Para garantir que o fluxo determinístico de dados de processo priorize o **Setor 100 (Reator R-101)** e o **SCADA-Core**, a configuração do RSTP não deve ser deixada no modo automático padrão (*Bridge Priority* $32768$ em todos os nós).

#### 4.1. Eleição Determinística do Root Bridge

* **Root Bridge Primário ($v_{\text{root}}$):** Switch Central da Sala de Controle (`SW-SCADA-CORE`) configurado com `Bridge Priority = 4096`.
* **Root Bridge Secundário (Backup):** Switch Industrial do Setor 100 (`SW-S100-R101`) configurado com `Bridge Priority = 8192`, garantindo que, na falha completa do switch central, a árvore seja reancorada imediatamente no setor de maior risco químico.
* **Switches de Borda/Setor (`SW-S200`, `SW-S300`, `SW-S400`):** Configurados com `Bridge Priority = 32768`.

#### 4.2. Mapeamento dos Papéis das Portas no Anel Óptico

Considerando um anel principal de $1\text{ Gbps}$ ($w = 20.000$) conectando `SW-CORE` $\leftrightarrow$ `SW-S100` $\leftrightarrow$ `SW-S300` $\leftrightarrow$ `SW-S200` $\leftrightarrow$ `SW-S400` $\leftrightarrow$ `SW-CORE`:

1. **`SW-CORE` (Root Bridge):** Todas as suas portas ativas no anel assumem o papel de **Designated Port (DP)** no estado *Forwarding*.
2. **`SW-S100` (Síntese / Reator R-101):**
* Porta conectada diretamente ao `SW-CORE`: **Root Port (RP)** (Custo acumulado = $20.000$).
* Porta conectada ao `SW-S300` (Parque de Tancagem): **Designated Port (DP)**.


3. **`SW-S300` (Tancagem TK-301/302/303):**
* Porta conectada ao `SW-S100`: **Root Port (RP)** (Custo acumulado = $40.000$).
* Porta conectada ao `SW-S200`: **Designated Port (DP)** ou **Alternate Port (AP)** (dependendo da simetria do anel; em um anel de 5 nós, a aresta entre `SW-S300` e `SW-S200` terá uma extremidade em *Designated* e a outra bloqueada como **Alternate Port / Discarding**, quebrando o ciclo único do grafo).



#### 4.3. Proteções de Borda e Segurança de Rede Industrial

* **PortFast / Edge Port:** Habilitado exclusivamente nas portas conectadas aos CLPs, IHMs locais, estações de engenharia e pontos de acesso do `AGV-401`. Isso faz com que a porta entre diretamente em *Forwarding* sem enviar *Topology Change Notifications* (TCNs) desnecessárias quando um equipamento de campo é reiniciado.
* **BPDU Guard:** Ativado em todas as *Edge Ports*. Caso um cabo de rede seja conectado acidentalmente em loop num painel de campo, o switch detecta o recebimento de um BPDU na porta de borda e coloca a interface em estado *err-disabled*, isolando a falha localmente sem derrubar o anel SCADA.
* **Root Guard:** Ativado nas portas de distribuição do `SW-CORE` e `SW-S100` para impedir que qualquer switch não autorizado conectado durante manutenção assuma o papel de *Root Bridge* e desvie o tráfego crítico do Reator `R-101`.

---

### 5. Nota de Conformidade com Segurança Funcional (IEC 61508 / IEC 61511)

Embora o **RSTP** eleve a disponibilidade da rede supervisória (`SCADA-Core`) para níveis superiores a $99,99\%$, os intertravamentos de segurança de última camada (como o disparo do botão físico `ESD-100` e a atuação de emergência das válvulas *fail-safe* `XV-101` e `XV-102`) operam via **malhas dedicadas *hardwired* ($4\text{–}20\text{ mA}$ / contatos secos NF)** diretamente no CLP de Segurança (SIS), mantendo independência física da camada Ethernet em conformidade com o princípio de separação de camadas de proteção (LOPA).