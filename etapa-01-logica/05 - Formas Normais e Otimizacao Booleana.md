# Aula 05: Formas Normais (FND/FNC) e Otimização Booleana

## 1. Fundamentos Matemáticos: Formas Normais

Qualquer fórmula da lógica proposicional pode ser convertida para uma forma padrão canônica:

1. **Forma Normal Disjuntiva (FND / Soma de Produtos - SOP):**
   - Uma disjunção ($\lor$) de termos conjuntivos (mintermos).
   - Estrutura: $(L_{1,1} \land \dots \land L_{1,k}) \lor (L_{2,1} \land \dots \land L_{2,m}) \lor \dots$
   - Representa todos os estados nos quais a saída do sistema é **Verdadeira** ($1$).
   - Ideal para síntese de circuitos lógicos, lógica Ladder paralela e permissivos com múltiplos caminhos redundantes.

2. **Forma Normal Conjuntiva (FNC / Produto de Somas - POS):**
   - Uma conjunção ($\land$) de termos disjuntivos (maxtermos/cláusulas).
   - Estrutura: $(C_{1,1} \lor \dots \lor C_{1,k}) \land (C_{2,1} \lor \dots \lor C_{2,m}) \land \dots$
   - Representa a interseção de restrições de segurança que devem ser **simultaneamente** respeitadas.
   - Ideal para algoritmos de prova de teoremas (SAT Solvers, Algoritmo DPLL) e intertravamento de segurança (*Safety Matrix*).

---

## 2. Álgebra Booleana e Leis de Simplificação

Para minimizar o consumo de CPU em controladores de tempo real e no motor SCADA-Core, aplicam-se as identidades booleanas:

| Lei | Formulação Disjuntiva | Formulação Conjuntiva |
| :--- | :--- | :--- |
| **Identidade** | $A \lor 0 \equiv A$ | $A \land 1 \equiv A$ |
| **Dominação** | $A \lor 1 \equiv 1$ | $A \land 0 \equiv 0$ |
| **Idempotência** | $A \lor A \equiv A$ | $A \land A \equiv A$ |
| **Complemento** | $A \lor \neg A \equiv 1$ | $A \land \neg A \equiv 0$ |
| **Dupla Negação** | $\neg(\neg A) \equiv A$ | - |
| **Comutatividade** | $A \lor B \equiv B \lor A$ | $A \land B \equiv B \land A$ |
| **Associatividade** | $(A \lor B) \lor C \equiv A \lor (B \lor C)$ | $(A \land B) \land C \equiv A \land (B \land C)$ |
| **Distributividade** | $A \lor (B \land C) \equiv (A \lor B) \land (A \lor C)$ | $A \land (B \lor C) \equiv (A \land B) \lor (A \land C)$ |
| **De Morgan** | $\neg(A \land B) \equiv \neg A \lor \neg B$ | $\neg(A \lor B) \equiv \neg A \land \neg B$ |
| **Absorção** | $A \lor (A \land B) \equiv A$ | $A \land (A \lor B) \equiv A$ |

---

## 3. Aplicação na Automação: Otimização de Lógica de Queimador do Secador (Setor 200)

Considere a expressão não otimizada de liberação de gás para o queimador $G_{valv}$:
$$G_{valv} = (f_1 \land c_1 \land \neg p_{gas\_low}) \lor (f_1 \land c_1 \land p_{gas\_low} \land \text{Bypass}) \lor (f_1 \land \neg f_1 \land c_1)$$

1. O termo $(f_1 \land \neg f_1 \land c_1)$ contém contradição: $f_1 \land \neg f_1 \equiv 0 \implies 0 \land c_1 \equiv 0$.
2. Fatorando $(f_1 \land c_1)$:
   $$G_{valv} \equiv (f_1 \land c_1) \land (\neg p_{gas\_low} \lor (p_{gas\_low} \land \text{Bypass}))$$
3. Pela regra de absorção distributiva $(\neg A \lor (A \land B) \equiv \neg A \lor B)$:
   $$G_{valv\_otimizado} \equiv f_1 \land c_1 \land (\neg p_{gas\_low} \lor \text{Bypass})$$

Redução de $9$ operações lógicas para $3$, reduzindo a latência de varredura (*scan cycle*).

---

## 4. Entregável da Aula 05

* **Código Otimizado em Python:** Gerador e simplificador de expressões lógicas em FND/FNC para matrizes de segurança industrial.
