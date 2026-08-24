# Aula 08: Sistemas Especialistas — Base de Conhecimento e Regras de Diagnóstico

## 1. Fundamentos Matemáticos: Arquitetura de Sistemas Baseados em Regras (RBS)

Um **Sistema Especialista Baseado em Regras de Produção** é uma estrutura formal de raciocínio simbólico composta pela tripla $\langle \mathcal{F}, \mathcal{R}, \mathcal{M} \rangle$:

1. **Base de Fatos ($\mathcal{F}$):** Conjunto finito de asserções atômicas que descrevem o estado do processo em um determinado instante:
   $$\mathcal{F}(t) = \{f_1, f_2, \dots, f_m\} \subseteq \mathcal{U}_{\text{fatos}}$$
2. **Base de Conhecimento / Regras ($\mathcal{R}$):** Conjunto de regras de produção expressas na forma canônica:
   $$R_i: \text{SE } (A_{i,1} \land A_{i,2} \land \dots \land A_{i,k}) \text{ ENTÃO } C_i$$

---

## 2. Entregável da Aula 08

* **Base de Conhecimento Estruturada em Python:** Definição das classes `Fato`, `Regra` e `BaseConhecimento` contendo catálogo completo de diagnósticos de falha para a planta de fertilizantes.
