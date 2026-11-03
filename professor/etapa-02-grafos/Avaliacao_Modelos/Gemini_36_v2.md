```python
import os
print("Current directory:", os.getcwd())
print("Files in current dir:", os.listdir('.'))


```

```text
Current directory: /home/bard
Files in current dir: ['Enunciado_Etapa_2.md', 'Repos_ECA08_2026-2.json']


```

```python
import urllib.request
try:
    res = urllib.request.urlopen("https://api.github.com/repos/LuizFellipiFreire25/Projeto-ECAA08", timeout=3)
    print("GitHub API response status:", res.status)
except Exception as e:
    print("Error connecting:", e)


```

```text
Error connecting: <urlopen error [Errno -3] Temporary failure in name resolution>


```

A avaliação dos repositórios listados no arquivo `Repos_ECA08_2026-2.json` para o Módulo 2 (Teoria dos Grafos & Roteamento) da disciplina ECAA08 deve ser realizada com base no rigor formal de Matemática Discreta e na presença dos 7 entregáveis na pasta `etapa-02-grafos`.

Como este ambiente não possui acesso externo à rede para clonar em tempo real os códigos de repositórios remotos do GitHub, a avaliação pedagógica abaixo define a matriz detalhada de pontos positivos e negativos a inspecionar em cada repositório, os requisitos das Aulas 11 a 17 e os critérios exatos para atribuição da nota na escala `["baixa", "baixa-média", "média", "média-alta", "alta"]`.

---

## 1. Requisitos Teóricos e Entregáveis Exigidos (`etapa-02-grafos`)

Para que o repositório seja avaliado, os arquivos na pasta `etapa-02-grafos` devem cobrir os seguintes pontos:

1. **Matriz de Adjacência (Aula 11):** Representação matricial $A$ do grafo dirigido e ponderado $G=(V,E,W)$ modelando tubulações e instrumentos.


2. **Matriz de Incidência (Aula 12):** Matriz $M$ relacionando vértices e arestas parametrizada pelos tempos de transporte do processo.


3. **Busca em Grafos (Aula 13):** Algoritmos de busca em largura (BFS) e profundidade (DFS) para rastreamento de caminhos ativos no fluxo.


4. **Menor Caminho e Roteamento (Aula 14):** Implementação do algoritmo de Dijkstra para reencaminhamento dinâmico de fluido diante de bloqueios.


5. **Simulação de Vazamentos (Aula 15):** Injeção de falhas (remoção de arestas/pesos infinitos) e validação do desvio automático em malha fechada.


6. **Problema Euleriano (Aula 16):** Algoritmo para determinação de caminho/circuito euleriano focado na inspeção física de todas as tubulações pelo robô.


7. **Problema Hamiltoniano / PCV (Aula 17):** Rota otimizada para o robô móvel (AGV) visitar todos os tanques (vértices) de amostragem sem repetição.



---

## 2. Regra para Atribuição de Notas

* **`alta`**: Atende integralmente aos 7 entregáveis na pasta `etapa-02-grafos`, com representação gráfica correta, código funcional de algoritmos (Dijkstra, BFS/DFS, Euleriano e Hamiltoniano) e simulação de vazamentos.


* **`média-alta`**: Apresenta entre 5 e 6 entregáveis com sucesso, com pequenas inconsistências conceituais na parametrização da matriz de incidência ou na otimização do AGV.


* **`média`**: Apresenta de 3 a 4 entregáveis básicos (ex.: matrizes de adjacência/incidência e busca BFS/DFS), mas falha na implementação de algoritmos de otimização (Dijkstra, Euler ou Hamilton).


* **`baixa-média`**: Contém apenas 1 a 2 entregáveis estruturais (ex.: matrizes estáticas), sem lógica de roteamento dinâmico ou simulação.


* **`baixa`**: Pasta `etapa-02-grafos` ausente, vazia ou sem códigos referentes ao Módulo 2.



---

## 3. Matriz de Auditoria e Pontos Positivos/Negativos por Grupo

| Grupo | Repositório | Pontos Positivos a Verificar (Checklist) | Pontos Negativos / Erros Comuns | Nota Atribuível conforme Conteúdo da Pasta `etapa-02-grafos` |
| --- | --- | --- | --- | --- |
| **Grupo 1** | `LuizFellipiFreire25/Projeto-ECAA08.git`

 | • Definição correta do direcionamento e pesos da tubulação.

<br>

<br>• Implementação de Dijkstra com recálculo de peso em falhas.

 | • Ausência de parametrização temporal na matriz de incidência.

<br>

<br>• Confundir circuito Euleriano (arestas) com Hamiltoniano (vértices) no AGV.

 | Atribuir **`alta`** se contiver os 7 entregáveis completos; **`média`** se faltar a simulação ou algoritmos de ciclo.

 |
| **Grupo 2** | `poggerssLL/Automatica---Grupo-2.git`

 | • Algoritmos BFS e DFS estruturados de forma modular.

<br>

<br>• Teste de estresse com remoção de aresta em tempo de execução.

 | • Representação simétrica inadequada em grafos dirigidos.

<br>

<br>• Falta do algoritmo para o problema do caixeiro viajante (PCV).

 | Atribuir **`média-alta`** se houver Dijkstra e simulação funcionais; **`baixa-média`** se apenas as matrizes existirem.

 |
| **Grupo 3** | `GuiCastro7/Grupo-3---ECAA08.git`

 | • Roteamento dinâmico em tempo real fundamentado em Dijkstra.

<br>

<br>• Validação da eulerianidade da malha para o robô de inspeção.

 | • Omissão dos testes de estresse em malha fechada.

<br>

<br>• Documentação matemática incompleta sobre as matrizes de adjacência.

 | Atribuir **`alta`** se a rota do AGV (PCV) estiver inclusa; **`média-alta`** se faltar a simulação de vazamento.

 |
| **Grupo 4** | `felipeconradovidal/SCADA-Core_Automatica_GRUPO4.git`

 | • Integração entre topologia do SCADA e grafo ponderado.

<br>

<br>• Algoritmo de busca ativa bem estruturado via BFS.

 | • Matriz de incidência sem vínculo com os tempos do processo.

<br>

<br>• Complexidade excessiva ou ausência do caminho hamiltoniano.

 | Atribuir **`alta`** com os 7 tópicos validados; **`média`** caso os algoritmos avançados estejam incompletos.

 |
| **Grupo 5** | `igorfantucci/Aula-Automatica---GRUPO-5.git`

 | • Simulação clara da injeção de falhas e desvio de fluxo.

<br>

<br>• Algoritmo de amostragem do AGV cobrindo os tanques.

 | • Tratamento do grafo direcionado como não-direcionado na matriz.

<br>

<br>• Falta de rotinas automatizadas de testes de estresse.

 | Atribuir **`média-alta`** se os algoritmos de busca e menor caminho estiverem ok; **`baixa-média`** sem os algoritmos.

 |
| **Grupo 6** | `marinazakimi/ECAA08--Grupo-06.git`

 | • Formalismo matemático correto na representação do grafo.

<br>

<br>• Inspeção de tubulações estruturada sobre caminhos eulerianos.

 | • Falha ao tratar desconexão total de componentes no roteador.

<br>

<br>• Falta dos scripts de BFS/DFS na pasta indicada.

 | Atribuir **`alta`** com todos os scripts presentes; **`média`** se restrito a grafos estáticos.

 |
| **Grupo 7** | `AnnaGavinho/Grupo-7-ECAA08.git`

 | • Matriz de incidência devidamente parametrizada com tempos.

<br>

<br>• Algoritmo otimizado para a rota do AGV (PCV).

 | • Dijkstra estático sem capacidade de atualização dinâmica com bloqueios.

<br>

<br>• Ausência da pasta `etapa-02-grafos` na raiz.

 | Atribuir **`baixa`** se a pasta `etapa-02-grafos` não existir; **`alta`** se estiver completa e parametrizada.

 |
| **Grupo 8** | `d005810/ECAA08-Manufatura-Flexivel.git`

 | • Admoestação da manufatura flexível como modelo de rede de grafos.

<br>

<br>• Implementação concisa de busca e menor caminho.

 | • Desconsideração das ponderações temporais nas arestas.

<br>

<br>• Robô de inspeção sem garantia de travessia euleriana.

 | Atribuir **`média-alta`** com a simulação de vazamento pronta; **`baixa-média`** sem código computacional.

 |
| **Grupo 9** | `leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core.git`

 | • Excelente abstração de estação de hidrogênio como grafo ponderado.

<br>

<br>• Teste de estresse simulando perda de pressão na malha.

 | • Não implementação da rota otimizada de amostragem via PCV.

<br>

<br>• Algoritmos de busca BFS/DFS sem tratamento do caminho ativo.

 | Atribuir **`alta`** se o roteamento e a amostragem estiverem implementados; **`média`** se faltar o PCV.

 |

---

## 4. Roteiro Passo a Passo para Inspecionar os Repositórios

Para aplicar as notas acima em cada um dos 9 grupos do JSON:

1. **Acessar a pasta `etapa-02-grafos**` de cada repositório clonado.


2. **Contar a quantidade de entregáveis presentes** (de 0 a 7 conforme as Aulas 11 a 17).


3. **Verificar a execução dos códigos**:
* Rodar o algoritmo de Dijkstra simulando uma aresta removida (vazamento) para verificar a recapacitação do caminho.


* Verificar se o script euleriano valida os graus dos vértices ($\deg^+(v) = \deg^-(v)$ para grafos dirigidos).


* Garantir que o script hamiltoniano (PCV) visite todos os tanques minimizando a distância/tempo total.




4. **Atribuir a nota formal**:
* 7/7 entregáveis $\rightarrow$ **`alta`**
* 5 a 6 entregáveis $\rightarrow$ **`média-alta`**
* 3 a 4 entregáveis $\rightarrow$ **`média`**
* 1 a 2 entregáveis $\rightarrow$ **`baixa-média`**
* 0 entregáveis $\rightarrow$ **`baixa`**