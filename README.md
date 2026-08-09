# ECAA08-2026.2-Projeto
Proposta e enunciado do projeto de ensino para a disciplina de ECAA08 Automática de 2026.2

# Proposta do Projeto

O projeto **SCADA-Core Automática** tem como finalidade integrar os conceitos de matemática discreta aos sistemas de automação industrial, capacitando os estudantes a desenvolverem os motores algorítmicos internos de um software supervisório aplicado a processos críticos.

## Objetivo Geral
Desenvolver um motor computacional de supervisão, controle e diagnóstico para uma planta química automatizada, aplicando rigor matemático (lógica formal, grafos, árvores e relações) para resolver problemas reais de intertravamento de segurança, roteamento de reagentes e gestão de alarmes.

### Objetivos Específicos

* **Validação de Intertravamentos (Lógica Formal):** Construir a matriz de segurança do sistema utilizando lógica proposicional e de predicados, provando matematicamente (via tautologias) que a planta não entrará em combinações operacionais de risco de explosão ou vazamento.
* **Diagnóstico de Causa Raiz (Sistemas Especialistas):** Criar um motor de inferência baseado em regras lógicas `SE... ENTÃO` capaz de isolar falhas complexas e informar ao operador o evento primário gerador de um alarme.
* **Otimização de Fluxo e Rede (Teoria dos Grafos):** Modelar a tubulação e a infraestrutura física como um grafo dirigido e ponderado, aplicando algoritmos de menor caminho (Dijkstra) para recalcular automaticamente rotas de fluidos quando um trecho for bloqueado.
* **Planejamento de Manutenção e Logística:** Aplicar conceitos de Caminhos Eulerianos e Hamiltonianos para otimizar as rotas de inspeção de robôs autônomos (AGVs) e amostragem de tanques na fábrica.
* **Mitigação de Inundação de Alarmes (Árvores):** Estruturar o banco de dados de *Tags* em árvores binárias de busca e implementar árvores de decisão para a supressão hierárquica de alarmes secundários durante falhas em cadeia.
* **Gestão de Permissões e Estados (Teoria das Relações):** Modelar a hierarquia de acesso dos operadores na IHM usando relações de ordem parcial (Diagramas de Hasse) e representar a matriz de transição de estados de processos sequenciais (Grafcet/SFC).
* **Desenvolvimento de Habilidades Profissionais (PBL):** Capacitar os alunos em gestão de projetos de engenharia (via Matriz 5W2H), trabalho em equipe e controle de versão de código em ambiente industrial.

## Etapas de Desenvolvimento

### Fase Inicial: Kick-off e Planejamento

* **Aula 01:** Kick-off & Arquitetura do SCADA — Apresentação do projeto, montagem dos grupos e escolha da planta química. 
  - *Entregável: Definição da Planta*.
---
### Módulo 1: Lógica Formal & Sistemas Especialistas

* **Aula 02:** Representação Simbólica — Mapeamento de variáveis de processo (sensores/atuadores) em proposições. 
  - *Entregável: Validação do catálogo de Tags*.
* **Aula 03:** Tautologias e Contradições — Formulação de equações booleanas contra estados proibidos da fábrica. 
  - *Entregável: Tabela de Verdade dos Intertravamentos*.
* **Aula 04:** Lógica Proposicional: Conectivos — Programação de blocos lógicos de permissão de partida de equipamentos. 
  - *Entregável: Algoritmo de intertravamento preliminar*.
* **Aula 05:** Formas Normais — Otimização de expressões booleanas para redução de processamento. 
  - *Entregável: Código-fonte otimizado em Python*.
* **Aula 06:** Quantificadores e Predicados — Regras de varredura global em redes de sensores ($\forall x, \exists y$). 
  - *Entregável: Módulo de varredura de estado*.
* **Aula 07:** Validade e Inferência Lógica — Testes formais de consistência da matriz de segurança do processo. 
  - *Entregável: Prova lógica de ausência de falhas*.
* **Aula 08:** Lógica de Predicados e Regras — Base de conhecimento baseada em regras `SE... ENTÃO` para diagnósticos. 
  - *Entregável: Base de Regras do Sistema Especialista*.
* **Aula 09:** Motor de Inferência — Implementação de algoritmo de inferência (*Forward/Backward Chaining*). 
  - *Entregável: Integração do motor de diagnóstico*.
* **Aula 10: Avaliação do Módulo 1 — Apresentação do Motor de Intertravamento e Diagnóstico.**
---
### Módulo 2: Teoria dos Grafos & Roteamento

* **Aula 11:** Grafos: Definições — Modelagem da tubulação e instrumentos como Grafo Dirigido e Ponderado. 
  - *Entregável: Matriz de Adjacência do processo*.
* **Aula 12:** Matriz de Incidência e Pesos sobre tempos do processo.
  - *Entregável: Matriz de Incidência parametrizada*.
* **Aula 13:** Algoritmos de Busca (BFS/DFS) — Caminhos mínimos do processo.
  - *Entregável: Algoritmo de busca de caminho ativo*.
* **Aula 14:** Menor Caminho (Dijkstra) — Implementação de roteamento dinâmico em caso de bloqueio na rede. 
  - *Entregável: Motor de reencaminhamento de fluido*.
* **Aula 15:** Simulação de Vazamentos — Injeção de falhas na malha e validação do desvio automático. 
  - *Entregável: Teste de estresse em malha fechada*.
* **Aula 16:** Problemas Eulerianos — Otimização do percurso do robô de inspeção da infraestrutura física. 
  - *Entregável: Algoritmo de inspeção e manutenção*.
* **Aula 17:** Problemas Hamiltonianos (PCV) — Roteamento do AGV de amostragem química pelos tanques. 
  - *Entregável: Rota otimizada de amostragem*.
* **Aula 18: Avaliação do Módulo 2 — Apresentação do Roteador Automático de Fluidos e Logística.**
---
### Módulo 3: Árvores & Gestão de Alarmes (Aulas 19 a 28)

* **Aula 19:** Árvores: Definições — Estruturação hierárquica das seções da fábrica no banco de dados. 
  - *Entregável: Árvore de ativos da planta*.
* **Aula 20:** Representação Binária — Implementação de Árvores Binárias de Busca (BST) para consulta de Tags. 
  - *Entregável: Algoritmo de varredura $O(\log n)$*.
* **Aula 21:** Algoritmos de Percurso — Varredura em Pré-Ordem, Em-Ordem e Pós-Ordem no banco de dados. 
  - *Entregável: Módulo de ordenação de variáveis*.
* **Aula 22:** Hierarquia de Alarmes — Mapeamento de dependência de alarmes para prevenir *Alarm Flood*. 
  - *Entregável: Árvore de dependência de alertas*.
* **Aula 23:** Algoritmo de Supressão — Filtragem de alarmes secundários causados por falhas raiz. 
  - *Entregável: Filtro inteligente de alarmes*.
* **Aula 24:** Priorização na IHM — Estruturação da exibição visual de alarmes críticos por severidade. 
  - *Entregável: Interface de eventos do operador*.
* **Aula 25:** Árvores de Decisão: Teoria — Mapeamento de variáveis críticas de processo em nós de decisão. 
  - *Entregável: Modelo conceitual de Trip automático*.
* **Aula 26:** Algoritmo de *Trip* — Programação do protocolo de paralisação de emergência (*Shutdown*). 
  - *Entregável: Código do algoritmo de parada segura*.
* **Aula 27:** Testes de Inundação — Injeção de 50 alarmes simultâneos e validação da supressão em tempo real. 
  - *Entregável: Relatório de validação de estabilidade*.
* **Aula 28: Avaliação do Módulo 3 — Apresentação do Gerenciador de Alarmes e Algoritmo de Parada Automática**
---

### Módulo 4: Relações, Permissões e Defesa Final

* **Aula 29:** Relações: Propriedades — Definição da matriz de acessos e permissões de usuários no SCADA. 
  - *Entregável: Matriz de Relações de Acesso*.
* **Aula 30:** Ordem Parcial (Hasse) — Modelagem da hierarquia operacional (Operador < Supervisor < Engenheiro). 
  - *Entregável: Diagrama de Hasse na IHM*.
* **Aula 31:** Relações de Equivalência — Matriz de Transição de Estados (Grafcet/SFC) para processos batelada. 
  - *Entregável: Código do sequenciador de etapas*.
* **Aula 32: Defesa Final Integrada — Demonstração completa do SCADA-Core Automática operando a planta em tempo real**


## Entrega via GitHub

Para alinhar o projeto às práticas reais da engenharia e do desenvolvimento de software, todas as entregas do **SCADA-Core Automática** serão geridas e avaliadas exclusivamente via **GitHub**.

* **Repositório Unificado e Acesso do Time:** Cada equipe deve criar um único repositório para o projeto. **Todos os membros do grupo devem ser adicionados com permissão de colaborador**. O repositório precisa estar acessível para a equipe e para o professor desde a Aula 01.
* **Estruturação Obrigatória em Subpastas:** O código e a documentação devem ser organizados em subpastas correspondentes às fases do projeto, mantendo a raiz limpa com o arquivo de apresentação (`README.md`):
* `/etapa-01-logica/` (código do intertravamento, tabelas de verdade e motor de diagnóstico)
* `/etapa-02-grafos/` (matrizes da planta, algoritmo de Dijkstra e rotas do AGV)
* `/etapa-03-arvores/` (busca de *tags*, hierarquia de alarmes e algoritmo de *trip*)
* `/etapa-04-relacoes/` (matriz de permissões, diagrama de Hasse e Grafcet)


* **Avaliação da Contribuição Individual (Métricas de Git):** A avaliação não considerará apenas o resultado final do código, mas o histórico de desenvolvimento. Através das ferramentas do GitHub (*Insights*, *Commits*, *Contributors* e *Pull Requests*), **será auditada a participação individual de cada estudante na edição dos arquivos**.

**Aviso aos Alunos:** Evitem a prática de "um único integrante enviar o código de todo o grupo". Cada aluno deve realizar seus próprios *commits* a partir de sua conta pessoal para garantir a nota individual referente ao seu trabalho na etapa.

### Recomendações de Boas Práticas

* Realizem *commits* pequenos e frequentes ao longo do desenvolvimento, em vez de um envio massivo no dia da entrega.
* Adotem mensagens de *commit* padronizadas (ex: `feat: adiciona algoritmo de Dijkstra` ou `docs: atualiza matriz 5W2H`).
* Utilizem *Branches* para desenvolvimento de funcionalidades e *Pull Requests* para revisão entre os colegas da equipe.
