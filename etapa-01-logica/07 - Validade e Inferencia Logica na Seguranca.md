# Aula 07: Validade de Argumentos e Inferência Lógica na Segurança de Processos

## 1. Fundamentos Matemáticos: Argumentos Dedutivos e Regras de Inferência

Um **argumento dedutivo** é uma sequência finita de proposições:
$$P_1, P_2, \dots, P_k \vdash C \quad \iff \quad (P_1 \land P_2 \land \dots \land P_k) \rightarrow C$$

Um argumento é **válido** se e somente se for uma **tautologia** (é impossível que todas as premissas sejam verdadeiras e a conclusão seja falsa).

### Regras Clássicas de Inferência Aplicadas ao SCADA:
1. **Modus Ponens (Afirmação do Antecedente):**
   $$P \rightarrow Q, \; P \vdash Q$$
2. **Modus Tollens (Negação do Consequente):**
   $$P \rightarrow Q, \; \neg Q \vdash \neg P$$

---

## 2. Entregável da Aula 07

* **Verificador Formal de Argumentos em Python:** Sistema capaz de testar a validade lógica de argumentos de segurança e gerar árvores de dedução passo-a-passo.
