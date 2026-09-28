# Avaliação da Etapa 1: Lógica Formal & Sistemas Especialistas (ECAA08 2026.2)
## Análise com Transcrições Geradas pela Rede Neural (Samsung)

**Professor de Matemática Discreta:** Avaliação dos Trabalhos, Repositórios e Apresentações de Áudio com a base de transcrição Samsung.

---

## 1. Comparativo Técnico entre Motores de Transcrição (Whisper vs. Samsung IA)

* **Qualidade de Pontuação e Formatação:** As transcrições da pasta `samsung` apresentam uma estruturação em estrofes/parágrafos com marcas de tempo mais frequentes e legibilidade superior (menor incidência de erros fonéticos e palavras sem nexo).
* **Fidelidade aos Termos de Engenharia:** Termos como *Forward Chaining*, *Backward Chaining*, *Tautologia*, *Discretização*, *Grafcet*, *Hasse* e *Tags* foram capturados com maior precisão fonética e gramatical.

---

## 2. Avaliação Detalhada por Grupo (Base Samsung IA)

### Grupo 1: AGV de Logística Industrial

* **Integrantes e Transcrição Samsung:**
  * **LUIZ FELLIPI DANIEL FREIRE** (`0:00 - 3:00`): Apresentou o AGV autônomo guiado por visão computacional (linha no chão e centralização de centro de massa via TensorFlow) e sensores de segurança laterais.
  * **DANIEL DE SOUZA MELO** (`3:00 - 5:00`): Explicou o uso de quantificadores universais (varredura geral de sensores) e quantificadores existenciais (falha pontual disparando parada).
  * **VINICIUS MACIEL DA ROCHA PEREIRA** (`5:00 - 7:14`): Detalhou o motor de inferência (*Forward Chaining* para eventos em tempo real e *Backward Chaining* para investigação pós-falha).
  * **VINICIUS KODY MURAKAMI** (`7:14 - 8:07`): Apresentou a simulação sob estresse, demonstrando a parada de segurança por bloqueio de rotor.
* **Repositório (`etapa-01-logica/`):** Todos os 10 tópicos organizados em notebooks `.ipynb` e `.md` com diagramas do AGV.
* **Pontos Positivos:**
  * Apresentação extremamente fluida. A transcrição Samsung evidencia que a linguagem formal da disciplina (quantificadores e encadeamento) foi usada com precisão pelos alunos.
* **Pontos Negativos:**
  * Concentração de commits no líder Luiz Fellipi (67% do repositório).

---

### Grupo 2: Célula Automatizada de Selagem de Copos

* **Integrantes e Transcrição Samsung:**
  * **ARTHUR MAJORAL** (`0:00 - 1:27`): Explicou as 5 estações da máquina e a arquitetura distribuída de controle de atuadores.
  * **RAFAEL AUGUSTO** (`1:27 - 2:57`): Detalhou a discretização de entradas/saídas pneumáticas e sensores de fim de curso.
  * **FELIPE MACEDO** (`2:57 - 4:50`): Abordou predicados e quantificadores ($\forall x$ para condição de cilindro recuado e $\exists y$ para vazamentos ou falhas críticas).
  * **ERICK** (`4:50 - 9:45`): Demonstrou o motor especialista, priorização de alarmes de cilindro sobre motores e o simulador interativo na web.
* **Repositório (`etapa-01-logica/`):** Repositório completo do item 01 ao 10 com suporte ao GitHub Pages (`index.html`).
* **Pontos Positivos:**
  * Na transcrição Samsung, a explicação da prioridade de regras e a demonstração da IHM pelo aluno Erick ficaram perfeitamente inteligíveis.
  * Distribuição equilibrada de commits no Git entre Arthur, Felipe, Erick e Rafael.
* **Pontos Negativos:**
  * Pequenas hesitações de fala registradas no início da fala de Rafael Augusto.

---

### Grupo 3: Planta de Envase e Cavitação em Bombas

* **Integrantes e Transcrição Samsung:**
  * **RAFAEL RIBEIRO GUEDES** (`0:00 - 4:25`): Apresentou os limites de pressão (1.0 a 4.5 bar), controle de vazão e intertravamento de bombas.
  * **GUILHERME NARCISO CASTRO SILVA** (`4:25 - 8:20`): Explicou as rotinas do simulador via terminal e intertravamentos de parada de emergência/nível.
  * **NICKOLAS NICOLETO MUSICO** (`8:20 - 10:40`): Explicou o diagnóstico de cavitação na bomba por queda na pressão de sucção abaixo da pressão de vapor do fluido.
  * **MATHEUS FELIPE DE OLIVEIRA AGOSTINHO** (`10:40 - 11:57`): Explicou a matriz de intertravamento de segurança ESD (*Emergency Shutdown*).
* **Repositório (`etapa-01-logica/`):** 10 notebooks `.ipynb` e `.md` cobrindo o conteúdo de Matemática Discreta aplicado à automação.
* **Pontos Positivos:**
  * A transcrição Samsung deixou clara a formalização matemática de Nickolas para cavitação (uso de tabela verdade e valor booleano falso na pressão de sucção).
* **Pontos Negativos:**
  * Ausência de interface gráfica avançada no simulador (executado apenas no terminal).

---

### Grupo 4: Classificadora Graneleira por Visão Computacional

* **Integrantes e Transcrição Samsung:**
  * **VINICIUS MACIEL** (`0:00 - 3:17`): Explicou a recepção de grãos de arroz, dosagem vibratória e esteira de transporte.
  * **MIGUEL LUIZ** (`3:17 - 4:51`): Explicou a otimização de expressões booleanas por Forma Normal Conjuntiva (FNC) e Disjuntiva (FND).
  * **THIAGO** (`4:51 - 7:05`): Apresentou os quantificadores universais/existenciais e as regras de separação de grãos por qualidade.
  * **FELIPE CONRADO** (`7:05 - 9:52`): Exibiu a simulação das etapas de rejeição e intertravamentos.
* **Repositório (`etapa-01-logica/`):** Estrutura completa de 00 a 10 e pasta `/simulador/`.
* **Pontos Positivos:**
  * A transcrição Samsung esclareceu perfeitamente como Miguel usou Formas Normais para reduzir tempo de processamento dos sensores de visão.
* **Pontos Negativos:**
  * O trecho de simulação oral de Felipe Conrado teve pequenos problemas de captação no áudio original.

---

### Grupo 5: Usina de Biodiesel em Batelada

* **Integrantes e Transcrição Samsung:**
  * **IGOR FANTUCCI DE MATTOS TEIXEIRA** (`0:00 - 5:54`): Apresentou a reação de transesterificação, risco de evaporação do metanol a 65°C e topologia P&ID.
  * **GABRIEL HENRIQUE PEDRO AZEVEDO** (`5:54 - 7:35`): Explicou a lógica proposicional das válvulas de alívio e controle de pressão.
  * **VITORIA STEFANE BARBOSA DE MELO** (`7:35 - 9:50`): Abordou predicados de temperatura e validação formal de segurança via SAT Solver (Z3 / Costa).
  * **ANDRE SANTOS CRUZ** (`9:50 - 11:48`): Detalhou o motor especialista de diagnósticos `SE... ENTÃO` e a matriz de causa e efeito com prioridades.
* **Repositório (`etapa-01-logica/`):** PDFs de apresentação, diagramas e notebooks completos.
* **Pontos Positivos:**
  * A transcrição Samsung evidenciou o teste rigoroso feito por Vitória utilizando provadores de teoremas (SAT Solvers) para comprovar a segurança da fábrica.
* **Pontos Negativos:**
  * Apresentação oral com divisão de tempo desproporcional entre os participantes.

---

### Grupo 6: Drone Agrícola para Pulverização de Precisão

* **Integrantes e Transcrição Samsung:**
  * **MARINA TOMIE LOPES ZAKIMI** (`0:00 - 3:25`): Introduziu os sensores de bordo, limites de velocidade de vento e mapeamento de variáveis de voo.
  * **CAIQUE DO NASCIMENTO DIAS PAES** (`3:25 - 4:40`): Explicou os predicados de decolagem segura (bateria, GPS, vento e ângulo).
  * **LUIS FELIPE PEREIRA CAMPOS** (`4:40 - 5:50`): Mostrou a simulação dos estados do drone sob interferência de vento.
  * **ARTHUR MACHADO DE MORAES** (`5:50 - 7:40`): Apresentou o motor de inferência *Forward* e *Backward* para identificar entupimento de bicos de pulverização.
* **Repositório (`etapa-01-logica/`):** Repositório completo de 00 a 10 com diagrama de variáveis.
* **Pontos Positivos:**
  * Aplicação excelente de lógica de predicados para tomada de decisão em tempo real em drones embarcados.
* **Pontos Negativos:**
  * Apresentação oral concisa demais (7m40s total).

---

### Grupo 7: Linha de Produção de Paçoca

* **Integrantes e Transcrição Samsung:**
  * **ALVARO MARQUES DA SILVA** (`0:00 - 4:05`): Explicou o processo de recepção do amendoim, limpeza, torra, dosagem e prensagem.
  * **ANNA BEATRIZ GAVINHO DA SILVA** (`4:05 - 7:02`): Apresentou a simplificação booleana (redução de 6.6% no custo computacional) e a prova de contradição de emergência.
  * **JOSE RAFAEL DE CARVALHO** (`7:02 - 9:45`): Explicou a matriz de intertravamento de segurança com 22 linhas e tempo de resposta inferior a 25 ms.
  * **PEDRO VASCONCELOS LOUSADA** (`9:45 - 14:57`): Detalhou o controle térmico e operacional do forno de torra.
* **Repositório (`etapa-01-logica/`):** PDF de documentação completa e notebooks de 00 a 10.
* **Pontos Positivos:**
  * Transcrição Samsung de alta qualidade reforça a precisão dos números apresentados por Anna e José Rafael (redução percentual e tempos em ms).
* **Pontos Negativos:**
  * Excesso de tempo alocado no bloco do forno de torra.

---

### Grupo 8: Manufatura Flexível

* **Integrantes e Transcrição Samsung:**
  * **BRAYAN RIBEIRO CARVALHO** (`0:00 - 1:50`): Explicou a separação de peças por cor e tamanho nos setores 100, 200 e 300.
  * **JOAO PEDRO REIS SILVA** (`1:50 - 4:12`): Apresentou a discretização do motor da esteira principal e quantificadores no lote de 10 peças.
  * **WESLEY DE SOUZA MARQUES** (`4:12 - 6:24`): Explicou as regras de diagnóstico de falha óptica e desalinhamento de peças via *Forward/Backward Chaining*.
  * **KILDER RUAM SANTOS TEIXEIRA** (`6:24 - 8:10`): Correlacionou os conceitos de SCADA com sua vivência prática na indústria.
* **Repositório (`etapa-01-logica/`):** Repositório completo de 00 a 10 e diagrama visual.
* **Pontos Positivos:**
  * Excelente articulação entre teoria da lógica discreta e aplicação prática industrial.
* **Pontos Negativos:**
  * Baixo número de commits individuais do integrante Kilder (4 commits).

---

### Grupo 9: Estação de Reabastecimento de Hidrogênio ($H_2$)

* **Integrantes e Transcrição Samsung:**
  * **JOAO PEDRO GOZZOLI VITAL DO PRADO** (`0:00 - 1:36`): Apresentou os riscos de abastecimento de $H_2$ em altíssima pressão e temperaturas criogênicas (-40°C).
  * **MARCELO CANDELARIA DE OLIVEIRA GIAROLA** (`1:36 - 5:20`): Explicou formalmente o espaço de $2^{15}$ estados booleanos, com 1 permissivo exclusivo e 480 estados de *trip* de emergência.
  * **LEO VARGAS CONSOLI RENNO** (`5:20 - 7:14`): Apresentou a matriz de diagnósticos e os cenários de falha na bomba criogênica.
* **Repositório (`etapa-01-logica/`):** Repositório com 209 commits e código fonte robusto.
* **Pontos Positivos:**
  * A transcrição Samsung evidenciou a precisão dos cálculos combinatórios ($2^{15} = 32.768$ combinações) explicados por Marcelo.
* **Pontos Negativos:**
  * Desequilíbrio na contagem de commits individuais no Git.

---

## 3. Tabela Comparativa de Notas da Etapa 1

| Grupo | Projeto | Trabalho (`etapa-01-logica`) | Apresentação (Áudio Samsung) | Individualidade (Git) | **Nota Final** |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **1** | AGV de Logística | 10.0 | 9.5 | 8.5 | **9.3** |
| **2** | Selagem de Copos | 10.0 | 9.5 | 10.0 | **9.8** |
| **3** | Envase e Cavitação | 9.5 | 9.5 | 9.5 | **9.5** |
| **4** | Visão Computacional em Arroz | 9.5 | 9.0 | 9.5 | **9.3** |
| **5** | Usina de Biodiesel | 10.0 | 9.5 | 10.0 | **9.8** |
| **6** | Drone de Pulverização | 9.5 | 9.0 | 9.0 | **9.2** |
| **7** | Fábrica de Paçoca | 10.0 | 9.8 | 9.5 | **9.8** |
| **8** | Manufatura Flexível | 9.5 | 9.5 | 8.0 | **9.0** |
| **9** | Posto de Hidrogênio | 10.0 | 9.5 | 8.0 | **9.2** |

