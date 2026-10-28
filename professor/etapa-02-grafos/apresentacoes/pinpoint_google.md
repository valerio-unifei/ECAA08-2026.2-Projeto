# Grupo 1

- Luis Daniel
- Daniel
- Vinicius Kodi
- Vinicius Rezende

## Transcrição
Boa tarde. Vou iniciar aqui a apresentação do meu grupo, dando uma visão geral novamente sobre o processo e também fazendo um grande com a etapa 1. O nosso projeto escada corte, ele é baseado em um AGV, que é o veículo autônomo guiado, nesse caso por visão computacional. E na etapa 1, nós fizemos levantamento das variáveis de entrada e também das variáveis de saída, no caso dos atuadores. Agora na etapa 2, a gente vai elevar o nível um pouco mais. É, a gente vai aplicar teoria de grafos na navegação do AGV.

Então o AGV, como o próprio nome já disse, ele tem que ser capaz de se guiar de maneira autónoma. Então, por meio da teoria de gráficos, nós vamos modelar o processo, é, de modo que o AGV seja capaz de se guiar de maneira autónoma dentro do chão de papel. Bom, vamos lá. É, nós modelamos a malha do AGV como sendo um dígrafo ponderado, igual evidenciado aqui na parte de cima do slide, onde esse dígrafo, ele vai conter um conjunto de vértices B.

Esse conjunto ele tem ele possui seis, é, estações de operação e também tem um conjunto de vértices Z que possui oito corredores dirigidos. Esses corredores, ele tá relacionado às tags que a gente atribuiu na primeira etapa. E também esse dígito, ele contém esse esse vetor aqui que é o W, que seria o o vetor de pesos. Então, aqui no nosso contexto, esse peso seria distância física em metros.

Então, é uma forma aqui de compactar a informação. são bastante interessantes. Todas as informações vão nos dar a matriz de adjacência ponderada do processo, onde a diagonal principal da matriz será preenchida com zeros e os índices que não tem, onde não possui corredor, né? Vão ser preenchidos com infinito, tá bom? E vai ser uma matriz 6x6 também.

É, assim, é meio complexo assim de entender, somente falando, mas tudo isso foi implementado via Python, o do notebook da ONG, então quem tiver interesse, só dá uma olhada lá. Pode Bom, então aqui é entra aquela parte também que eu falei um pouco mais sobre a matriz de incidência.

Como eu disse, o diagonal principal vai ser preenchido com zeros e o corredor onde não tem, e os índices onde não tem corredor vai ser preenchido com o infinito. Bom, agora a gente vai falar um pouco sobre a aula 13 e a aula 13 a gente usa o motor escada para explorar topologicamente a malha. E a gente usa dois algoritmos para isso. A gente usa o BFS e o DFS. O BFS a gente explora pela largura.

Ele usa a fila FIFO, que é o first in first out. E a gente busca por esse método o menor a menor quantidade de paradas para o para o nosso motor.

E a gente tem a busca em profundidade também, que é a FIFO, que é o last in first out, que a gente busca, é, achar os quatro caminhos simples de contingência, onde ele deixa um último caminho para ele conseguir voltar sem passar, é, de novo em nenhum, nenhuma das, das partes que ele já passou. E na aula 14 a gente aprende o algoritmo desse, desse novo, que Maravilhoso.

a gente deixa de procurar a menor quantidade de paradas e começa a procurar pela menor quantidade de meta entre um ponto e outro. A gente usa isso com esse algoritmo que tá pequeno, mas não dá para chegar e a gente também usa a fila de mendi que garante a extração rápida de estação mais próximo do robô. A gente usa isso com o objetivo de engenharia de economizar o estado da bateria.

E reduzir o desgaste elétrico do motor. E é importante ressaltar que a gente só pode usar esse esse método quando não tem nenhum valor negativo nos pesos, porque senão ele dá erro no no cálculo. Isso. Agora falando sobre a aula 15, qual que é o objetivo dela? Ela tem como objetivo mostrar como que o AGV vai reagir quando ele tiver um obstáculo na frente dele. Então, vamos supor, a gente tem um caminho A e ele precisa perseguir esse caminho.

E aí acontece alguma coisa e tem um obstáculo nele. O que que que vai acontecer? A gente vai usar essa equação, por quê? Porque ele vai colocar um peso infinito na escolha desse caminho. Então, ele não vai escolher caminho e o algoritmo do do holandês Dijkstra, ele vai recalcular a rota, visando uma menor distância percorrida e uma rota alternativa. Mas vamos supor, não tem não tem nenhum outro caminho, não tem mais nenhum. O que ele vai fazer? Ele vai fazer uma parada visando a a priorizar a segurança e evitar o obstáculo.

Pode passar. E agora na aula 16, o que que ele tem de diferente? A aula 15, a gente mostrava como reagir, como queria reagir a um obstáculo. Já a aula 16, ele vai mostrar para como que a gente vai percorrer todos os corredores e fazer essas inspeções. Então, eh primeiro a gente vai usar o conceito da do circuito euleriano, por quê? Porque para ele percorrer todos os corredores, pelo pelo menos uma vez e sem repetições. E como que a gente como que ele faz para dar certo?

Ele precisa que o circuito ele possua ligações pares, mas o nosso ele possui duas malhas que possuem ligações ímpares. E como é que a gente vai fazer para ele dar certo? A gente vai usar o conceito de carteiro chinês, que ele limita o número de repetições para que ele possa chegar nesse número par e construir o gráfico. E para finalizar, a gente vai usar o o circuito do alemão Hierholzer para que a gente possa é construir o circuito completo.

E para finalizar, a gente vai conseguir realizar o planejamento de um circuito de de inspeções, visando a menor distância percorrida.

Certo. É, agora falando mais um pouco sobre o que o coach tava falando, né? A gente escala o problema agora não só para visitar todos os postos, pelo menos uma vez, agora a gente tem que retornar também ao posto inicial pelo caminho mais curto. Então, visando isso aí, a gente É, aplicou o algoritmo cadenciado, né? É o Nearest Neighbor. Então, primeiramente o agente vai cruzar toda a fábrica, né? No vizinho mais próximo, depois vai retornar a um outro ponto, né?

Vai acabar realizando um um cruzamento geométrico, né? Em seguida a gente vai também aplicar o OPT2, né? Para otimizar esse circuito, né? Então ele vai inverter os segmentos da rota e depois fazer o cruzamento encontrando uma rota menor menor, tá? Só uma coisa que eu esqueci de mencionar, que isso aqui na verdade é o ciclo retroniano, né? Que é o inverso do ciclo euleriano que cresce de forma linear, esse cresce de forma fatorial.

Então, a quantidade de pontos, é, quanto maior a quantidade de pontos, maior dificuldade de você resolver esse problema, né? Até por isso que a gente usou essas duas estratégias, tá? Aí na aula 18 a gente fez uma rede multicamadas, tá? É, uma primeira camada física que engloba todos os AGVs, circulam pela fábrica.

e uma segunda, uma camada de de materiais, né, uma segunda de de eh pois é o seguinte, no nosso processo tem alguns processos reversíveis, então eh dependendo do tipo de de ordem, o motor deve barrar essa ordem. Que para fazer essa essa eh essa verificação, a gente usou o algoritmo de canto, tá?

Então qualquer ordem que passa em processos que tem eh processos irreversíveis ou que não estejam dentro da matriz eh atribuída para aquele produto, eles devem ser barrados pelo pelo próprio motor, tá? E acho que no geral é isso, a gente tem a nossa, é, a nossa é, simulador agora, né? A gente tem alguns cenários que nós fizemos. Hoje em manhã.

E isso, clique no cenário, isso. Esse é o cenário normal, mas tipo só o Road de Extra, né? Ele calcula a rota mais mais rápida. Vai no cenário número dois ali, eu vejo que foi o segundo. Então, caso você bloqueie algum dos, né, dos, do, do, dos, dos, dos postos, né? Ele vai buscar um outro, uma outra rotina também de de de enxergar. Aí, ô, Luiz, vai pro cenário três ali em cima, por favor. Aqui é a mesma coisa. Só que esse tem uma diferença.

Clica com o mouse nesse aqui do meio, você tá vendo onde eu tô apontando? Não, aqui, ó. A volta ali no cenário três, lá de cima, primeiro. E aqui no meio. Esse aqui. Não, bem no meio. Entre os dois. Isso. Uhum. Ele gera um perigo de segurança, né? Que aqui é uma uma zona intransponível, então eh ele não consegue eh vamos dizer, vencer de um dos dos caminhos. Então, ele para todo o processo.

Todos os AGV são são paralisados até que esse estado seja resolvido, tá? Pode ir pro cenário 4, que é o cenário otimizado, onde a gente pode falar das das amostras. Então, se vocês olharem aqui tem algumas, eh estatísticas. Sobre o a otimização, se eu não me engano, é de em torno de 20%, usando o OPD2 e o Neighbors Neighbor, tá?

O O O trajeto padrão é de 160 m aproximadamente, com a aplicação desses dois algoritmos reduzido a 134. Esse tipo de cenário e o cenário 5 é a validação, né, dos dos eh de todos os processos. A gente tem que não validar a grade do material, porque isso aí ele ele não só valida o caminho do AGV, mas também o processo do da matéria-prima, processo por onde ele passa. E no mais é isso aí.

Show, valeu. Perfeito aí, aê!

## Avaliação do Modelo
Com base no transcript da apresentação, seguem os pontos positivos e negativos identificados para cada um dos tópicos solicitados:

### 1. Grafos Definições
*   Pontos Positivos: O grupo modelou com sucesso a malha de navegação do AGV (veículo autônomo guiado) como um dígrafo ponderado. Definiram um conjunto de 6 vértices (estações de operação), um conjunto de 8 corredores dirigidos (arestas relacionadas às tags da etapa anterior) e um vetor de pesos representando a distância física em metros.
*   Pontos Negativos: O avaliador apontou que a aplicação de um AGV em um galpão industrial ficou "estranha" e parecia uma cópia de seu repositório adaptada à força. Ele sugeriu que o grupo deveria ter explorado uma aplicação diferente, como entrega urbana. Além disso, houve uma confusão inicial em que o avaliador achou que o projeto se tratava de um veículo aéreo (Vante).

### 2. Matriz de Adjacência
*   Pontos Positivos: A estrutura foi modelada como uma matriz 6x6 ponderada, implementada em Python via Jupyter Notebook. A diagonal principal foi preenchida com zeros e os índices sem corredores diretos foram preenchidos com infinito.
*   Pontos Negativos: O próprio apresentador admitiu que o entendimento da matriz é "meio complexo assim de entender, somente falando".

### 3. Matriz de Incidência
*   Pontos Positivos: O apresentador menciona que a matriz de incidência faz parte do escopo do projeto.
*   Pontos Negativos: Embora tenha anunciado que falaria sobre a matriz de incidência, o apresentador imediatamente passou a descrever as propriedades da matriz de adjacência (diagonal principal com zeros e corredores inexistentes com infinito), deixando de explicar ou diferenciar adequadamente a matriz de incidência.

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos: Ambos os algoritmos foram utilizados para explorar topologicamente a malha. O BFS (busca em largura) foi implementado com uma fila FIFO para encontrar o caminho com a menor quantidade de paradas. O DFS (busca em profundidade) utilizou uma estrutura LIFO para identificar quatro caminhos simples de contingência, permitindo ao robô retornar sem repetir trechos já visitados.
*   Pontos Negativos: Não foram mencionados pontos negativos ou limitações para estes algoritmos no texto.

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: O algoritmo de Dijkstra foi aplicado para encontrar a menor distância física em metros entre os pontos (em vez de apenas o número de paradas). Ele utiliza uma fila de prioridade mínima para extrair rapidamente a estação mais próxima, visando economizar bateria e reduzir o desgaste elétrico do motor. Também é usado para recalcular rotas alternativas ao encontrar obstáculos, atribuindo peso infinito ao trecho bloqueado.
*   Pontos Negativos: O algoritmo possui a limitação de não funcionar caso existam valores negativos nos pesos dos grafos, o que gera erro no cálculo.

### 6. Teste de Estresse em Malha Fechada
*   Pontos Positivos: Embora o termo exato "teste de estresse em malha fechada" não seja explicitamente nomeado, o grupo realizou testes de cenários críticos no simulador. Eles demonstraram o comportamento do sistema ao bloquear postos e ao inserir uma "zona intransponível" (perigo de segurança), o que resultou na paralisação imediata de todos os AGVs e de todo o processo até que a situação fosse resolvida.
*   Pontos Negativos: Nenhum ponto negativo foi apontado no texto sobre a execução desses testes de cenário.

### 7. Problemas Eulerianos
*   Pontos Positivos: O grupo aplicou o conceito de circuito euleriano para planejar rotas de inspeção que percorrem todos os corredores ao menos uma vez e sem repetições. Como a malha possuía duas partes com conexões ímpares, eles usaram com sucesso o método do Carteiro Chinês para duplicar caminhos de forma limitada (tornando as ligações pares) e o algoritmo de Hierholzer para gerar o circuito completo de menor distância.
*   Pontos Negativos: Não há pontos negativos descritos no texto para esta implementação.

### 8. Problemas Hamiltonianos
*   Pontos Positivos: O problema de visitar todos os postos e retornar ao ponto inicial pelo caminho mais curto (ciclo hamiltoniano, referido no áudio como "ciclo retroniano") foi abordado. Para resolvê-lo e otimizá-lo, o grupo aplicou os algoritmos *Nearest Neighbor* (Vizinho Mais Próximo) e *2-OPT* (OPT2), obtendo uma otimização de aproximadamente 20% de redução de distância (reduzindo o trajeto padrão de 160m para 134m).
*   Pontos Negativos: O ciclo hamiltoniano cresce de forma fatorial (ao contrário do euleriano, que cresce de forma linear), o que significa que a dificuldade de resolução do problema aumenta drasticamente conforme mais pontos são adicionados ao sistema.

### 9. Simulador
*   Pontos Positivos: O grupo desenvolveu um simulador funcional capaz de demonstrar 5 cenários distintos: rota rápida normal com Dijkstra, desvio de postos bloqueados, parada total de segurança por zona intransponível, rota otimizada com redução de distância e validação do processo de matéria-prima.
*   Pontos Negativos: O simulador foi criticado pelo avaliador por utilizar a representação de um galpão de fábrica, considerada desconexa e "estranha" para a proposta real do AGV desenvolvido pelo grupo.

# Grupo 2

## Transcrição
Bom, boa tarde a todos. A gente vai dar sequência ao nosso projeto Arco Index, mas agora a gente vai subir um pouco o nível e a gente vai aplicar a teoria de grafos ao nosso sistema. É válido a gente dar uma breve recapitulação recapitular uma lembrar, né, como que funciona o nosso sistema. Ele é dividido em cinco etapas. É uma máquina automática de envasamento de líquidos em copos plásticos. E o primeiro estágio consiste na liberação de copos.

Em seguida a parte para a liberação do líquido dentro do copo. A gente tem o posicionamento da tampa, a selagem dessa tampa com o copo e a liberação desses copos copos dentro da indústria. E bom, a gente vai pegar esse nosso sistema e a gente vai modelar ele em cima de vértices e arestas para conseguir extrair alguns algoritmos de buscas, eh fazer cálculo de rotas, tudo para utilização de logística e otimização.

Pode passar.

Esse?

Esse mesmo. Eh, a gente vai representar o nosso sistema por meio de um digrafo simplificado, que ele vai conter os nossos vértices, que ele representa alguns insumos do nosso processo, por exemplo, o próprio líquido e o ar comprimido, os nossos arcos, que eles dão direção do nosso fluxo, ou as vias do líquido. E a gente também tem os nossos graus, né, que dita a quantidade de saídas e entradas dentro de um vértice, a soma, né, dos dois em cima de um vértice.

Bom, para representar essa rede de ar comprimido no nosso sistema, a gente vai utilizar de algumas ferramentas matemáticas, algumas matrizes. A primeira matriz é de Eu esqueci o nome da matriz, mas

Incidência.

Incidência, isso. Que é a matriz que ela relaciona os nossos vértices e as nossas e os nossos arcos. Ele basicamente vai ditar o fluxo do ar comprimido. A gente também tem uma matriz de adjacência, que ele vai verificar se os pontos eles estão em ponto tá realmente conectado com o outro. E a gente tem também nossa matriz de custo, que ela vai olhar para para a nossa tubulação, vai dar um valor em metros e ele vai analisar qual caminho é mais rápido de ele transferir.

Vai ser utilizado por algoritmo de busca. E tem uma matriz de ciclo também, que é para como a nossa é uma mesa indexadora de cinco posições, a matriz é uma matriz que fala o seguinte: "Ó, você começa aqui e após cinco passos você vai voltar para esse mesmo ponto". Ó, gente, agora vou passar para o

Agora vou falar um pouco mais sobre os algoritmos de busca. Eh, a gente esses dois primeiros que eu vou falar, eles são focados em encontro de alcance. Eh, nesse caso aqui seria o caminho percorrido da bomba, passa pelas válvulas, vai para a envasadora. Eh, nesses dois algoritmos de alcance, a gente tem o de busca em largura, BFS, que ele foca eh em escolher a rota com o menor número de vértices vértices.

E o o algoritmo de busca em profundidade, que seria o caso do DFS, que encontra ali um caminho longo, um mais simples, certo? Agora pode passar para o por favor. O próximo algoritmo agora ele foca na minimização do tempo. E aí esse seria o algoritmo de Dijkstra Dijkstra.

Ele basicamente vai focar em em encontrar o caminho a rota com a a distância percorrida menor, que resultaria no caso no tempo mais mais adaptável, melhor tempo para para esse para esse resultado. Pode passar para o por favor. Agora falando um pouco do teste de resiliência. Eh, a gente usa as contingências para fazer esse teste.

Eh, no caso você pode bloquear manualmente algum grafo e testar eh esse esse algoritmo está funcionando, ele vai refazer os cálculos e você consegue testar se realmente é para acontecer aquilo e em casos que possam vir a acontecer, você pode evitar problemas e tem várias outras aplicações para isso. Pode passar.

A inspeção algoritmo de Euler, ele faz a o circuito fechado de oito vértices, 10 arestas, 24 minutos e meio. Se a gente bloquear uma das arestas, a gente cria dois vértices ímpares, e ele é permitido uma trilha aberta. Com mais de dois vértices ímpares, aí não é possível fazer esse circuito sem repetir arestas.

Eh, o ciclo hamiltoniano, ele é para percorrer todos os os vértices apenas uma vez e retornar para a origem. O algoritmo do vizinho mais próximo faz isso em 280 segundos e o 2-OPT em 260 segundos, seria a melhor rota, sem a AGV implantada.

E por fim, eh o fluxo produtivo da nossa nossa máquina, ela gera um grafo acíclico direcionado.

Eh, o algoritmo de Kahn ele vai organizar os vértices, né, são 16 vértices, e o Dijkstra ele eh ele respeita os sentidos, direções dos ciclos, e ele que calcula uma distância de 40 m pela pela rota nominal e 65 m pelo desvio. seria bloquear o vetor de lista. E agora o vai mostrar a parte da simulação.

Chegando aqui no simulador, você a gente fez aqui que você consegue ver seis visões da envasadora com um painel. Eh, aí você consegue escolher qual vai ser o modo o modo de análise e essas linhas tracejadas aqui é a forma que você é a do meu. Então, é o que que conecta o modelo de de modelo no equipamento de modelo para outro, né? E aí o nosso primeiro aqui é o Dijkstra. Eu vou eu acho que vou conseguir ver.

Vou já acessar aqui. Você aí calcula, né, o o caminho mais curto do do processo e você consegue bloquear aí aparece aqui embaixo, ó, resultado atual. Então, vamos dizer que você queira bloquear a bomba A, que tá aqui no sistema aqui da do dela até o nó 200.

Que ele tem 80, o a bomba B tem 85, ele já recalcula e fala que tem 285 em relação porque tem um ciclo a mais. Se você bloqueia as duas bombas, você o processo já não tem rota, né? Então, você também consegue eh bloquear a o nó central aqui, também que ele vai ficar sem eh sem rota. Depois a gente tem a busca que é o BFS e o DFS.

Ele faz o o o caminho com o menor número de espaço, né? Então, você vai ver que eh calcula aqui, ó, cinco arestas com o BFS. Então, o ele já já mostra aqui. E você consegue bloquear o nó um e aí automaticamente já vai para o para o para o V2. E você consegue bloquear o V2. Se você bloqueia os dois, o processo não fica bloqueado.

Depois a gente tem um sistema de inspeção de Euleriano, e ela vai ela para seria com você para inspecionando procurando manutenções, porque você passa por todas as condições de cabo e mangueira sem repetir. E aí eh se você eh eh abre um, você acaba virando uma malha aberta.

E se você fica com se você fica com mais vezes a bomba, você acaba que ele não consegue fazer o processo sem repetir o o mesmo ponto. Depois aqui a gente tem o AGV, que ele visita os postos uma única vez utilizando o o eh como é que é? Não tem nome em português, é o

Vizinho.

E depois eh ele faz uma rota com dois óculos que descobre o seu trecho longo, eh economizando tempo da viagem. Você também tem o a parte do Dijkstra para os veículos. Então, você consegue bloquear aqui o nó dois, o nó eh da esteira e o corredor. E ele já faz a a a já calcula a rota de novo e você consegue aqui ver o resultado da da rota do de acordo.

E por fim, a gente tem aqui a parte do Kahn, que ele só, né, ele eh ele não calcula nenhuma distância, nada, ele só ele ele calcula a ordem de produção para para organizar todas as etapas eh para organizar todas as etapas. E aí é isso aqui o nosso nó.

## Avaliação do Modelo

Com base exclusivamente na transcrição da apresentação, apresentamos os pontos positivos e negativos identificados para cada um dos tópicos solicitados:

### 1. Grafos Definições
* Pontos Positivos: O grupo conseguiu modelar com clareza o sistema real (uma máquina automática de envasamento de líquidos em copos plásticos de cinco etapas) em um digrafo simplificado. Eles definiram adequadamente os elementos do grafo: os vértices representam os insumos (como líquido e ar comprimido), os arcos indicam a direção do fluxo (vias do líquido) e os graus ditam a quantidade de entradas e saídas em cada vértice.
* Pontos Negativos: Não foram apresentados pontos negativos ou falhas conceituais nessa definição.

### 2. Matriz de Adjacência
* Pontos Positivos: Foi explicado corretamente que a matriz de adjacência serve para verificar se os pontos (vértices) estão realmente conectados uns aos outros no sistema.
* Pontos Negativos: Não há pontos negativos quanto ao conteúdo, embora o apresentador tenha hesitado brevemente antes de listar as matrizes.

### 3. Matriz de Inidência
* Pontos Positivos: O grupo explicou que a matriz de incidência relaciona os vértices e os arcos para ditar o fluxo do ar comprimido no sistema.
* Pontos Negativos: O apresentador esqueceu o nome da matriz durante a explicação ("*Eu esqueci o nome da matriz, mas...*") e precisou ser ajudado por outro integrante que soprou o termo "Incidência".

### 4. Algoritmos de Busca (BFS/DFS)
* Pontos Positivos: Explicaram de forma direta que ambos os algoritmos focam em encontrar o alcance (como o caminho da bomba até a envasadora). Diferenciaram bem as abordagens: a busca em largura (BFS) foca em escolher a rota com o menor número de vértices, enquanto a busca em profundidade (DFS) encontra um caminho mais longo e simples. No simulador, demonstraram o BFS calculando uma rota de 5 arestas e recalculando o caminho ao bloquear nós.
* Pontos Negativos: Não foram identificados pontos negativos.

### 5. Menor Caminho (Dijkstra)
* Pontos Positivos: Explicaram que o algoritmo de Dijkstra foca na minimização do tempo ao encontrar a rota com a menor distância percorrida. Mostraram a aplicação prática respeitando as direções dos ciclos, calculando distâncias nominais (40 m) e de desvios (65 m). No simulador, o algoritmo recalcula as rotas em tempo real ao bloquear componentes (como as bombas A e B, o nó central, ou elementos de transporte como a esteira e o corredor).
* Pontos Negativos: Não foram identificados pontos negativos.

### 6. Teste de Estresse em Malha Fechada (Teste de Resiliência)
* Pontos Positivos: O grupo explicou que utiliza contingências para realizar testes de resiliência. Eles demonstraram que é possível bloquear manualmente partes do grafo para testar se o algoritmo recalcula as rotas corretamente, o que ajuda a prever e evitar problemas reais na indústria.
* Pontos Negativos: Não foram identificados pontos negativos.

### 7. Problemas Eulerianos
* Pontos Positivos: Apresentaram uma aplicação prática muito clara voltada para a inspeção de manutenção (passar por cabos e mangueiras sem repetir caminhos). Demonstraram o conhecimento teórico correto: o circuito fechado original possui 8 vértices e 10 arestas (feito em 24,5 minutos); ao bloquear uma aresta, criam-se dois vértices ímpares, permitindo uma trilha aberta; e explicaram que, com mais de dois vértices ímpares, torna-se impossível realizar o circuito sem repetir arestas.
* Pontos Negativos: Não foram identificados pontos negativos.

### 8. Problemas Hamiltonianos
* Pontos Positivos: Definiram corretamente o ciclo hamiltoniano como o desafio de percorrer todos os vértices apenas uma vez e retornar à origem. Apresentaram dados comparativos de desempenho para a rota sem AGV: o algoritmo do vizinho mais próximo realiza em 280 segundos, enquanto o algoritmo 2-OPT otimiza para 260 segundos. No simulador, mostraram o AGV visitando os postos uma única vez e o 2-OPT eliminando trechos longos para economizar tempo.
* Pontos Negativos: O apresentador demonstrou uma leve hesitação e esquecimento ao tentar lembrar o nome do algoritmo em português ("*como é que é? Não tem nome em português, é o... Vizinho*").

### 9. Simulador
* Pontos Positivos: O simulador é bastante completo e visual, oferecendo seis visões da envasadora com um painel interativo. Ele permite selecionar diferentes modos de análise (Dijkstra, BFS/DFS, Euleriano, AGV/Hamiltoniano e Kahn). É altamente interativo, permitindo bloquear nós e componentes em tempo real (como bombas, esteiras e corredores) e mostrando instantaneamente o recálculo das rotas ou mensagens de processo bloqueado.
* Pontos Negativos: Não foram identificados pontos negativos no simulador.

## Transcrição

Boa tarde, nós vamos voltar na na ideia né da nossa planta de embasamento de encartumamento de bebidas, aí primeiro eu coloquei o conceito ali de gráfico só para para situar e o gráfico é uma forma de representar coisas em relações e essas essas coisas vão ter relações entre elas, então aí o processo nosso anteriormente era assim, aí a gente teve que atualizar, adaptar para ter uma redundância de segurança.

Então, a gente colocou mais algumas coisas ali, alguns componentes e esses componentes nossos passaram virar nós. Então, antigamente a gente tinha ali um tanque, tinha uma bomba apenas e uma só válvula para suprimento. Agora a gente tem dois tanques que se dividem ali, duas bombas por conta do defeito da captação.

Então, se a gente tinha os componentes críticos, agora a gente tinha dobramos eles e duas válvulas para o enchimento. E agora aí um gráfico é definido pelos seus objetos, conexões entre eles e os valores associados, ou seja, a gente vai ter os vértices que são os nossos componentes, as válvulas, as bombas, os tanques.

Vamos ter as conexões, as relações entre eles que seriam as tubulações, né, que passam o líquido e aí teremos os atributos, vamos dizer assim, que seria comprimento, a vazão que está naquele tanque e essas coisas. próximo. E aí a gente entrou no negócio de idígrafo, que é ver com um desenho simplificando lá o gerenciamento dos sistemas, quem entra e quem sai. Então ali eu fiz um negócio simplificado, que se fosse fazendo o sistema aqui ele ia ficar bem maior, ali o diagrama.

E o número de arestas no nosso grafeiro vai ser, né, a o somatório de grau de saída ou entrada. Então o somatório de todas as saídas ou de todas as entradas vai ser nesse exemplo aí, né, nesse Neste caso, a gente tem oito arestas, porque a gente fez a contabilização de onde vai a setinha dos graus. Aqui a gente tem o gráfico processo que está lá no nosso site.

Aqui eu deixei mais para ver já, mas se a gente lá no site, você clicar em alguma tubulação, ela foi é danificada, bloqueada, ele vai fazer a menor volta possível para conseguir chegar na inspeção, inspeção do produto próximo. E Aí a gente vai entrar em áudio-branco, artificial e incidência a a adjacência.

E a adjacência é relação entre os vértices, ou seja, como cada componente tá ali se relacionando entre eles. Então, como o tanque tá ligado na quem é o tanque tá ligado, se ele tá ligado numa válvula. Ah, essa válvula tá ligada a quem? E vamos ter a incidência. Incidência, próximo. É, como o Vex, né, ou o componente está ligado à tubulação.

Então aqui a gente tem o exemplo da matriz que a gente fez, então aqui a na na coluna, a gente vai ter um vértice. E na linha também vai ter vértices. O que que acontece? A gente pega e vai ser a relação deles. Então, um exemplo aqui é TS1 indo para VS1, ou seja, o tanque reservatório principal indo para a primeira válvula nossa lá, a relação deles é de 5 m. então, tá aqui.

E se a gente for fazendo a outra mudança lá de ah, algum tanque deu algum bloqueio, ele vai atualizando essa tabela lá automaticamente. Próximo. Aí agora entrou na incidência, que é a relação entre os vértices e as arestas, que é, tipo, se tem se tá entrando ou saindo, ele vai contabilizando no próximo. Então, aí aqui temos o nosso gráfico.

gráfico de incidência, onde temos o E1, ele meio que a tubulação, né, representando fisicamente. Então, a tubulação de TS1 a DS1, ele vai ter ali os as notas, vamos dizer assim. Então, menos um quer dizer que ele tá saindo de TS1 e mais um diz que ele tá chegando em DS1. Próximo. E o balanço de Pírfido.

Se a gente pensar, a gente tem que tentar fazer um um um gráfico um grafo com um sistema que eles seja o mais balanceado possível, pois se você deixa uma das tubulações bloqueada, ele vai como plano vazão, a bomba ela vai acumulando vazão, até acontecer o calibração ou a mesmo a inclosão lá dentro do líquido. E é isso. Bom, vou explicar sobre os algoritmos de bus que a gente utilizou, o BFP, FS e o BFS.

O BFS ele vai pelo menor número de pontos e me prioriza a não passar pelas válvulas para ele não ter problemas de falhas mecânicas. E o DIPS, ele faz um auto em sistema e analisa todas as rotas de contingência para para ter uma melhoramente estudado.

De modo, a o algoritmo de Digits, sei lá como é que pronuncia, é que ele vai ter o menor caminho, é em comparação com o BFS, ele não passa pelo bypass, porque tem um acrescento de 2 m, então ele passa pela valor VS 2.

E também fizemos o roteamento dinâmico e a tolerância a falhas em tempo real, que é uma situação em que a bomba vc 1 ou é, a balda do DS 2 elas falham e aí o sistema analisa qual que é a melhor maneira de possível. É, de todos que eu apresentei, eu vou mostrar lá no nosso site é, a simulação.

Então o nosso processo, a rota nominal, com esse cliente é a mesma rota, ela adotou a rota aqui de graça como a mais o menor No caminho, então, é uma rota que ele, que ele executa, é, e uma é, uma rota BFS, que ele passa aqui por baixo quando vai ter que ir. É, na BFS, eles analisam cada ponto e aí eles anotam esse caminho aqui por cima, dando seis saltos.

Agora a situação de falhas, tem uma situação da falha da bomba QC1, que ele passa passando pela bomba QC2 e no na a falha da DS2, ele agora passa que ele vai perder independente de qual processo que esteja aqui, ele vai descer esse caminho porque a prioridade é as fases, então tá roda de qualquer um dos produtos utilizados. E se as duas estiverem travadas, então aí esse que é o processo que depende.

E aí no caso agora uma ruptura do nosso sistema que serve o AS-1 que ele conecta as duas válvulas, a conectar válvula VS 2 e o bypass. Se tiver o desfalecimento dela, não tem o que fazer, então é acionado uma rota de emergência até que resolva ela, pois o sistema não tem continuidade.

Agora a gente vai entrar na parte de inteligente algoritmo na linha de em base. Partiu, simulação de mais a menos em via automático. É, o nosso sistema ele tem um tempo de algoritmo de decisão de 0,000 mil segundos. Então se algum processo nosso parar, ele a um operador apertando o botão push button, ia demorar, sei lá, uns 10 segundos, a gente tem um processo que faz isso automático e dura 0,020 segundos. É, esse aqui é a forma que a gente adota.

Então, isolamento imediato e recálculo ótimo. O recálculo ótimo, ele é parte do princípio que ele volta a zero. Então, aconteceu no meio do processo, deu algum problema, ele volta a zero, aí ele acha o melhor caminho. É, aqui a gente tem a parte de análise, então, a gente usou ponte de redes, vértices críticos e conectividade dupla. O bom da conectividade dupla é que o nosso sistema, se acontecer algum problema com uma das conectividades, ele não para. Se fosse somente uma conexão, ele teria que parar a linha e dar manutenção.

É, por outro código de trip e de emergência. Se caso as duas conectividades da gente, né, a a 1 e a 2 pararem de funcionar, a gente entra no modo de emergência. Aí desliga a bomba, fecha a sujão e abre a ali, ali tá demarcado em laranja, porque a gente tá mexendo com pressão. Então, se acontecer isso algum problema não tivesse, é, uma válvula de ar livre, eu poderia pegar, é, excluir de tudo. Que a gente vai entrar na parte 2, que é programas eurelianos e expressões autônomas.

É, nossa auditoria, ela é feita por através de um robô, então o nosso robô vai fazer essa auditoria e a gente pensou no menor tempo e para consumir menos bateria, a gente vai usar um número de par, né, uma entrada de saída do par, que ele vai passar somente uma vez na linha fazendo essa inspeção, 100%. Aqui a gente colocou o número, né, de 9 verts, 13, 13 trechos e graus pares. Todos usam, é, graus pares.

Aqui é o nosso processo, como nosso robô vai funcionar. Então é só uma partezinha do algoritmo de como vai ser. E aqui é o nosso problema do cartão chinês. Nosso robô ele vai ter já estruturado dentro da linha, o que ele vai fazer. Mas cada a gente adicione alguma válvula, algum processo de algum problema, esse problema do cartão chinês mês, ele vai ter uma segunda opção. Então, ele vai recalcular da melhor forma e o melhor processo para que ele passe e veja tudo por 5%.

Bom, então aqui eu vou falar um pouco do nosso robô de controle de qualidade, onde ele consiste que o nosso nosso robô, ele tem que passar por todas as cadeias produtivas da nossa fábrica. Então, em estações a visitar é a os suprimentos, a bomba, o alculador, o invasor, a dosagem, então que passa por todos os as cadeiras produtivas. Qual que é o nosso problema?

Aqui a gente tem um problema clássico que é do caixero viajante, então nele a gente tem umas limitações força A gente não não consegue fazer isso por força bruta. A gente não consegue fazer por programas de computação de permutação computacional. Então, como que a gente abordou isso? A gente usou esses requisitos. Então, a gente tem o requisito de não repetição, onde esse robô vai passar, em cada ciclo dele, ele passa somente uma vez por cada ponto de produção.

Autonomia energética, a gente quer minimizar a distância para preservar o ciclo de carga do nosso robô de bateria e um tempo de ciclo. Então, a gente quer o menor tempo de ciclo possível. Como que a gente abordou isso? Com a otimização heurística. Em duas etapas. Utilizando o vizinho mais próximo. Só que esse essa etapa, ele traz para a gente dados mais brutos. Ou seja, ele pega os dados, os caminhos mais próximos.

Então, na nossa cadeira de suprimento, ele vai Qual a próxima etapa mais próxima? Ele vai avançando. Só que no final disso, a gente tem um problema, porque a gente sempre tem um nó que fica vago. Então, o robô tem que fazer um caminho mais longo para chegar aqui. e senão ele acaba sendo ineficiente. Como a gente resolve isso? Usando junto a ele o refinamento local 2 APT. O que que ele faz? Ele faz uma inversão de arestas, é, então ele reconecta os pares que não estão adjacentes, reduzindo esse tempo.

Nesse caso, o que ele fez foi inverter, principalmente a fase de invasão com a fase de dosagem. Ou seja, com isso a gente ganhou 20 m na nossa distância total, então pelo vizinho mais próximo era de 280 m. metros. É, implementando nele o refinamento local 2 OPT, a gente conseguiu 260 m, reduzindo 20 m e ganhando 7% de economia de bateria.

Aqui é uma retatação da nossa do diagrama de blocks da nossa fábrica. Então, toda essa parte com as setas brancas, a gente tem tipo um anel viário, onde a gente tem o os caminhões e a as docas de expedição e a e a balança de pesagem.

A Aqui a gente tem, no galpão A, a gente tem toda a parte de insumos, então onde nosso nossa matéria prima tá, tanto como as garrafas PET, as tampas e os rótulos, o CO2 líquido, água tratada e os xaropes concentrados. Aqui na parte em amarelo, a gente tem área de processo. Então aqui é onde o nosso robô vai trabalhar, de controle de qualidade. Então ele vai passar exatamente por uma vez por todos esses processos e vou e retornar a base. E aqui é o nosso galpão B, que seria o galpão de expedição.

A gente tem toda o estoque e um dia esse estoque vai ser transferido para os caminhões para completar nosso processo inteiro. É, e antes de antes de finalizar, a gente preparou uma simulação através do aqui no nosso site que é um jogo que ele demonstra uma situação prática de como é que é e da da da do processo.

Então que a gente estudou, aí ele informa que a esteira RC1 acabou de ser higienizada, dele quer que a gente traça uma rota do TS1 até a esteira esteira 1. Então, ele informa aqui também que a guia qual que é o caminho que deve ser tomado, então a doutora me disse que os caminhos que ele recomendou.

A gente valida e aí recebe que você conseguiu fazer as condições e vai para para o próximo passo. Essa situação aqui agora, ela é referente a passar pelo lado de menor distância. Então, é, a TS 1 não tá funcionando, eu vou pela TS 2. E a conexão entre DC 1 ou a bomba DC 2, é, eu vou passar para DC 1 para distância menor.

E aí, se tiver correto, ele valida e eu posso para o próximo passo. Essa situação é uma situação de alavanca em que a bomba DC falha. Então, eu passo pela agora pela bomba DC 2. Essa é a situação de emergência do que a válvula B S 2 passou, ou seja, eu sou obrigado a passar por um caminho maior, que é o de 14 metros.

Por último, é uma situação de bloqueio, que foi o que eu cometi da do botão de emergência. Em que eu estou aqui na válvula B S 1, eu posso ir tanto pela B C 1, aí se eu voltar tá aqui. Eu posso seguir pela PC2, é, pela PC2 também. Só que aqui ele não me dá mais caminho de terminar, porque ao chegar aqui ele me informa que essa válvula, esse ponto tá com falha e eu não consigo. Então eu sou obrigado a acionar o botão de emergência.

O emergência é esse que terminou na simulação.

## Análise do Modelo

Com base exclusivamente no relatório da apresentação, foram identificados os seguintes pontos positivos e negativos para cada um dos tópicos solicitados:

### 1. Definições de Grafos
*   Pontos Positivos: O grupo definiu claramente o conceito de grafos e sua aplicação prática na planta de engarrafamento, mapeando os vértices como componentes físicos (válvulas, bombas, tanques), as arestas como as tubulações e os atributos como comprimento e vazão. Também explicaram o conceito de dígrafo para simplificar o gerenciamento de entradas e saídas, além de demonstrar como calcular o número de arestas pela soma dos graus de entrada ou saída.
*   Pontos Negativos: Para apresentar o diagrama do sistema, o grupo precisou fazer uma representação altamente simplificada, pois o sistema real completo seria excessivamente grande para o diagrama.

### 2. Matriz de Adjacência
*   Pontos Positivos: Apresentaram uma aplicação prática estruturada em que as linhas e colunas representam os vértices (ex: a relação de distância de 5 metros entre o tanque TS1 e a válvula VS1). Um ponto forte é que a tabela é atualizada automaticamente caso ocorra algum bloqueio ou alteração no sistema.
*   Pontos Negativos: Não foram mencionados pontos negativos ou limitações específicas sobre a matriz de adjacência no texto.

### 3. Matriz de Incidência
*   Pontos Positivos: Explicaram de forma clara a relação entre vértices e arestas (representando fisicamente as tubulações). Utilizaram uma convenção numérica lógica para indicar a direção do fluxo: $-1$ para a saída de um vértice (ex: saindo de TS1) e $+1$ para a chegada (ex: chegando em DS1).
*   Pontos Negativos: Não foram mencionados pontos negativos específicos sobre a matriz de incidência no texto.

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos: O algoritmo BFS foi bem justificado ao priorizar o menor número de pontos e evitar a passagem por válvulas para prevenir falhas mecânicas. O DFS (citado como "DIPS") foi apresentado como uma ferramenta útil para analisar todas as rotas de contingência e permitir um estudo aprofundado do sistema.
*   Pontos Negativos: Houve aparente hesitação ou erro de transcrição/pronúncia na apresentação ao se referirem ao DFS (chamado de "DIPS" ou "DIFS").

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: O algoritmo de Dijkstra (mencionado como "Digits") foi aplicado com sucesso para encontrar o menor caminho físico. O grupo demonstrou um entendimento prático ao compará-lo com o BFS, mostrando que o Dijkstra opta por passar pela válvula VS2 em vez do *bypass*, pois este último acrescentaria 2 metros ao trajeto.
*   Pontos Negativos: O apresentador demonstrou incerteza quanto à pronúncia correta do nome do algoritmo ("algoritmo de Digits, sei lá como é que pronuncia").

### 6. Teste de Estresse em Malha Fechada (Tolerância a Falhas e Emergência)
*   Pontos Positivos: O sistema possui excelente redundância física (duplicação de tanques, bombas e válvulas) e alta velocidade de resposta automática (tempo de decisão de 0,020 segundos contra 10 segundos de uma ação manual). A conectividade dupla impede a parada da linha em caso de falha em uma das conexões. Além disso, há um protocolo de segurança robusto (modo de emergência/trip) que desliga bombas, fecha a sucção e abre válvulas de alívio para evitar explosões ou implosões por acúmulo de pressão.
*   Pontos Negativos: Existem falhas críticas catastróficas que o sistema não consegue contornar de forma contínua, como a ruptura da tubulação AS-1 (que conecta a válvula VS2 e o *bypass*), exigindo a interrupção do fluxo e o acionamento de uma rota de emergência externa até que o problema seja resolvido.

### 7. Problemas Eulerianos
*   Pontos Positivos: Aplicaram o conceito de caminhos eulerianos para otimizar a auditoria e inspeção 100% autônoma realizada por um robô. Ao projetar a linha com graus pares (9 vértices e 13 trechos), garantiram que o robô passe exatamente uma única vez por cada trecho, minimizando o tempo e poupando bateria. Também integraram o "Problema do Carteiro Chinês" como uma segunda opção para recalcular a rota caso novas válvulas sejam adicionadas ou ocorram problemas.
*   Pontos Negativos: Não foram mencionados pontos negativos específicos sobre a modelagem euleriana no texto.

### 8. Problemas Hamiltonianos
*   Pontos Positivos: Identificaram corretamente o desafio do robô de controle de qualidade (visitar todas as estações de produção uma única vez e retornar à base) como um clássico Problema do Caixeiro Viajante (TSP). Para solucionar as limitações computacionais, utilizaram uma otimização heurística combinando o algoritmo do "Vizinho Mais Próximo" com o refinamento local "2-OPT". Essa combinação gerou resultados quantificáveis excelentes: reduziu a distância de 280m para 260m (ganho de 20 metros) e gerou uma economia de 7% de bateria.
*   Pontos Negativos: O grupo destacou que o problema possui limitações severas, não sendo possível resolvê-lo por força bruta ou permutação computacional. Além disso, o algoritmo do Vizinho Mais Próximo isoladamente mostrou-se ineficiente, pois sempre deixava um nó vago no final, obrigando o robô a fazer um caminho de retorno muito mais longo.

### 9. Simulador
*   Pontos Positivos: O grupo desenvolveu um simulador interativo em formato de jogo no site deles. O simulador é extremamente prático e testa o usuário em diversos cenários reais da planta: traçar rotas após higienização, desviar de tanques inoperantes, contornar falhas em bombas, lidar com caminhos mais longos devido a falhas em válvulas e identificar situações de bloqueio total onde o botão de emergência deve ser acionado.
*   Pontos Negativos: Não foram mencionados pontos negativos específicos sobre o simulador no texto.

# Grupo 4

## Transcrição
do grupo 4 e hoje a gente vai apresentar a etapa 2 do nosso sistema de escada corpo. Na etapa 1, a gente basicamente fez a matriz de segurança e os intercâmbios que rolhamos, provamos que o nosso sistema só opera em condições de segurança. E agora na etapa 2 a gente fez o algoritmo por trás do nosso sistema, que totalmente baseado na teoria de gráficos.

Então, apresentando a nossa planta industrial, ela é basicamente uma planta voltada para o setor agrícola, mais especificamente para classificação de de grão de arroz. Então, ela basicamente tem o fluxo de recepção, onde os grãos são recebidos por um funil. Eles são dispostos numa uma eh cálice vibratória que faz a dosagem para disposição desses funis na esteira. Depois essa esteira, ela passa por uma pesagem dinâmica, onde através dessa pesagem a gente consegue determinar a vazão máxima do sistema.

Depois ela passa por uma câmera onde tem um sistema de visão computacional que faz a classificação desses grãos de acordo com o seu tamanho, cor e integridade física. E de acordo com a a essa classificação, tem o sistema de ejeção que separa os grãos em três categorias, categoria A para os grãos novos, categoria B para os grãos secundários e categoria C que é a categoria de rejeito e descarte.

Então, para transpor isso numa linguagem que o computador entenda, a gente utilizou a teoria dos gráficos, mas especificamente um gráfico um gráfico de gráfico ponderado.

Basicamente, esse gráfico esse gráfico, ele contém 14 14 vértices que são basicamente os atuadores do sistema, que é o funil de recepção, os atuadores pneumáticos, os cilindros e possui também 14 arestas, que são as as conexões físicas entre esses dispositivos, que são basicamente o nosso sistema esteira de transporte e o sopro do atuador pneumático que faz a separação dos gãos.

Então, depois dessa explicação, a gente fez a matriz de incidência de vértice, aresta e a matriz B. E para relacionar isso ao nosso sistema físico, a gente aplica a lei de Kirchhoff também, B vezes E igual a S. Onde que é o nosso vetor de vazões mássicas e S é a nossa injeção líquida.

Em Em valores nominais, o nosso sistema possui a entrada de 1.200 kg horas de grãos, onde ele separa 75% em categoria A, 15% em categoria B e 10% em categoria C.

Nosso sistema também, ele ele ele Esqueci do que Ele Através de auto de aprender, ele faz o cálculo do custo dessa matriz, que é o valor de 13. Então, sobra um que é o número de ciclos fechados do nosso sistema, o que parte exatamente consigo o nosso sistema.

Caso o silo seja cheio, ele tem a realimentação que volta para o funil de entrada. Vou explicar a parte de busca em largura e busca em profundidade, que é a BFS e a DFS. A gente usa a parte de busca em largura quando a gente é, essa representação da busca em largura, a gente usa ela duas vezes no nosso sistema. Quando busca em largura, ela vai analisando camada por camada, a gente consegue determinar o número de saltos até cada silo, a gente tem essa informação.

ela é muito importante para a parte de intertravamento, porque quando a gente for parar a esteira e parar um processo, a gente consegue parar cada etapa sem ter a como no de material. A parte de busca em profundidade, ela é importante para parte justamente de realimentação. Como ela analisa o sistema inteiro, a gente conseguiu ver que tem um reciclo na E E 14 e que a parte mais importante.

É, a gente usou a o algoritmo de Dijkstra com o um em hip, porque o dicstra, ele tem a parte de peso. O peso que a gente usou é a parte, a questão de distância até a entrada do funil. E com base nisso, foi muito importante para a gente conseguir fazer um um encaminhamento muito bom é na parte da da falha, por exemplo, quando funilar falha, a gente sabe qual que é o silo mais próximo ou o ideal para a gente poder fazer a realimentação.

Na parte de detecção de e os testes que a gente fez depois. É, como a gente tem a pesagem em cada etapa do processo, a gente consegue ter a vazão máxima e com base com base nela a gente consegue saber em qual momento, porque todo equipamento tem que entrar e tem que sair uma certa quantidade de material. Quando tem uma diferença desse material, a gente consegue registrar e tomar ação em cima disso, se a gente vai parar a esteira ou dar som a um alerta.

A gente colocou quatro cenários de testes para ver as falhas, que foi a vazamento na escada, uma obstrução na calha D, na calha B, uma falha no injetor e uma inundação tanto no seu ar quanto no seu B, e todos deram segurança.

É, uma falha que acontece que pode acontecer com o nosso sistema é farelo de arroz e milho que se acumula nos tubos e a causar uma explosão uma explosão orgânica. Para isso a gente utilizou o o algoritmo euleriano para fazer uma um robô autônomo rodar todas todo nosso silo, toda essa parte que tá meio ruim de chegar, né?

Toda a nossa fábrica é é limpando a tubulação população sem repetir um número É para isso nós nós verificamos a quantidade de arestas que dá um número par, então não cai no no no sistema do cartilho chinês e para isso nós verificamos também se se tem qualidade e também se a soma de todos os pares dava exatamente duas vezes a a a quantidade de arestas.

Então para isso foi verificado e como aí fiz e fizemos uma rota ótima de 89.5 método, seria o, a, toda a rota que o, que o robô iria andar pela, pela nossa fábrica sem repetir o único turno. E e também a gente garante que eu manter uma limpeza periódica de, periódica sem causar essa explosão, essa combustão desse ar dentro dos tubos.

É, outro, e também, é, agora passando para a nossa, nossa verificação, uma verificação de qualidade, é, como nós exigimos que tenha um, que tenha uma, um controle de qualidade para todos o, para nossos grãos. E a gente também colocou um laboratório que passa um robô autônomo também em todas as partes da fábrica, desde a recepção ao pesagem, de toda parte do silo, o silo A e o silo B.

E para isso nós verificamos se formas que o robô passasse de forma de duas formas, do jeito da holística golosa, que ele passa por todas as partes sem forma automática e a e a outra forma que é o 2 OPT. que ele, eu não sei se tá certo falar, mas que ele faz um ele faz um ele inverte sobre cadeira intermediária, ele faz pela desigualdade triangular.

E nisso nós chegamos que com a rota, só passando por todos, ele faz um caminho de 268 m, ele vai andar um pouquinho aí para chegar em todas as partes da fábrica, garantindo qualidade. E com a e com a rota pelo 2 OPT, a gente chega em 218 m, que seria esse 100% a menos, 18.5, 18.6% a menos, né?

E também nós que é uma um impacto nele, ele fica 50 vezes 50 segundos mais rápido, o que garante um 22% de autonomia na bateria aí, caso dependendo de um robô que nós garantimos. Aqui nós temos o gráfico dos três aqui e esse aqui é o valor teórico do que ele faria, né, de fácil. Esses são os dois que a gente comprou usando essa aerística e o refinamento. Agora vamos falar da rede de camadas, tá?

Passou para o pato do onde que é que atrás?

Ah, agora vamos falar da rede de camadas que para o nosso projeto, a gente teve que fazer três grafos. O primeiro grafo é da parte é da parte de material, que é toda a parte do grão, que é o processo desde o funil até o silos, tá? Então tem todo aquele trabalho da câmera, dos série P e tudo mais. O segundo gráfico, ele é respectivo ao transporte. Então é toda o transporte inicial e final do grão.

E a parte, e o terceiro gráfico é a parte de estocagem, que é a parte do chegou o grão lá da transportadora, aonde eu vou estocar ele, como é que eu vou fazer esse transporte ali dentro mesmo desse grão e no final, quando ele chega no silo, aonde eu vou armazenar esse grão até chegar no caminhão e transportar para fora.

Agora vamos falar da, é, da nota teologia campo, que nesse caso, ela serve nesse nosso projeto só para provar que o nosso grafo de materiais é um grafo é é DAG, DAG, que é grafo é DAG, né? Que é grafo a cíclico dirigido. Resumindo, o nosso grão, ele vai chegar no nosso silo e ele vai sair no nosso silo uma vez só. Esse processo é assim, então não tem essa volta, não tem essa alimentação e ele acontece de maneira reta.

É isso que ele prova. Também também tem a segregação de rejito, que é uma matemática, né? Que comprova que todo grão que tiver algum tipo de defeito ou imperfeição vai ser rejeitado, tá? Aí tem toda uma matemática por trás e também tem redundância, que a gente adicionou 3 m a mais na nossa linha, que é para minimizar os erros e os as imperfeições assim no nosso processo. Tá? Aí aqui tem a avaliação, que a gente fez uma bateria de testes, né?

Em Python, para ver se esses gráficos operavam tanto de maneira individual como de maneira coletiva. que a gente viu que por meio dessa desses dados que tava operando de forma certa, né? E agora para finalizar, tem Tem confusão e tudo mais, mas eu eu eu prefiro por essa parte e ir para a parte de simulação que é mais, eu acho mais importante. Tá?

Você breve na parte de simulação porque é tudo que a gente já mostrou lá, tá? Mas aqui você vê aqui na parte, nessa parte inicial aqui, a parte do balanço, que foi a parte que o nosso amigo Marcel disse, que é, você vê aqui, ó, os grãos que entram no no funil, que saem, perdão, no funil, eles chegam ou no seu A ou no seu B ou no seu C, tá vendo? Não não tem nenhum grão que é perdido no meio do processo. Também tem essa parte da matriz 14 por 14, que é o quê?

Ela meio que mostra que em cada etapa do processo, o que que tá acontecendo com o grão. Então, se tu pegar aqui nesse exemplo aqui, eu não sei se tá pondo o mouse, no E2. Põe no mouse, já? Tá. Aí no E2, você consegue ver que pela tabela tá saindo o grão da alimentadora, então, ele no gráfico, na na matriz, tá menos um e chega na esteira. Então, a esteira recebe mais um, tá? Aqui nessa nessa na segunda parte da da simulação.

Você consegue ver o gráfico da da alimentação do processo tanto do tanto pelos algoritmos que já foram explicados pelo pelo grupo, que é o BFS, o BFS. Esse daqui que eu não vou falar não, eu não sei falar. E esse último aqui. Essa última parte mostra o o a parte de regulação, né?

Que meio que vai encaminhando os grãos, tanto por eu tanto por, tanto por eu e ele, como por né, tá? Então você consegue ver toda as esteiras meio que, né, como nós estamos esteira nosso processo. E a última parte são os gráficos de maneira mais simples de de se entender. Então aqui tem o gráfico materiais e você consegue analisar ele por esses três métodos diferentes, fica mais fácil de você meio que entender o que você está analisando. O gráfico dos veículos, o gráfico não, dos veículos, tá?

Mesma coisa do outro, você consegue exatamente ver o que você quer. Tá. E o último, que é o o gráfico dos stocks, tá? Que nesse caso tem 16 métodos diferentes, só que úteis, né, meio que aplicadas para o nosso processo, foram selecionados só quatro. Esse A1 e esse B1 foram descartados. E é isso. É isso.

## Análise do Modelo
Com base no relatório da apresentação do Grupo 4 (Etapa 2), foram identificados os seguintes pontos positivos e negativos relacionados aos tópicos solicitados:

### 1. Grafos Definições
*   Pontos Positivos: 
    *   O grupo modelou o sistema utilizando a teoria dos grafos, especificamente um grafo ponderado com 14 vértices (representando atuadores como o funil de recepção, cilindros e atuadores pneumáticos) e 14 arestas (representando as conexões físicas, como as esteiras e o sopro de separação).
    *   Utilizaram o conceito de Grafo Acíclico Dirigido (DAG) para provar matematicamente que o fluxo de materiais é direto (o grão entra e sai do silo uma única vez, sem retornos indesejados no fluxo principal).
    *   Dividiram a modelagem do sistema em uma rede de três camadas de grafos: materiais (processo do funil aos silos), transporte (transporte inicial e final) e estocagem (armazenamento e expedição).
*   Pontos Negativos: Não foram apresentados pontos negativos ou limitações teóricas quanto às definições gerais de grafos.

### 2. Matriz de Adjacência
*   Pontos Negativos: O termo "Matriz de Adjacência" não é explicitamente detalhado ou diferenciado no transcript. O grupo menciona uma "matriz 14 por 14" na simulação para demonstrar o fluxo de entrada e saída de grãos em cada etapa (atribuindo valores como -1 e +1). Essa descrição, contudo, assemelha-se mais ao comportamento de uma matriz de incidência ou de fluxo, sugerindo uma possível falta de clareza ou distinção conceitual na apresentação desse ponto específico.

### 3. Matriz de Incidência
*   Pontos Positivos: 
    *   O grupo elaborou a matriz de incidência de vértice-aresta e a matriz B.
    *   Aplicaram com sucesso a Lei de Kirchhoff ($B \times Q = S$, onde $Q$ é o vetor de vazões mássicas e $S$ é a injeção líquida) para conectar o modelo matemático ao comportamento físico da planta.
    *   A matriz de incidência (representada na simulação como a matriz 14x14) mapeia com precisão o comportamento do grão (por exemplo, indicando "-1" quando o grão sai da alimentadora e "+1" quando chega à esteira).

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos:
    *   BFS (Busca em Largura): É executada duas vezes no sistema para analisar camada por camada e determinar o número de saltos até cada silo. Essa informação é crucial para a lógica de intertravamento, permitindo parar etapas do processo de forma coordenada e evitar o acúmulo de material nas esteiras.
    *   DFS (Busca em Profundidade): É utilizada para analisar o sistema de forma global, o que permitiu identificar com precisão a existência de um reciclo/realimentação na aresta E14.

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: 
    *   Implementaram o algoritmo de Dijkstra utilizando uma estrutura de *min-heap* para otimização.
    *   Definiram como peso das arestas a distância física até a entrada do funil.
    *   O algoritmo provou ser altamente eficiente para traçar rotas alternativas de realimentação em cenários de falha (por exemplo, direcionando o fluxo para o silo mais próximo ou ideal caso o funil principal falhe).

### 6. Teste de Estresse em Malha Fechada
*   Pontos Positivos: 
    *   O grupo realizou testes de estresse simulando quatro cenários críticos de falha: vazamento na escada, obstrução nas calhas D e B, falha no injetor e inundação nos silos A e B. Todos os cenários testados responderam dentro dos parâmetros de segurança.
    *   A planta possui pesagem dinâmica em cada etapa, permitindo calcular a vazão máxima e identificar discrepâncias de massa em tempo real para acionar alertas ou parar as esteiras.

### 7. Problemas Eulerianos
*   Pontos Positivos: 
    *   Utilizaram um algoritmo euleriano para programar a rota de um robô autônomo responsável pela limpeza periódica das tubulações, mitigando o risco de explosões orgânicas causadas pelo acúmulo de farelo de arroz e milho.
    *   Validaram que o número de arestas do grafo é par, garantindo que o problema não caísse na variação do "problema do carteiro chinês" (o que exigiria repetir caminhos).
    *   Alcançaram uma rota ótima de 89,5 metros, permitindo que o robô limpe toda a tubulação sem repetir nenhum trecho.

### 8. Problemas Hamiltonianos
*   Pontos Positivos: 
    *   Aplicaram conceitos de caminhos hamiltonianos para definir a rota de um robô autônomo de controle de qualidade que visita pontos específicos da fábrica (recepção, pesagem e silos A e B).
    *   Compararam duas abordagens: a heurística gulosa (gerando um caminho de 268 metros) e o refinamento pelo algoritmo 2-OPT (reduzindo o caminho para 218 metros).
    *   A otimização com o 2-OPT resultou em uma rota 18,6% menor, completada 50 segundos mais rápido e proporcionando uma economia de 22% na autonomia da bateria do robô.

### 9. Simulador
*   Pontos Positivos: 
    *   O simulador valida com sucesso o balanço de massa do sistema, comprovando que os grãos que entram no funil chegam integralmente aos silos A, B ou C, sem perdas no processo.
    *   Apresenta de forma visual a matriz de fluxo 14x14, a execução dos algoritmos de busca e gráficos simplificados para facilitar a análise das camadas de materiais, veículos e estoques.
*   Pontos Negativos: 
    *   O apresentador demonstrou insegurança e falta de domínio técnico sobre partes da interface do simulador, chegando a pular explicações com comentários como *"Esse daqui que eu não vou falar não, eu não sei falar"* e *"eu prefiro por essa parte e ir para a parte de simulação"*.

# Grupo 5

## Transcrição

## Análise do Modelo


# Grupo 6

## Transcrição

## Análise do Modelo


# Grupo 7

## Transcrição

## Análise do Modelo


# Grupo 8

## Transcrição

## Análise do Modelo


# Grupo 9

## Transcrição

## Análise do Modelo

