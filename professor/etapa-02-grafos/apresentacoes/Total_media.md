```python
doc1 = {
    "Grupo 1": ("média-alta", 7.5),
    "Grupo 2": ("alta", 10.0),
    "Grupo 3": ("alta", 10.0),
    "Grupo 4": ("média-alta", 7.5),
    "Grupo 5": ("média", 5.0),
    "Grupo 6": ("média-alta", 7.5),
    "Grupo 7": ("alta", 10.0),
    "Grupo 8": ("alta", 10.0),
    "Grupo 9": ("média-alta", 7.5)
}

doc2 = {
    "Grupo 1": ("média-alta", 7.5),
    "Grupo 2": ("alta", 10.0),
    "Grupo 3": ("alta", 10.0),
    "Grupo 4": ("média-alta", 7.5),
    "Grupo 5": ("média", 5.0),
    "Grupo 6": ("média-alta", 7.5),
    "Grupo 7": ("alta", 10.0),
    "Grupo 8": ("alta", 10.0),
    "Grupo 9": ("média-alta", 7.5)
}

doc3 = {
    "Grupo 1": ("média-alta", 7.5),
    "Grupo 2": ("média-alta", 7.5),
    "Grupo 3": ("alta", 10.0),
    "Grupo 4": ("alta", 10.0),
    "Grupo 5": ("média", 5.0),
    "Grupo 6": ("média-alta", 7.5),
    "Grupo 7": ("média-alta", 7.5),
    "Grupo 8": ("alta", 10.0),
    "Grupo 9": ("média", 5.0)
}

groups = [f"Grupo {i}" for i in range(1, 10)]

results = []
for g in groups:
    val1 = doc1[g][1]
    val2 = doc2[g][1]
    val3 = doc3[g][1]
    total = val1 + val2 + val3
    avg = total / 3.0
    results.append((g, doc1[g][0], val1, doc2[g][0], val2, doc3[g][0], val3, total, avg))

import pandas as pd
df = pd.DataFrame(results, columns=["Grupo", "Doc1 (Nemotron)", "V1", "Doc2 (Gemini)", "V2", "Doc3 (Claude)", "V3", "Soma Total", "Média"])
print(df.to_string(index=False))


```

```text
  Grupo Doc1 (Nemotron)   V1 Doc2 (Gemini)   V2 Doc3 (Claude)   V3  Soma Total     Média
Grupo 1      média-alta  7.5    média-alta  7.5    média-alta  7.5        22.5  7.500000
Grupo 2            alta 10.0          alta 10.0    média-alta  7.5        27.5  9.166667
Grupo 3            alta 10.0          alta 10.0          alta 10.0        30.0 10.000000
Grupo 4      média-alta  7.5    média-alta  7.5          alta 10.0        25.0  8.333333
Grupo 5           média  5.0         média  5.0         média  5.0        15.0  5.000000
Grupo 6      média-alta  7.5    média-alta  7.5    média-alta  7.5        22.5  7.500000
Grupo 7            alta 10.0          alta 10.0    média-alta  7.5        27.5  9.166667
Grupo 8            alta 10.0          alta 10.0          alta 10.0        30.0 10.000000
Grupo 9      média-alta  7.5    média-alta  7.5         média  5.0        20.0  6.666667


```

A conversão das avaliações qualitativas dos três pareceres para a escala numérica de 0 a 10 resulta na seguinte totalização por grupo:

| Grupo | Projeto / Tema | Avaliação Nemotron | Avaliação Gemini | Avaliação Claude | Pontuação Total (máx. 30) | Média Final (0 a 10) |
| --- | --- | --- | --- | --- | --- | --- |
| **Grupo 1** | AGV "Escada Corte" | Média-Alta (7.5) | Média-Alta (7.5) | Média-Alta (7.5) | **22.5** | **7.50** |
| **Grupo 2** | "Arco Index" (Envasadora) | Alta (10.0) | Alta (10.0) | Média-Alta (7.5) | **27.5** | **9.17** |
| **Grupo 3** | Planta de Engarrafamento | Alta (10.0) | Alta (10.0) | Alta (10.0) | **30.0** | **10.00** |
| **Grupo 4** | Classificação de Grãos | Média-Alta (7.5) | Média-Alta (7.5) | Alta (10.0) | **25.0** | **8.33** |
| **Grupo 5** | Biodiesel (Refinaria) | Média (5.0) | Média (5.0) | Média (5.0) | **15.0** | **5.00** |
| **Grupo 6** | Drone Agrícola | Média-Alta (7.5) | Média-Alta (7.5) | Média-Alta (7.5) | **22.5** | **7.50** |
| **Grupo 7** | Fábrica de Paçoca | Alta (10.0) | Alta (10.0) | Média-Alta (7.5) | **27.5** | **9.17** |
| **Grupo 8** | Célula Manufatura Flexível | Alta (10.0) | Alta (10.0) | Alta (10.0) | **30.0** | **10.00** |
| **Grupo 9** | SCADA Hidrogênio | Média-Alta (7.5) | Média-Alta (7.5) | Média (5.0) | **20.0** | **6.67** |

---

### Síntese do Rendimento Acadêmico

* **Pontuação Acumulada da Turma:** 220.0 pontos (de 270.0 possíveis, equivalente a um aproveitamento global de 81.5%).
* **Grupos de Destaque Máximo (Nota 10.0):** **Grupo 3** e **Grupo 8** obtiveram pontuação máxima consensual em todas as avaliações, demonstrando rigor matemático exemplar (DAGs, Kirchhoff, análise de ciclo e provas de complexidade) e simulações operacionais de alto nível.
* **Grupos de Excelente Desempenho (Nota 9.17):** **Grupo 2** e **Grupo 7** apresentaram sólida aplicação técnica, com pequenas ressalvas pontuais na exposição verbal ou omissão secundária da Matriz de Adjacência.
* **Pontos de Atenção Pedagógica (Grupo 5 e Grupo 9):** O **Grupo 5** (Média 5.00) apresentou a menor pontuação por omissões conceituais críticas (ausência da Matriz de Adjacência, falta de testes em malha fechada e não demonstração do simulador). O **Grupo 9** (Média 6.67) perdeu pontos devido a lacunas teóricas (Bellman-Ford não aplicado e esquecimento de algoritmos clássicos como Hierholzer).
