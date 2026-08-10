# Representação Simbólica das Regras de Processo e Intertravamentos

Com base no mapeamento, as intertravas de segurança (*Safety Interlocks*) e permissivos de partida são traduzidos em equações de lógica proposicional.

## A. Intertrava de Trip de Emergência do Reator de Amoniação

A válvula de corte de amônia ($v_1$) e a válvula de ácido ($v_2$) devem ser imediatamente FECHADAS ($\neg v_1 \land \neg v_2$) e o alarme acionado ($a_1$) se houver sobrepressão, sobretemperatura, vazamento de gás ou acionamento manual de emergência.

* **Condição de Falha / Evento Crítico ($F$):**

$$F \equiv p_1 \lor t_1 \lor g_1 \lor e_1$$


* **Equação Lógica de Intertravamento:**

$$F \rightarrow (\neg v_1 \land \neg v_2 \land a_1)$$



## B. Permissivo de Partida do Reator (Injeção de Reagentes)

A injeção de amônia ($v_1$) SÓ PODE ser aberta se a pressão for normal ($\neg p_1$), a temperatura for normal ($\neg t_1$), não houver vazamento ($\neg g_1$), o nível não estiver alto ($\neg l_{high}$) E o agitador estiver rodando ($m_1$).

* **Condição de Permissivo de Abertura ($P_{open}$):**

$$P_{open} \equiv \neg p_1 \land \neg t_1 \land \neg g_1 \land \neg l_{high} \land m_1$$


* **Regra Operacional:**

$$v_1 \rightarrow P_{open}$$



## C. Proteção do Agitador contra Cavitação e Sobrecarga Córnea

O motor do agitador ($m_1$) deve ser desligado se o nível for excessivamente baixo ($\neg l_{low}$ for Falso, ou seja, $l_{low} = 1$) para evitar que opere a seco, ou se a parada de emergência for ativada.

* **Regra de Desligamento do Agitador:**

$$(l_{low} \lor e_1) \rightarrow \neg m_1$$



## D. Permissivo de Injeção no Tambor Granulador (Linha NPK)

A válvula de slurry para o granulador ($v_3$) só pode abrir se o granulador estiver girando ($m_2$), o queimador do secador estiver aceso ($c_1$) e a exaustão de gases estiver operacional ($f_1$).

* **Regra de Bloqueio da Granulação:**

$$v_3 \rightarrow (m_2 \land c_1 \land f_1)$$



---

# Validação Formal por Prova Lógica (Tautologia de Segurança)

Para demonstrar ao motor do SCADA-Core que a planta nunca entrará em estado de risco de explosão por sobrepressão mantendo a amônia aberta, constrói-se a prova formal do teorema de segurança.

* **Afirmação de Segurança:** "Não é possível ter sobrepressão ($p_1$) E manter a válvula de $\text{NH}_3$ aberta ($v_1$)."
* **Proposição do Estado de Risco ($S_{risco}$):**

$$S_{risco} \equiv p_1 \land v_1$$



Dada a regra de intertravamento implementada no controlador:


$$p_1 \rightarrow \neg v_1$$

Aplica-se a equivalência lógica do condicional ($\mathbf{A} \rightarrow \mathbf{B} \equiv \neg \mathbf{A} \lor \mathbf{B}$):


$$p_1 \rightarrow \neg v_1 \equiv \neg p_1 \lor \neg v_1$$

Substituindo o estado de risco sob a premissa de que a regra $p_1 \rightarrow \neg v_1$ é estritamente VERDADEIRA (restringindo o espaço de estados):

$$S_{risco} \land (\neg p_1 \lor \neg v_1)$$

$$(p_1 \land v_1) \land (\neg p_1 \lor \neg v_1)$$

Distribuindo $(p_1 \land v_1)$:


$$\big((p_1 \land v_1) \land \neg p_1\big) \lor \big((p_1 \land v_1) \land \neg v_1\big)$$

$$(Falso \land v_1) \lor (p_1 \land Falso)$$

$$Falso \lor Falso \equiv \text{FALSO}$$