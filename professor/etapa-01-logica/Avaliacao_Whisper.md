# Avaliação da Etapa 1: Lógica Formal & Sistemas Especialistas (ECAA08 2026.2)

**Professor de Matemática Discreta:** Avaliação dos Trabalhos, Repositórios e Apresentações de Áudio.

---

## 1. Visão Geral e Critérios de Avaliação

Com base no **Enunciado do Módulo 1**, a avaliação considerou os seguintes entregáveis e aspectos:
1. **Mapeamento de Tags e Variáveis de Processo** (sensores, atuadores, limites operacionais, unidades e discretização).
2. **Tabela de Verdade & Matriz de Intertravamentos** (tautologias booleanas contra explosão, vazamento e colisão).
3. **Formas Normais e Otimização Booleana** (aplicação de Leis de De Morgan, Karnaugh e redução de custo computacional).
4. **Quantificadores e Predicados** ($\forall x, \exists y$ aplicados a varredura global em redes de sensores).
5. **Motor de Inferência (Sistemas Especialistas)** (*Forward* e *Backward Chaining* para diagnósticos `SE... ENTÃO`).
6. **Alinhamento Áudio x Repositório** (coerência do que o aluno apresentou no áudio com o que commitou/desenvolveu na pasta `etapa-01-logica/`).
7. **Participação e Métricas de Git** (distribuição individual de commits no GitHub por membro da equipe).

---

## 2. Avaliação Detalhada por Grupo

### Grupo 1: AGV de Logística Industrial

* **Membros & Apresentação (Áudio vs README.md):**
  * **LUIZ FELLIPI DANIEL FREIRE** (`0:00 - 3:00`): Apresentou o conceito do AGV, controle visual por IA/TensorFlow e sensores de proximidade.
  * **DANIEL DE SOUZA MELO** (`3:00 - 5:00`): Explicou o mapeamento booleano, quantificadores universais nos sensores e intertravamento de parada.
  * **VINICIUS MACIEL DA ROCHA PEREIRA** (`5:00 - 7:14`): Abordou os motores de inferência *Forward/Backward Chaining* e diagnóstico de causas de parada.
  * **VINICIUS KODY MURAKAMI** (`7:14 - 8:07`): Mostrou a simulação do robô em estado de estresse com motor bloqueado.
* **Análise da Pasta `etapa-01-logica/`:**
  * Estruturação impecável dividida nas aulas de 00 a 10 (notebooks `.ipynb` e `.md` correspondentes para cada tema).
  * Inclui diagramas de arquitetura (`diagrama_agv.png`) e PDFs de apresentação.
* **Auditoria de Git:** Total de **52 commits**. Luiz Fellipi (35), Daniel (7), Vinicius Kody (6), Vinicius Maciel (4).
* **Pontos Positivos:**
  * Excelente alinhamento entre a física do AGV e a formalização lógica.
  * Presença de demonstração em vídeo/simulador citada no áudio e replicada nos notebooks.
  * Cobertura completa de todas as 10 sub-etapas exigidas no enunciado.
* **Pontos Negativos:**
  * Concentração excessiva de commits no líder Luiz Fellipi (67% dos commits do grupo), embora todos tenham feito entregas.

---

### Grupo 2: Célula Automatizada de Selagem e Montagem de Copos

* **Membros & Apresentação (Áudio vs README.md):**
  * **ARTHUR MAJORAL** (`0:00 - 1:27`): Descreveu as 5 estações da máquina de copos (dosagem, tampa, selagem, inspeção) e arquitetura SCADA.
  * **RAFAEL AUGUSTO** (`1:27 - 2:57`): Detalhou a discretização de sensores pneumáticos e amostragem de dados.
  * **FELIPE MACEDO** (`2:57 - 4:50`): Explicou a lógica de predicados, regras universais ($\forall x$) e existenciais ($\exists y$) para avanço dos cilindros.
  * **ERICK** (`4:50 - 9:45`): Demonstrou o motor de inferência, encadeamento de regras e exibiu a IHM/Simulador interativo no browser (`index.html`).
* **Análise da Pasta `etapa-01-logica/`:**
  * Organização estruturada do item 01 ao 10 com arquivos `.ipynb` e `.md`.
  * Presença de documentação HTML e simulação executável via GitHub Pages.
* **Auditoria de Git:** Total de **81 commits**. Arthur (29), Felipe Macedo (26), Erick (14), Rafael Augusto (10).
* **Pontos Positivos:**
  * Distribuição muito equilibrada do trabalho no Git entre os membros.
  * Apresentação oral clara e excelente demonstração prática do simulador por Erick.
  * Modelagem precisa de regras de prioridade em cilindros pneumáticos.
* **Pontos Negativos:**
  * O áudio do integrante Rafael Augusto apresentou pequenos ruídos/cortes de sinal no gravador, embora o conteúdo técnico estivesse correto.

---

### Grupo 3: Planta de Envase de Bebidas e Prevenção de Cavitação em Bombas

* **Membros & Apresentação (Áudio vs README.md):**
  * **RAFAEL RIBEIRO GUEDES** (`0:00 - 4:25`): Detalhou o P&ID da planta, reservatórios, esteira e parâmetros de pressão (1.0 a 4.5 bar).
  * **GUILHERME NARCISO CASTRO SILVA** (`4:25 - 8:20`): Apresentou o simulador via terminal, atuações de nível, botoeira de emergência e garrafas.
  * **NICKOLAS NICOLETO MUSICO** (`8:20 - 10:40`): Explicou o diagnóstico de cavitação em bombas via queda de pressão estática e tabela de verdade.
  * **MATHEUS FELIPE DE OLIVEIRA AGOSTINHO** (`10:40 - 11:57`): Apresentou a matriz de intertravamento de segurança ESD (*Emergency Shutdown*).
* **Análise da Pasta `etapa-01-logica/`:**
  * Repositório completo com todas as 10 etapas em formato `.ipynb` e `.md`.
* **Auditoria de Git:** Total de **130 commits**. Guilherme (62), Rafael (37), Nickolas (17), Matheus (14).
* **Pontos Positivos:**
  * Excelente abordagem de um problema físico real de engenharia química/mecânica (cavitação em bombas centrífugas).
  * Boa profundidade na prova formal das tautologias de parada de emergência.
* **Pontos Negativos:**
  * O simulador ficou restrito ao terminal em modo texto, sem interface gráfica elaborada.

---

### Grupo 4: Classificadora Graneleira por Visão Computacional

* **Membros & Apresentação (Áudio vs README.md):**
  * **VINICIUS MACIEL** (`0:00 - 3:17`): Explicou o fluxo de recepção de grãos de arroz, alinhador vibratório, transporte e inspeção visual.
  * **MIGUEL LUIZ** (`3:17 - 4:51`): Detalhou o catálogo de tags e simplificação de expressões booleanas (Formas Normais Disjuntivas/Conjuntivas).
  * **THIAGO** (`4:51 - 7:05`): Apresentou o uso de quantificadores e predicados para classificação de qualidade dos grãos (alta qualidade vs refugo).
  * **FELIPE CONRADO** (`7:05 - 9:52`): Demonstrou a execução do simulador e validação das rotinas.
* **Análise da Pasta `etapa-01-logica/`:**
  * Pasta completa com aulas de 00 a 10 e pasta adicional `/simulador/`.
* **Auditoria de Git:** Total de **104 commits**. Vinicius (46), Felipe (28), Miguel (20), Thiago (10).
* **Pontos Positivos:**
  * Projeto inovador integrando visão computacional com intertravamentos de segurança industrial.
  * Commits constantes e bem distribuídos ao longo do desenvolvimento.
* **Pontos Negativos:**
  * No áudio, o trecho final do integrante Felipe Conrado teve oscilação de áudio e fala acelerada.

---

### Grupo 5: Usina de Biodiesel em Batelada

* **Membros & Apresentação (Áudio vs README.md):**
  * **IGOR FANTUCCI DE MATTOS TEIXEIRA** (`0:00 - 5:54`): Apresentou a topologia completa da usina, reação exotérmica de transesterificação, evaporação de metanol e P&ID.
  * **GABRIEL HENRIQUE PEDRO AZEVEDO** (`5:54 - 7:35`): Explicou a lógica proposicional dos conectivos de segurança de vazamento e pressão.
  * **VITORIA STEFANE BARBOSA DE MELO** (`7:35 - 9:50`): Abordou os quantificadores em redes de sensores de temperatura e tolerância a falhas.
  * **ANDRE SANTOS CRUZ** (`9:50 - 11:48`): Apresentou a arquitetura SCADA, motor especialista `SE... ENTÃO` e explicabilidade de alarmes.
* **Análise da Pasta `etapa-01-logica/`:**
  * Excelente documentação gráfica (`apresentacao_etapa_01.pdf`, `Industria_Biodiesel.jpg`) e notebooks 00 a 10.
* **Auditoria de Git:** Total de **112 commits**. Igor (36), Vitória (34), André (27), Gabriel (15).
* **Pontos Positivos:**
  * Apresentação técnica primorosa com rigor nos conceitos de engenharia química (pressão de metanol e curvas de histerese).
  * Excelente divisão de commits e colaboração equilibrada no Git.
* **Pontos Negativos:**
  * O tempo do participante Igor estendeu-se bastante (quase 6 minutos), deixando o participante Gabriel com tempo reduzido (1 min 40s).

---

### Grupo 6: Drone Agrícola para Pulverização de Precisão

* **Membros & Apresentação (Áudio vs README.md):**
  * **MARINA TOMIE LOPES ZAKIMI** (`0:00 - 3:25`): Introduziu a aplicação do drone, restrições operacionais de vento, defensivos e mapeamento de variáveis.
  * **CAIQUE DO NASCIMENTO DIAS PAES** (`3:25 - 4:40`): Explicou a lógica de predicados aplicados a condições de voo (bateria, GPS, velocidade do vento).
  * **LUIS FELIPE PEREIRA CAMPOS** (`4:40 - 5:50`): Apresentou o simulador e o comportamento das variáveis sob teste.
  * **ARTHUR MACHADO DE MORAES** (`5:50 - 7:40`): Detalhou a base de regras, encadeamento *Forward/Backward* e diagnóstico de obstrução de bicos.
* **Análise da Pasta `etapa-01-logica/`:**
  * Repositório muito completo com arquivos `.ipynb`, `.md` e diagrama em imagem.
* **Auditoria de Git:** Total de **78 commits**. Marina (32), Luis Felipe (19), Arthur (15), Caique (12).
* **Pontos Positivos:**
  * Aplicação prática bastante criativa para sistemas embarcados e automação agrícola.
  * Boa transição de papeis entre os membros na apresentação oral.
* **Pontos Negativos:**
  * Apresentação oral foi a mais curta do dia (7 min 40 s no total), podendo aprofundar mais na demonstração do simulador.

---

### Grupo 7: Linha de Produção Automatizada de Paçoca

* **Membros & Apresentação (Áudio vs README.md):**
  * **ALVARO MARQUES DA SILVA** (`0:00 - 4:05`): Explicou as 4 etapas da fábrica (recepção, torra de amendoim, dosagem/moagem, prensagem) e riscos operacionais.
  * **ANNA BEATRIZ GAVINHO DA SILVA** (`4:05 - 7:02`): Apresentou a otimização de expressões booleanas (redução de 6.6% no processamento), predicados globais e contradição formal de botão de emergência.
  * **JOSE RAFAEL DE CARVALHO** (`7:02 - 9:45`): Detalhou a matriz de intertravamento de segurança, diagnóstico sob demanda e testes de tempo de resposta (< 25s).
  * **PEDRO VASCONCELOS LOUSADA** (`9:45 - 14:57`): Analisou minunciosamente o forno de torra, curvas de temperatura e simulação do processo.
* **Análise da Pasta `etapa-01-logica/`:**
  * Repositório exemplar contendo relatório em PDF (`SCADA-Core e Segurança.pdf`), notebooks 00 a 10 e documentação rica.
* **Auditoria de Git:** Total de **102 commits**. Anna (35), Pedro (32), Alvaro (23), Jose Rafael (12).
* **Pontos Positivos:**
  * Apresentação extremamente detalhada (quase 15 minutos), cobrindo todos os meandros da física da torra de amendoim.
  * Apresentação da métrica de simplificação booleana real obtida no algoritmo.
  * Ótimo equilíbrio e histórico no Git.
* **Pontos Negativos:**
  * Excesso de tempo utilizado pelo integrante Pedro na conclusão (5 minutos só para o forno de torra), estourando o tempo médio sugerido.

---

### Grupo 8: Manufatura Flexível (Separação por Cor/Tamanho e Paletização)

* **Membros & Apresentação (Áudio vs README.md):**
  * **BRAYAN RIBEIRO CARVALHO** (`0:00 - 1:50`): Explicou os 3 setores da fábrica (setor 100 esteira/esteira principal, setor 200 inspeção de cor/tamanho, setor 300 descarte/lote).
  * **JOAO PEDRO REIS SILVA** (`1:50 - 4:12`): Apresentou a discretização de sinais, permissivos do motor principal e quantificadores universais/existenciais no lote de 10 peças.
  * **WESLEY DE SOUZA MARQUES** (`4:12 - 6:24`): Explicou as regras de produção `SE... ENTÃO`, diagnósticos de falha óptica de sensores e encadeamento *Forward/Backward*.
  * **KILDER RUAM SANTOS TEIXEIRA** (`6:24 - 8:10`): Correlacionou os conceitos da aula com sua experiência prática em ambiente industrial fabril (Electrolux).
* **Análise da Pasta `etapa-01-logica/`:**
  * Pasta completa do item 00 ao 10 com arquivos `.ipynb` e `.md` bem formatados.
* **Auditoria de Git:** Total de **89 commits**. d005810/Brayan (39), Wesley (30), João Pedro (16), Kilder (4).
* **Pontos Positivos:**
  * Ótima conexão com a prática de automação de manufatura e lógica de esteiras industriais.
  * Transcrição e áudio mostram domínio do linguajar técnico de chão de fábrica.
* **Pontos Negativos:**
  * O integrante Kilder realizou apenas 4 commits diretos no repositório, devendo aumentar sua participação individual nas próximas etapas.

---

### Grupo 9: Estação de Reabastecimento de Hidrogênio ($H_2$)

* **Membros & Apresentação (Áudio vs README.md):**
  * **JOAO PEDRO GOZZOLI VITAL DO PRADO** (`0:00 - 1:36`): Introduziu os desafios de reabastecimento com hidrogênio de alta pressão (pressão altíssima e criogenia a -40°C).
  * **MARCELO CANDELARIA DE OLIVEIRA GIAROLA** (`1:36 - 5:20`): Explicou detalhadamente o loop de controle de temperatura/pressão, o espaço de estados com $2^{15}$ (32.768) combinações, o único permissivo válido e as 480 combinações de *trip* de segurança.
  * **LEO VARGAS CONSOLI RENNO** (`5:20 - 7:14`): Apresentou a localização de falhas no grafo de diagnóstico e simulação dos cenários de vazamento/sobrepressão.
* **Análise da Pasta `etapa-01-logica/`:**
  * Pasta `etapa-01-logica/` completa e presença de arquivo `main.py` na raiz do projeto.
* **Auditoria de Git:** Total de **209 commits** (maior número da turma!). João Pedro (102), Marcelo (90), Léo (11).
* **Pontos Positivos:**
  * Tema altamente complexo e crítico de engenharia (gás hidrogênio e criogenia).
  * Rigor matemático destacado ao contabilizar formalmente o espaço de estados booleano ($2^{15}$).
  * Histórico gigantesco de commits e código muito maduro.
* **Pontos Negativos:**
  * Concentração massiva de commits entre João Pedro e Marcelo, deixando o aluno Léo Renno com apenas 11 commits.

---

## 3. Quadro Resumo e Notas Sugeridas da Etapa 1

| Grupo | Tema Central | Nota Trabalho (`etapa-01-logica`) | Nota Apresentação (Áudio) | Nota Individualidade Git | Nota Final Etapa 1 |
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

---

## 4. Recomendações do Professor para as Próximas Etapas

1. **Métricas de Git e Equidade (Módulo 2 em diante):**
   * Conforme especificado no `Enunciado.md`, o histórico de commits no GitHub é auditado individualmente. Alunos que realizaram poucos commits (ex: Kilder no Grupo 8, Léo no Grupo 9, Vinicius Maciel/Resende no Grupo 1) devem enviar suas contribuições diretamente de suas contas pessoais para garantir a nota cheia.
2. **Integração dos Próximos Módulos:**
   * No Módulo 2 (Teoria dos Grafos & Roteamento), os grupos deverão conectar os intertravamentos desenvolvidos nesta Etapa 1 com a matriz de adjacência de tubulações e rotas de fluidos/AGVs.

