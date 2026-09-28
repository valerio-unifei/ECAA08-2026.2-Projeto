## Resumo geral

| Grupo | Repositório | Nota | Nível |
|---|---|---:|---|
| 1 | [Projeto-ECAA08](https://github.com/LuizFellipiFreire25/Projeto-ECAA08.git) | 78/100 | Bom |
| 2 | [Automatica---Grupo-2](https://github.com/poggerssLL/Automatica---Grupo-2.git) | 78/100 | Bom |
| 3 | [Grupo-3---ECAA08](https://github.com/GuiCastro7/Grupo-3---ECAA08.git) | 78/100 | Bom |
| 4 | [SCADA-Core_Automatica_GRUPO4](https://github.com/felipeconradovidal/SCADA-Core_Automatica_GRUPO4.git) | 76/100 | Bom |
| 5 | [Aula-Automatica---GRUPO-5](https://github.com/igorfantucci/Aula-Automatica---GRUPO-5.git) | 82/100 | Muito Bom |
| 6 | [ECAA08--Grupo-06](https://github.com/marinazakimi/ECAA08--Grupo-06.git) | 71/100 | Regular/Bom |
| 7 | [Grupo-7-ECAA08](https://github.com/AnnaGavinho/Grupo-7-ECAA08.git) | 77/100 | Bom |
| 8 | [ECAA08-Manufatura-Flexivel](https://github.com/d005810/ECAA08-Manufatura-Flexivel.git) | 61/100 | Regular |
| 9 | [Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core](https://github.com/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core.git) | 82/100 | Muito Bom |

**Média da turma: ≈76/100**

---

## Grupo 1 — 78/100

**Positivos:** tabela-verdade completa (32 estados, Aula 03); uso real de SymPy para minimização booleana genuína (`simplify_logic`, DNF/CNF, Aula 05); quantificadores `FORALL/EXISTS` sobre domínio finito real de sensores (Aula 06); motor de inferência (Aulas 08-09) genuíno, não hardcoded; boa contextualização do AGV industrial.

**Negativos:** tabela exaustiva da Aula 04 cobre apenas 5 variáveis, não o permissivo completo; prova formal da Aula 07 fica em exemplos canônicos (modus ponens/tollens) em vez da matriz real de segurança; função de verificação de integridade da base (Aula 08) tem bug de assinatura e não testa circularidade; inconsistência de modelagem entre módulos (sensores diferentes citados em aulas distintas); descompasso entre regras descritas (R-01 a R-06) e implementadas (R-01 a R-05) na Aula 10.

## Grupo 2 — 78/100

**Positivos:** catálogo de tags bem detalhado e ligado à máquina real de envasamento; prova formal completa por tabela-verdade na Aula 03 (distingue corretamente tautologia/contradição/contingência); permissivos bem formulados (REQ, permissivo, liberação, intertravamento) na Aula 04; quantificadores corretos e aplicados a domínio real (Aula 06); motor de inferência forte na Aula 09 (forward até ponto fixo, backward com árvore de prova, detecção de ciclos).

**Negativos:** Aula 05 não realiza minimização real (Karnaugh/Quine-McCluskey), é só um exemplo manual isolado, e sem saídas de célula registradas; inconsistência entre Aula 04 e 05 sobre existência de bypass de emergência; Aula 07 não prova de fato a matriz de segurança real da planta (fica em esquemas lógicos genéricos); markdown da Aula 07 truncado; Aula 10 simplifica demais a integração final (hardcode de `trip` fora do motor).

## Grupo 3 — 78/100

**Positivos:** cobertura completa 02-10; Aula 05 com minimização real por Quine-McCluskey (não é mera reescrita); Aula 07 com provador dedutivo exaustivo por tabela-verdade e refutação; Aulas 08-09 com motor forward/backward genuíno (recursão, ponto fixo, detecção de ciclo); boa integração na Aula 10 para a linha de envase.

**Negativos:** entregável de "tabela de verdade dos intertravamentos" da Aula 03 incompleto e sem saídas salvas; notebooks das Aulas 06 e 07 também sem outputs executados, enfraquecendo evidência; uso de quantificadores superficial (Aula 06); modelo da Aula 05 é genérico (E,N,P,C) em vez das tags reais do grupo; verificação de consistência da Aula 08 é simplificada demais (critério insuficiente logicamente); parte do conteúdo da Aula 10 (fertilizantes) parece apêndice tardio, destoando do domínio principal (envase).

## Grupo 4 — 76/100

**Positivos:** forte adaptação ao domínio real (classificação de grãos com visão computacional, ejetores, silos, tags ISA 5.1); formalização proposicional detalhada na Aula 02; motor de inferência genuíno na Aula 09 (forward/backward, memória de trabalho, trilha de auditoria, detecção de ciclos); boa integração de telemetria e fail-safe na Aula 10.

**Negativos:** Aula 05 não realiza minimização real, é reescrita/reuso modular; inconsistência grave — variável `p_NC701` (Silo A) presente nas Aulas 02/04/10 mas ausente nas Aulas 05/07; o método "SAT/DPLL" da Aula 07 na prática é força bruta exaustiva (rigor supervendido); notebooks sem saídas persistidas em várias aulas (03, 05, 06, 07, 08); saídas registradas na Aula 10 parecem desalinhadas do código-fonte, enfraquecendo confiabilidade.

## Grupo 5 — 82/100 (melhor nota)

**Positivos:** forte aderência ao domínio real (biodiesel por transesterificação, tags ISA, setores 100-400); prova rigorosa na Aula 03 (32.768 estados varridos com saídas executadas); permissivos e trips realmente implementados e testados na Aula 04; quantificadores corretos com exemplo executado (Aula 06); provador dedutivo genuíno por tabela-verdade e refutação (Aula 07); base de conhecimento e motor de inferência reais nas Aulas 08-09; integração da Aula 10 com 5 cenários executados.

**Negativos:** **erro matemático relevante na Aula 05** — a FNC apresentada não é equivalente à FND (o próprio notebook demonstra a divergência para A=B=C=D=0); Aula 02 entrega documentação do catálogo, mas não uma validação formal/programática; Aula 06 correta mas superficial (só um caso simples); Aula 08 não tem verificador automático de consistência/não-circularidade (apenas afirmado em texto); tratamento de negação nas regras é manual, não um mecanismo lógico geral.

## Grupo 6 — 71/100 (segunda menor nota)

**Positivos:** bom catálogo de tags adaptado ao domínio real (drone agrícola); prova correta de contradição por equivalências e exaustão (Aula 03); quantificadores corretos com checagem de De Morgan quantificada (Aula 06); motor de inferência genuíno nas Aulas 08-09.

**Negativos:** markdowns das Aulas 03-05 incompletos/truncados; validação exaustiva da Aula 04 incompleta (tabela de 16 casos só parcialmente exibida); **Aula 05 não realiza minimização real** (apenas gera FND/FNC canônicas de expressão já trivial); Aula 08 não implementa encadeamento/inserção de novos fatos e tem sobreposição de regras sem resolver redundância; regra temporal ("pressão alta por >2s") não foi implementada, ficou instantânea; **falha grave de segurança na Aula 10**: cenários "Bateria crítica" e "Botão de emergência acionado em voo" resultam em `Liga Bomba = True`, contradizendo a segurança esperada; prova formal final assume premissa não demonstrada (`interlock_liberaria = True`).

## Grupo 7 — 77/100

**Positivos:** catálogo bem contextualizado na planta de paçoca (Aula 02); validação exaustiva em 8.192 estados na Aula 03; FND/FNC canônicas com prova de equivalência na Aula 05; boa tabela-verdade completa para validade/contraexemplos na Aula 07; motor forward/backward genuíno com árvore de prova (Aula 09); integração executável com asserts na Aula 10.

**Negativos:** **notebook da Aula 06 quebra na execução** (`ValueError`), módulo de varredura global não plenamente validado; tabela-verdade da Aula 04 cobre apenas parte das variáveis (modos Auto/Manual fixos); **célula final da Aula 07 falha com `IndentationError`**, invalidando a auditoria executável; divergência entre documentação (regras com OR) e código (implementado como AND) na Aula 08, reduzindo cobertura diagnóstica; relatório da Aula 10 se autodeclara "100% validado", o que não condiz com as falhas reais das Aulas 06 e 07.

## Grupo 8 — 61/100 (menor nota)

**Positivos:** validação exaustiva de 65.536 estados na Aula 03; implementação genuína de Quine-McCluskey com prova de equivalência na Aula 05; quantificadores corretos sobre domínios explícitos (Aula 06); verificador de validade funcional na Aula 07; motor genuíno forward/backward na Aula 09.

**Negativos:** **Aula 04 incoerente com a planta do grupo** — o notebook implementa permissivo de uma planta de fertilizantes/ácido fosfórico, não de manufatura flexível (forte indício de conteúdo reaproveitado); Aula 03 não entrega tabela-verdade completa (usa linhas exemplificativas com "X"); **na Aula 05 o texto afirma reduções de 40-50% quando o código mostra 0% de redução**, e chama de "otimização" expressões que na verdade mudam a função lógica (erro grave de rigor); inconsistência de variáveis na fórmula do alarme (texto diz "5 variáveis/32 estados", fórmula real tem muito mais); Aula 08 não implementa motor de regras separado — é apenas `if/elif` hardcoded (não atende ao pedido de "base de regras" desacoplada); integração da Aula 10 não propaga corretamente falhas para alarme/trip; rastros de entrega apressada (nomenclatura inconsistente XV-201 vs XV-301, e até um link local para desktop de outro aluno).

## Grupo 9 — 82/100 (empate na melhor nota)

**Positivos:** boa contextualização real na estação de H₂ (tags ISA, setores 100-300); Aula 04 com varredura exaustiva de 512 estados provando exclusão mútua entre permissivo e trip; Aula 05 forte, com minimização por adjacência (Quine-McCluskey) e checagem de equivalência; provador formal genuíno na Aula 07; motor forward/backward genuíno e com proteção contra ciclos na Aula 09; boa evolução entre Aulas 08→09→10.

**Negativos:** Aula 03 não exibe a tabela-verdade completa pedida (só classificação agregada), e o trip de armazenamento aparece como mera contingência, não teorema de segurança provado; **erros de notação na Aula 03** (expressões malformadas como `S{1,x}`, fórmula do chiller incompleta); Aula 06 usa domínio reduzido no código (4 sensores) frente a um universo maior declarado no texto; Aula 08 usa tags de outro processo (`FT101`, `AT101_PH_BAIXO`) não específicas de H₂, e não valida de fato consistência/não-circularidade; na Aula 10 o `Trip_Ativo` é calculado por fatos primitivos fixos, não pelo resultado inferido das regras, reduzindo a coerência entre "motor de diagnóstico" e "motor de intertravamento"; cenário "normal" da Aula 10 é fraco (infere conclusão de operação normal a partir de uma única leitura de pressão).

---

## Observações transversais (padrão entre grupos)

1. **"Otimização booleana" é o ponto mais frágil da turma** — grupos 2, 4, 6 e 8 não realizaram minimização real (Karnaugh/Quine-McCluskey), apenas reescrita ou (no caso do Grupo 8) uma "otimização" matematicamente incorreta. Apenas os grupos 1, 3, 5, 7 e 9 mostraram evidência de minimização genuína.
2. **Notebooks sem saídas executadas** aparecem como problema recorrente (grupos 2, 3, 4), o que enfraquece a validação empírica exigida pelo enunciado ("prova lógica", "testes formais").
3. **Falhas de execução em notebooks entregues** (Grupo 7: `ValueError` e `IndentationError`) indicam falta de revisão final antes da entrega.
4. **Motores de inferência forward/backward chaining** foram, de modo geral, o ponto mais forte de quase todos os grupos — implementados de forma genuína (não hardcoded) em 1, 2, 3, 4, 5, 6, 7, 8 e 9.
5. **Conteúdo desalinhado com o domínio do próprio grupo** apareceu em pelo menos duas entregas (Grupo 8 na Aula 04, Grupo 9 na Aula 08), sugerindo reaproveitamento de material entre grupos ou de outra planta/exercício.

Posso, se desejar, salvar este parecer em um arquivo (ex.: `AVALIACAO_ETAPA01.md`) no repositório para referência futura.