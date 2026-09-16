Aqui está a proposta de layout funcional para uma planta fabril fictícia de adubos granulados e organominerais, projetada com base nas boas práticas da indústria química/fertilizantes: fluxo linear de produção, segregação de matérias-primas e facilidade logística de expedição.

---

### **Visão Geral do Layout Fabril**

```
  [PORTARIA / BALANÇA / ADMINISTRATIVO]
                     │
 ┌───────────────────┴───────────────────┐
 │                                       │
 ▼                                       ▼
┌─────────────────────────┐             ┌─────────────────────────┐
│  ARMAZENAMENTO DE       │             │  ARMAZENAMENTO DE       │
│  INSUMOS / MATÉRIAS-PRI.│             │  PRODUTOS ACABADOS      │
│  (Galpão A - Entrada)   │             │  (Galpão B - Saída)     │
└────────────┬────────────┘             └────────────▲────────────┘
             │                                       │
             ▼                                       │
┌────────────────────────────────────────────────────┴────────────┐
│                  ÁREA DE PROCESSAMENTO E MISTURA                │
│    Dosagem ➔ Moagem ➔ Granulação/Mistura ➔ Ensaque/Bagging      │
└─────────────────────────────────────────────────────────────────┘

```

---

### **Detalhamento dos Setores**

#### **1. Setor de Recebimento e Armazenamento de Insumos (Galpão A)**

Área projetada para receber grandes volumes granel e insumos líquidos com isolamento para evitar contaminação e umidade.

* **Boxes Silos Granel:** Divisórias em concreto para estocagem de macronutrientes:
* *Box 1:* Nitrogênio (Ureia / Nitrato de Amônio).
* *Box 2:* Fósforo (Superfosfato Simples / MAP / DAP).
* *Box 3:* Potássio (Cloreto de Potássio - KCl).


* **Área de Matéria Orgânica e Micronutrientes:** Espaço coberto e ventilado para cama de frango tratada, torta de filtro, enxofre, zinco, boro e manganês em sacos ou big bags.
* **Tanques de Insumos Líquidos:** Bacia de contenção com tanques verticais para aditivos de revestimento (óleo antipó, polímeros) e condicionadores fluídos.
* **Moega de Recepção:** Sistema de descarga de caminhões basculantes conectado a correias transportadoras cobertas que alimentam os boxes.

---

#### **2. Área de Processamento e Formulação (Núcleo Fabril)**

Fluxo contínuo e automatizado em circuito fechado para minimização de poeira.

* **Silos de Dosagem Automática:** Balanças dosadoras alimentadas por correias diretamente dos boxes de insumos.
* **Moinho e Misturador Industrial:** Moinho de martelo para homogeneização dos sólidos e misturador horizontal de grande capacidade (*ribbon blender* ou tambor rotativo).
* **Linha de Granulação e Secagem:**
* Prato/Tambor de granulação com adição de aglomerantes fluídos.
* Secador rotativo a gás/biomassa seguido de resfriador de leito fluidizado.
* Peneiramento e aplicação de revestimento antipó (*coating*).


* **Sistema de Exaustão e Lavagem de Gases:** Ciclones e lavadores para retenção de particulados (atendimento às normas ambientais).

---

#### **3. Setor de Embalagem e Armazenamento de Produtos Acabados (Galpão B)**

Área ampla, limpa e protegida da umidade, projetada para giro rápido de estoque e movimentação contínua de empilhadeiras.

* **Ensaque Automático:**
* Ensacadora de 25 kg / 50 kg para adubos ensacados.
* Estação de carregamento de *Big Bags* (500 kg a 1.000 kg).


* **Paletização e Linha de *Stretch*:** Envolvedora automática para proteger os paletes contra umidade no transporte.
* **Estoque de Produtos Prontos:**
* *Racks* ou áreas demarcadas por tipo de formulação (ex: NPK 04-14-08, NPK 10-10-10, Organomineral Premium).
* Corredores largos (mínimo 4 metros) para movimentação segura de empilhadeiras.



---

#### **4. Logística e Expedição**

* **Plataforma de Carregamento (Docas Elevadas):** Capacidade para carregamento simultâneo de múltiplos caminhões.
* **Carregamento Direto a Granel:** Silo elevado para expedição rápida diretamente na caçamba dos caminhões.
* **Fluxo de Tráfego Interno:** Anel viário de sentido único (Guarita ➔ Balança Rodoviária de Entrada ➔ Descarga/Carga ➔ Balança de Saída).

---

Para estruturar o **Grafo de Rotas Logísticas (Suprimentos e Distribuição)** dessa unidade fabril, consideramos **Itajubá (Sul de Minas Gerais)** como o nó central (*Hub Fabril*), aproveitando a malha rodoviária estratégica conectada pela BR-459, Fernão Dias (BR-381) e Dutra (BR-116).

---

### **Estrutura do Grafo Logístico**

```
 [FORNECEDORES / ORIGENS]                   [MUNICÍPIOS / REGIONAL]                      [CLIENTES / DESTINOS]
 
 (Santos/SP) ───────┐                                                               ┌───> [Pouso Alegre - MG]
 (Maciço de Poços) ─┼──> [GALPÃO A: INSUMOS] ──> [ÁREA FABRIL] ──> [GALPÃO B: PROD.] ┼──> [Guaratinguetá/Taubaté - SP]
 (Região de Passos)─┘      (Recepção/Boxes)       (Formulação)     (Expedição)      └───> [São Lourenço/Caxambu - MG]

```

---

### **Detalhamento dos Nós (Nodes)**

#### **1. Nó Central (Hub Fabril)**

* **$[N_0]$ Planta Fabril (Itajubá - MG):** Nó principal de convergência e processamento.
* **$[N_{0A}]$ Sub-nó Galpão A (Insumos):** Ponto de descarga de matéria-prima (Moega e Tanks).
* **$[N_{0B}]$ Sub-nó Galpão B (Produtos Acabados):** Ponto de saída para expedição (Docas).



#### **2. Nós de Origem (Recolhimento de Insumos)**

* **$[N_{I1}]$ Porto de Santos (SP):** Importação de KCl (Cloreto de Potássio) e Ureia.
* **$[N_{I2}]$ Poços de Caldas / Andradas (MG):** Mineração e rocha fosfática (Fósforo).
* **$[N_{I3}]$ Região do Sul de Minas / Passos (MG):** Cama de frango e matéria orgânica para linha Organomineral.

#### **3. Nós de Destino (Entrega de Adubos)**

* **$[N_{D1}]$ Eixo BR-459 Ocidental (Pouso Alegre / Santa Rita do Sapucaí - MG):** Hortifrúti, grãos e milho.
* **$[N_{D2}]$ Eixo Vale do Paraíba (Guaratinguetá / Taubaté / Lorena - SP):** Pastagens e horticultura.
* **$[N_{D3}]$ Eixo Circuito das Águas (São Lourenço / Carmo de Minas - MG):** Cafeicultura de alta precisão.

---

### **Detalhamento das Arestas (Edges e Trajetos)**

| Origem / Destino | Aresta (Rota) | Tipo de Carga | Modal / Rodovia | Distância Média |
| --- | --- | --- | --- | --- |
| $[N_{I1}] \rightarrow [N_{0A}]$ | **Inbound (Recolhimento)** | Ureia / KCl a granel | Bitrem (BR-116 / SP-125 / BR-459) | ~320 km |
| $[N_{I2}] \rightarrow [N_{0A}]$ | **Inbound (Recolhimento)** | Rocha Fosfática / Calcário | Trucado / Carreta (BR-459) | ~140 km |
| $[N_{I3}] \rightarrow [N_{0A}]$ | **Inbound (Recolhimento)** | Resíduos Orgânicos | Caçamba basculante (BR-381 / BR-459) | ~200 km |
| $[N_{0B}] \rightarrow [N_{D1}]$ | **Outbound (Entrega)** | NPK Saco/Big Bag | Truck 14t (BR-459) | ~60 km |
| $[N_{0B}] \rightarrow [N_{D2}]$ | **Outbound (Entrega)** | Organomineral Bag | Carreta 30t (BR-459 / SP-183 / BR-116) | ~70 km |
| $[N_{0B}] \rightarrow [N_{D3}]$ | **Outbound (Entrega)** | Formulações Especiais Café | Truck 14t (BR-459 / MGG-383) | ~80 km |

---

### **Mapeamento do Logística Reversa (Logística de Retorno)**

Para otimizar o custo de frete (evitar "rodar vazio"), o grafo possui aristas bidirecionais programadas:

* **Ciclo Reverso de Paletes e Big Bags:**

$$\text{Entrega } [N_{0B}] \rightarrow [N_{D1/D2/D3}] \quad \xrightarrow{\text{Recolhimento de Embalagens/Paletes Vazios}} \quad [N_{0A}]$$


* **Triangulação Inbound/Outbound:** Caminhões que entregam adubo ensacado no Vale do Paraíba $[N_{D2}]$ retornam via Dutra/Santos $[N_{I1}]$ trazendo insumos importados para a fábrica $[N_{0A}]$.

---

Para estruturar o **Grafo de Rotas Logísticas (Suprimentos e Distribuição)** dessa unidade fabril, consideramos **Itajubá (Sul de Minas Gerais)** como o nó central (*Hub Fabril*), aproveitando a malha rodoviária estratégica conectada pela BR-459, Fernão Dias (BR-381) e Dutra (BR-116).

---

### **Estrutura do Grafo Logístico**

```
 [FORNECEDORES / ORIGENS]                   [MUNICÍPIOS / REGIONAL]                      [CLIENTES / DESTINOS]
 
 (Santos/SP) ───────┐                                                               ┌───> [Pouso Alegre - MG]
 (Maciço de Poços) ─┼──> [GALPÃO A: INSUMOS] ──> [ÁREA FABRIL] ──> [GALPÃO B: PROD.] ┼──> [Guaratinguetá/Taubaté - SP]
 (Região de Passos)─┘      (Recepção/Boxes)       (Formulação)     (Expedição)      └───> [São Lourenço/Caxambu - MG]

```

---

### **Detalhamento dos Nós (Nodes)**

#### **1. Nó Central (Hub Fabril)**

* **$[N_0]$ Planta Fabril (Itajubá - MG):** Nó principal de convergência e processamento.
* **$[N_{0A}]$ Sub-nó Galpão A (Insumos):** Ponto de descarga de matéria-prima (Moega e Tanks).
* **$[N_{0B}]$ Sub-nó Galpão B (Produtos Acabados):** Ponto de saída para expedição (Docas).



#### **2. Nós de Origem (Recolhimento de Insumos)**

* **$[N_{I1}]$ Porto de Santos (SP):** Importação de KCl (Cloreto de Potássio) e Ureia.
* **$[N_{I2}]$ Poços de Caldas / Andradas (MG):** Mineração e rocha fosfática (Fósforo).
* **$[N_{I3}]$ Região do Sul de Minas / Passos (MG):** Cama de frango e matéria orgânica para linha Organomineral.

#### **3. Nós de Destino (Entrega de Adubos)**

* **$[N_{D1}]$ Eixo BR-459 Ocidental (Pouso Alegre / Santa Rita do Sapucaí - MG):** Hortifrúti, grãos e milho.
* **$[N_{D2}]$ Eixo Vale do Paraíba (Guaratinguetá / Taubaté / Lorena - SP):** Pastagens e horticultura.
* **$[N_{D3}]$ Eixo Circuito das Águas (São Lourenço / Carmo de Minas - MG):** Cafeicultura de alta precisão.

---

### **Detalhamento das Arestas (Edges e Trajetos)**

| Origem / Destino | Aresta (Rota) | Tipo de Carga | Modal / Rodovia | Distância Média |
| --- | --- | --- | --- | --- |
| $[N_{I1}] \rightarrow [N_{0A}]$ | **Inbound (Recolhimento)** | Ureia / KCl a granel | Bitrem (BR-116 / SP-125 / BR-459) | ~320 km |
| $[N_{I2}] \rightarrow [N_{0A}]$ | **Inbound (Recolhimento)** | Rocha Fosfática / Calcário | Trucado / Carreta (BR-459) | ~140 km |
| $[N_{I3}] \rightarrow [N_{0A}]$ | **Inbound (Recolhimento)** | Resíduos Orgânicos | Caçamba basculante (BR-381 / BR-459) | ~200 km |
| $[N_{0B}] \rightarrow [N_{D1}]$ | **Outbound (Entrega)** | NPK Saco/Big Bag | Truck 14t (BR-459) | ~60 km |
| $[N_{0B}] \rightarrow [N_{D2}]$ | **Outbound (Entrega)** | Organomineral Bag | Carreta 30t (BR-459 / SP-183 / BR-116) | ~70 km |
| $[N_{0B}] \rightarrow [N_{D3}]$ | **Outbound (Entrega)** | Formulações Especiais Café | Truck 14t (BR-459 / MGG-383) | ~80 km |

---

### **Mapeamento do Logística Reversa (Logística de Retorno)**

Para otimizar o custo de frete (evitar "rodar vazio"), o grafo possui aristas bidirecionais programadas:

* **Ciclo Reverso de Paletes e Big Bags:**

$$\text{Entrega } [N_{0B}] \rightarrow [N_{D1/D2/D3}] \quad \xrightarrow{\text{Recolhimento de Embalagens/Paletes Vazios}} \quad [N_{0A}]$$


* **Triangulação Inbound/Outbound:** Caminhões que entregam adubo ensacado no Vale do Paraíba $[N_{D2}]$ retornam via Dutra/Santos $[N_{I1}]$ trazendo insumos importados para a fábrica $[N_{0A}]$.