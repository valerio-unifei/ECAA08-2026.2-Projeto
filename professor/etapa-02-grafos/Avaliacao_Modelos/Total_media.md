# PROMPT

Dada as listas de notas disponíveis em anexo obtenha uma nota média dos grupos, levantando os pontos positivos e negativos gerais.

Calcule as notas médias baseadas na enumeração convertida para números da seguinte forma: {"baixa":0.0, "baixa-média":2.5, "média":5.0, "média-alta":7.5, "alta":10.0}

# RESPOSTA

```python
doc1 = """
| Grupo | Planta modelada | Nota |
|---|---|---|
| 1 | Malha de AGV (6 nós) | baixa-média |
| 2 | Envasadora pneumática de copos | alta |
| 3 | Linha de envase de bebidas | média-alta |
| 4 | Planta de classificação de grãos | alta |
| 5 | Planta de biodiesel | média |
| 6 | Drone agrícola de pulverização | alta |
| 7 | Fábrica de paçoca | média |
| 8 | Célula de manufatura flexível (esteiras/triagem) | média-alta |
| 9 | Estação de reabastecimento de H₂ | média |
"""

doc2 = """
| Grupo | Nota |
|-------|------|
| 1     | baixa-média |
| 2     | alta |
| 3     | alta |
| 4     | média-alta |
| 5     | média-alta |
| 6     | alta |
| 7     | baixa |
| 8     | média |
| 9     | média |
"""

doc3 = """
| Grupo | Nota |
| :--- | :--- |
| 1 | baixa-média |
| 2 | média-alta |
| 3 | alta |
| 4 | baixa-média |
| 5 | baixa |
| 6 | alta |
| 7 | média |
| 8 | média |
| 9 | média |
"""

doc4 = """
| Grupo | Repositório | Nota |
| --- | --- | --- |
| **Grupo 1** | `LuizFellipiFreire25/Projeto-ECAA08.git` | **média-alta** |
| **Grupo 2** | `poggerssLL/Automatica---Grupo-2.git` | **média** |
| **Grupo 3** | `GuiCastro7/Grupo-3---ECAA08.git` | **alta** |
| **Grupo 4** | `felipeconradovidal/SCADA-Core_Automatica_GRUPO4.git` | **alta** |
| **Grupo 5** | `igorfantucci/Aula-Automatica---GRUPO-5.git` | **média-baixa** |
| **Grupo 6** | `marinazakimi/ECAA08--Grupo-06.git` | **média-alta** |
| **Grupo 7** | `AnnaGavinho/Grupo-7-ECAA08.git` | **alta** |
| **Grupo 8** | `d005810/ECAA08-Manufatura-Flexivel.git` | **baixa-média** |
| **Grupo 9** | `leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core.git` | **média-alta** |
"""

doc5_note = "Check Gemini_36_v2" # Wait, let's check what Gemini 36 v2 has

doc6 = """
| Grupo | Nota       |
| ----- | ---------- |
| 1     | baixa      |
| 2     | alta       |
| 3     | média-alta |
| 4     | média-alta |
| 5     | média-alta |
| 6     | alta       |
| 7     | média      |
| 8     | baixa      |
| 9     | média-alta |
"""

doc7 = """
| Grupo | Nota       | Síntese |
| 1 | média | ... |
| 2 | alta | ... |
| 3 | média-alta | ... |
| 4 | alta | ... |
| 5 | alta | ... |
| 6 | média-alta | ... |
| 7 | média-alta | ... |
| 8 | média-alta | ... |
| 9 | média-alta | ... |
"""

doc8 = """
| Grupo | Nota |
|---|---|
| 4 | alta |
| 6 | alta |
| 2 | média-alta |
| 8 | média-alta |
| 3 | média |
| 5 | média |
| 9 | média |
| 7 | baixa-média |
| 1 | baixa |
"""

print("Doc 1 to 8 defined.")


```

```text
Doc 1 to 8 defined.


```

```python
mapping = {
    "baixa": 0.0,
    "baixa-média": 2.5,
    "média-baixa": 2.5,
    "média": 5.0,
    "média-alta": 7.5,
    "alta": 10.0
}

# Explicit grades from each document:

evaluations = {
    "Claude_Sonnet55_v2": {
        1: "baixa-média",
        2: "alta",
        3: "média-alta",
        4: "alta",
        5: "média",
        6: "alta",
        7: "média",
        8: "média-alta",
        9: "média"
    },
    "DeepSeek_41_v1": {
        1: "baixa-média",
        2: "alta",
        3: "alta",
        4: "média-alta",
        5: "média-alta",
        6: "alta",
        7: "baixa",
        8: "média",
        9: "média"
    },
    "DeepSeek_41_v2": {
        1: "baixa-média",
        2: "média-alta",
        3: "alta",
        4: "baixa-média",
        5: "baixa",
        6: "alta",
        7: "média",
        8: "média",
        9: "média"
    },
    "Gemini_36_v1": {
        1: "média-alta",
        2: "média",
        3: "alta",
        4: "alta",
        5: "média-baixa",
        6: "média-alta",
        7: "alta",
        8: "baixa-média",
        9: "média-alta"
    },
    "GPT_61Luna_v1": {
        1: "baixa",
        2: "alta",
        3: "média-alta",
        4: "média-alta",
        5: "média-alta",
        6: "alta",
        7: "média",
        8: "baixa",
        9: "média-alta"
    },
    "GPT_61Luna_v2": {
        1: "média",
        2: "alta",
        3: "média-alta",
        4: "alta",
        5: "alta",
        6: "média-alta",
        7: "média-alta",
        8: "média-alta",
        9: "média-alta"
    },
    "Claude_Sonnet55_v1": {
        1: "baixa",
        2: "média-alta",
        3: "média",
        4: "alta",
        5: "média",
        6: "alta",
        7: "baixa-média",
        8: "média-alta",
        9: "média"
    }
}

import pandas as pd

df_qual = pd.DataFrame(evaluations)
df_num = df_qual.applymap(lambda x: mapping[x])

df_num['Média'] = df_num.mean(axis=1)

print("--- QUALITATIVE GRADES ---")
print(df_qual)
print("\n--- NUMERICAL GRADES ---")
print(df_num)


```

```text
--- QUALITATIVE GRADES ---
  Claude_Sonnet55_v2 DeepSeek_41_v1 DeepSeek_41_v2 Gemini_36_v1 GPT_61Luna_v1 GPT_61Luna_v2 Claude_Sonnet55_v1
1        baixa-média    baixa-média    baixa-média   média-alta         baixa         média              baixa
2               alta           alta     média-alta        média          alta          alta         média-alta
3         média-alta           alta           alta         alta    média-alta    média-alta              média
4               alta     média-alta    baixa-média         alta    média-alta          alta               alta
5              média     média-alta          baixa  média-baixa    média-alta          alta              média
6               alta           alta           alta   média-alta          alta    média-alta               alta
7              média          baixa          média         alta         média    média-alta        baixa-média
8         média-alta          média          média  baixa-média         baixa    média-alta         média-alta
9              média          média          média   média-alta    média-alta    média-alta              média

--- NUMERICAL GRADES ---
   Claude_Sonnet55_v2  DeepSeek_41_v1  DeepSeek_41_v2  Gemini_36_v1  GPT_61Luna_v1  GPT_61Luna_v2  Claude_Sonnet55_v1     Média
1                 2.5             2.5             2.5           7.5            0.0            5.0                 0.0  2.857143
2                10.0            10.0             7.5           5.0           10.0           10.0                 7.5  8.571429
3                 7.5            10.0            10.0          10.0            7.5            7.5                 5.0  8.214286
4                10.0             7.5             2.5          10.0            7.5           10.0                10.0  8.214286
5                 5.0             7.5             0.0           2.5            7.5           10.0                 5.0  5.357143
6                10.0            10.0            10.0           7.5           10.0            7.5                10.0  9.285714
7                 5.0             0.0             5.0          10.0            5.0            7.5                 2.5  5.000000
8                 7.5             5.0             5.0           2.5            0.0            7.5                 7.5  5.000000
9                 5.0             5.0             5.0           7.5            7.5            7.5                 5.0  6.071429


```

```python
for group in range(1, 10):
    vals = [df_num.loc[group, col] for col in df_qual.columns]
    avg = sum(vals) / len(vals)
    print(f"Grupo {group}: {vals} -> Soma = {sum(vals)}, Média = {avg:.2f}")


```

```text
Grupo 1: [2.5, 2.5, 2.5, 7.5, 0.0, 5.0, 0.0] -> Soma = 20.0, Média = 2.86
Grupo 2: [10.0, 10.0, 7.5, 5.0, 10.0, 10.0, 7.5] -> Soma = 60.0, Média = 8.57
Grupo 3: [7.5, 10.0, 10.0, 10.0, 7.5, 7.5, 5.0] -> Soma = 57.5, Média = 8.21
Grupo 4: [10.0, 7.5, 2.5, 10.0, 7.5, 10.0, 10.0] -> Soma = 57.5, Média = 8.21
Grupo 5: [5.0, 7.5, 0.0, 2.5, 7.5, 10.0, 5.0] -> Soma = 37.5, Média = 5.36
Grupo 6: [10.0, 10.0, 10.0, 7.5, 10.0, 7.5, 10.0] -> Soma = 65.0, Média = 9.29
Grupo 7: [5.0, 0.0, 5.0, 10.0, 5.0, 7.5, 2.5] -> Soma = 35.0, Média = 5.00
Grupo 8: [7.5, 5.0, 5.0, 2.5, 0.0, 7.5, 7.5] -> Soma = 35.0, Média = 5.00
Grupo 9: [5.0, 5.0, 5.0, 7.5, 7.5, 7.5, 5.0] -> Soma = 42.5, Média = 6.07


```

A conversão das notas qualitativas atribuídas nos relatórios anexados segue a escala definida:

* **baixa**: $0{,}0$
* **baixa-média** / **média-baixa**: $2{,}5$
* **média**: $5{,}0$
* **média-alta**: $7{,}5$
* **alta**: $10{,}0$

Os relatórios analisados contêm avaliações diretas dos relatórios **Claude Sonnet v1**, **Claude Sonnet v2**, **DeepSeek v1**, **DeepSeek v2**, **Gemini v1**, **GPT Luna v1** e **GPT Luna v2** (o arquivo *Gemini v2* apresenta uma estrutura de rubrica condicional sem atribuição direta de notas fixas).

---

### Tabela de Notas e Média Final por Grupo

| Grupo | Claude v2 | DeepSeek v1 | DeepSeek v2 | Gemini v1 | GPT v1 | GPT v2 | Claude v1 | Soma | Média Numérica | Classificação Equivalente |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Grupo 1** | 2,5 | 2,5 | 2,5 | 7,5 | 0,0 | 5,0 | 0,0 | **20,0** | **2,86** | **baixa-média** |
| **Grupo 2** | 10,0 | 10,0 | 7,5 | 5,0 | 10,0 | 10,0 | 7,5 | **60,0** | **8,57** | **alta** |
| **Grupo 3** | 7,5 | 10,0 | 10,0 | 10,0 | 7,5 | 7,5 | 5,0 | **57,5** | **8,21** | **média-alta / alta** |
| **Grupo 4** | 10,0 | 7,5 | 2,5 | 10,0 | 7,5 | 10,0 | 10,0 | **57,5** | **8,21** | **média-alta / alta** |
| **Grupo 5** | 5,0 | 7,5 | 0,0 | 2,5 | 7,5 | 10,0 | 5,0 | **37,5** | **5,36** | **média** |
| **Grupo 6** | 10,0 | 10,0 | 10,0 | 7,5 | 10,0 | 7,5 | 10,0 | **65,0** | **9,29** | **alta** |
| **Grupo 7** | 5,0 | 0,0 | 5,0 | 10,0 | 5,0 | 7,5 | 2,5 | **35,0** | **5,00** | **média** |
| **Grupo 8** | 7,5 | 5,0 | 5,0 | 2,5 | 0,0 | 7,5 | 7,5 | **35,0** | **5,00** | **média** |
| **Grupo 9** | 5,0 | 5,0 | 5,0 | 7,5 | 7,5 | 7,5 | 5,0 | **42,5** | **6,07** | **média-alta** |

---

### Panorama Geral de Pontos Positivos e Negativos

#### Pontos Positivos Gerais

* **Rigor Formal em Modelagem de Grafos (Grupos 2, 4 e 6):** Apresentação detalhada das matrizes de adjacência e incidência, verificação do posto matricial, teorema de parênteses no DFS e conservação de fluxo via leis de Kirchhoff.
* **Otimização Avançada do TSP / Problema Hamiltoniano (Grupos 4, 5 e 8):** Implementação de busca exata (força bruta / Held-Karp), verificação da desigualdade triangular, cálculo do fecho métrico via Floyd-Warshall e comparação entre heurísticas (Vizinho Mais Próximo + 2-Opt) contra cotas inferiores (MST / 1-tree).
* **Tratamento Dinâmico de Contingências (Grupos 2, 3, 6 e 9):** Aplicação de Dijkstra com fila de prioridades para recálculo de rotas em caso de bloqueio ou vazamento na rede.
* **Qualidade de Documentação e Testes (Grupos 2 e 6):** Presença de suítes de verificação automatizada (de 50 a 67 `assert`s por repositório), relatórios de validação cruzada (Dijkstra vs. Floyd-Warshall em 1.440 consultas) e interfaces web interativas.

#### Pontos Negativos Gerais

* **Incompletude da Condição Euleriana (Grupos 1, 4, 5, 7 e 9):** Verificação restrita à paridade dos graus dos vértices, omitindo a validação da conectividade do grafo (condição indispensável para existência do circuito de Hierholzer).
* **Falta de Reprodutibilidade nas Saídas Salvas (Grupos 3, 5 e 7):** Notebooks entregues com erros de execução, asserções que falham quando reexecutadas do início ou células sem resultados salvos.
* **Ausência ou Desorganização de Entregáveis (Grupos 1, 7 e 8):** Ausência da pasta `etapa-02-grafos` ou de entregáveis obrigatórios (como a simulação de vazamentos da Aula 15) em ramos principais de repositórios.
* **Simplificação e Desconexão do Modelo Físico (Grupos 1 e 7):** Redução do problema a grafos de poucos nós desconectados da tubulação/instrumentação real ou reutilização direta de gabaritos numéricos padrão sem adaptação ao processo industrial.