# Aula 09: Motores de Inferência — Encadeamento para Frente e para Trás

## 1. Fundamentos Matemáticos: Algoritmos de Inferência em Lógica de Produção

Um **Motor de Inferência (Inference Engine)** é o algoritmo formal responsável por aplicar as regras da base de conhecimento ($\mathcal{R}$) sobre os fatos ativos ($\mathcal{F}$) para produzir novas deduções ou provar hipóteses.

### 1.1. Encadeamento para Frente (*Forward Chaining* — Data-Driven)
* **Princípio:** Inicia com os **fatos conhecidos** (telemetria em tempo real) e dispara todas as regras cujos antecedentes são verdadeiros (*Modus Ponens* sucessivo), adicionando os consequentes à base de fatos até alcançar um ponto fixo (*Fixed Point*).

### 1.2. Encadeamento para Trás (*Backward Chaining* — Goal-Driven)
* **Princípio:** Inicia com uma **hipótese/meta** (ex: "Houve explosão iminente?") e busca recursivamente quais regras poderiam provar essa meta.

---

## 2. Entregável da Aula 09

* **Motor Híbrido de Inferência em Python:** Implementação orientada a objetos dos algoritmos *Forward Chaining* e *Backward Chaining* com rastreamento completo da árvore de inferência (*Audit Trail*).
