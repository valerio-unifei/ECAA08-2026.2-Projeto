# Grupo 1

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

uma planta de piloto de produção de biodiesel, que ele uniu a engenharia de controle com a teoria de gráficos para desenvolver o sistema escape da nossa refinaria de Batelândia. Bom, aqui é a nossa visão geral da nossa nossa fábrica. É, ela foi dividida em três zonas.

A primeira zona, que é essa mais próxima de lá, que serve para que tem onde acontece os recebimentos dos insumos que compõem o galpão 1, que é essa parte aqui, e aonde vai ficar armazenado o nosso óleo metanol e o catalisador.

Aí a gente tem essa zona 2, que fica mais centralizado aqui, que é onde acontece o nosso processamento, é onde tem o núcleo com o o reator principal, que que é que é também onde vai ficar aonde vai acontecer a mistura do do óleo no canal do catalisador, catalisador.

E a zona 3, que é a área de inspeção, que contém o galpão B, e aonde vai ficar armazenado o nosso biodiesel 100 e com produtos como a glicerina bruta.

Aí, só para ficar a gente ter um escoamento de forma mais automatizada, a gente eh separou um um gráfico dirigido e ponderado. Aí, a os fundamentos de má de população, certo? Aí, a gente tem o D, representa os nossos equipamentos, que é as nossas arestas.

Aí, a eh e a população é com válvulas baseadas na na norma ISO 5.1 e o dado que são os pesos da nossa aresta.

E aqui mais ao canto, a gente tem uma essa representação com com o óleo vegetal, usando as peças que de representação de cada um, com o de toxo, que são levados para as em bombas paralelas e chegam até o nosso reator do Elmo, que é o nosso reator principal.

Não é existe sentido lógico de falar de todas as coisas se eles não tem um sentido físico por trás. Pensando nisso, a gente trouxe aqui a nossa equação para representar o balanço de massa e conservação, que nem já falado pelo outro grupo, né? Isso daqui é muito similar com a lei de Kirchhoff da elétrica. No caso nosso, a gente aplicou ela para parte de fluxo de fluidos. No caso, a matriz B, ela indica os fluxos entrando nos equipamentos, né?

Nos vértices, saindo do dos equipamentos e quando não há movimentação. Aqui seriam as nossas vazões e aqui seria a matriz S que indicaria o fluxo de acúmulo, né? O quão acumula lado tá o fluido nos equipamentos. No caso aqui, em regime permanente, tudo que entra é igual a tudo que sai. Nesse caso, a multiplicação dessas duas matrizes vai dar zero. Então, não há nenhum acúmulo nos equipamentos.

Isso daqui é feito muito mais pensando em justamente na questão de eficiência. A gente não pode deixar com que durante um processo, né, o fluido cada vez mais fica armazenado em algum lugar, gerando perda de produtividade. Quando continuando falando sobre isso, né? Sobre a parte de otimização, a gente trouxe aqui o que que a gente fez pensando na parte de otimização de roteamento e termo-hidráulico.

É, a gente tem uma uma fórmula, uma equação conhecida como perda de carga de Darcy-Weisbach, que ela representa que a perda de carga de um fluido é proporcional ao diâmetro da tubulação, enquanto maior tubulação, mais perda de carga que você tem. Pensando nisso também, né? A gente tem tem uma outra relação, né, que quanto maior a turbulência, mais perca de temperatura o nosso nossos fluidos vão ter.

Então, a gente precisa diminuir o tamanho das turbulências o máximo possível. Para isso, a gente usou o algoritmo de Dijkstra que ele busca o quê? Olhando para os seus vizinhos, ele busca sempre o menor caminho, sem buscar as consequências. Então, ele olha, o menor caminho, vai para ele. Chegou lá, olha de novo o menor caminho e vai seguindo, afim de conseguir alcançar sem entre o menor caminho.

Essa forma aqui, pensando em ser computacionalmente barata e rápida, a gente usou a fila de prioridade em um RIP, que ele vai ordenar um formato de árvore do menor tubulação até a maior tubulação.

Falando por último aqui da minha parte, a gente também tem a parte de minimização de manobras e contingências, que seria o quê? A gente, é, o uso excessivo de válvulas de equipamentos causa o desgaste. Então, a gente usou a busca em largura para tentar buscar uma forma que usasse o menor número de válvulas possíveis por equipamento funcionando.

Em paralelo também, pensando em qualquer pensando nos planos de contingência caso de falhas, a gente usa a busca em profundidade para fazer um mapeamento geral do de todo processo para em caso de alguma falha e alguma válvula, a gente já ter um plano B, um plano C, um plano D, a fim de que não haja problemas de de produção ao longo do percurso.

Bom, agora falando da parte mais de segurança e arquitetura do projeto, tem que se fazer uma reconfiguração dinâmica sobre vazamentos e a gente fez isso por um modo de operador. operador de punição métrica. Ou seja, quando alguma das linhas das tubulações acontece alguma falha ou algum tipo de vazamento, essa tubulação ela é levada para o infinito e é como se ela saísse do circuito. Fisicamente ela ainda tá lá, mas para a escada virtualmente essa tubulação não existe mais.

Então aqui no caso onde esse tubo está vindo daqui para cá e acontece um vazamento, ele é obrigado a achar uma segunda rota segura para isso daqui acontecer. Então essa linha ela sai do sistema e ele acha uma nova rota para ele chegar no destino dela.

E outro também problema que a gente tem entre as ações de fluido é a latência de decisão versus o tempo mecânico. A gente precisa de um software que responda muito rápido e o nosso software ele chegou a um tempo de decisão de 0,048 milissegundos. Só que quando eu tenho um problema físico é indiferente da teoria, eu não posso fechar uma válvula em 0,048 milissegundos.

Primeiro, porque dentro da tubulação eu tenho um fluido que está sob pressão, está sob uma temperatura e quando eu fecho essa válvula devido a algum problema, eu tenho, eu não posso fechar ela bruscamente. Eu tenho que ir diminuindo a vazão para a pressão não ter uma queda tão grande, porque acontece um fenômeno que se chama golpe de arraste.

E se eu fecho essa tubulação muito rápida, Esse golpe é tão forte que ela vai, com o tempo, vai desgastar a minha tubulação e eu vou ter que trocar ela, vai quebrar todo o meu sistema. Então, um sistema que responde rápido para minimizar erros e vazamentos em um sistema físico que tem problemas com esse tempo de resposta.

E também a gente tem que fazer uma inspeção NDT para os robôs autónomos, um robô parte a hora, que ele é um robô que anda dentro das tubulações.

Esse robô ele segue o teorema de de de Euler e também o teorema dos que os nós tem que ser pares para ele sempre passar por uma linha de tubulação apenas uma vez e nunca voltar por esta por essa tubulação para fazer o mapeamento geral da planta sem gasto, porque esse robô ele gasta uma bateria muito grande e também por manutenção dele que é muito cara.

Então você tem que minimizar o máximo os custos desse robô. Então ele percorre toda a planta passando por cada nó dela apenas uma vez.

Ah, e para a gente poder também fazer uma análise das amostras, a gente vai usar esses dados de vez que são robôs autoimbutiados, que eles vão no final de cada processo pegar uma coleta de amostra no final de cada batelada. Diferente do robô que o Gabriel citou aqui, esse ele acaba sendo um problema hamiltoniano e não aletrino. E para isso a gente precisa achar também a rota a menor rota possível para ele conseguir visitar todos.

Com Como são vários pontos e a permutação entre eles com um número grande começa a ficar nível absurdo de poder computacional para achar menor rota, a gente usou o algoritmo do vizinho mais próximo para poder achar esse menor caminho. E depois disso a gente deu uma refinada nesse valor final com o algoritmo do dois óptas que descruza os caminhos criados pelo pelo método do vizinho mais próximo.

E agora a gente também tem o problema além da fábrica que é administrar o problema logístico depois que foi produzido o biodiesel e também relacionado com a parte que chega na fábrica todo todos os componentes necessários para poder fazer o biodiverso.

É, para isso a gente usou um dado, que é aquele gráfico que o professor já citou, que ele só percorre um sentido e não volta, porque não faz sentido a gente ficar indo e voltando no mesmo processo, sendo que o produto que chega é diferente do produto que sai e não faz sentido você também voltar o processo. E para isso a gente usou esse algoritmo e depois da entrega a gente fez também a parte de logística reversa para ele reduzir custo de transporte.

Então, na ida ele leva o produto e na volta pro caminhão não voltar vazio e gerar esse custo. desnecessário, ele traz o tanque que um dia ele levou cheio e o vazio para reabastecer esse tanque. Vai ressaltar apenas só para para casa de informativo, né, que aqui a gente trouxe muito mais os resultados empíricos e de engenharia do que os resultados numéricos.

Então, caso tenha interesse de pegar os resultados numéricos obtidos, tá tudo no nosso repositório, né, na parte de simulações do com o latido que ele é. No mais, era isso. Muito obrigado.

## Análise do Modelo
Com base exclusivamente no relatório da apresentação, os pontos positivos (o que foi apresentado, implementado ou solucionado) e negativos (o que não foi mencionado, limitações ou pontos ausentes) para cada um dos tópicos solicitados são:

### 1. Grafos Definições
*   Pontos Positivos: O grupo utilizou a teoria de grafos de forma prática, definindo um grafo dirigido e ponderado para automatizar o escoamento da planta. Os equipamentos foram representados pelas arestas, as válvulas foram baseadas na norma ISO 5.1, e os pesos das arestas representaram os dados do sistema.
*   Pontos Negativos: Não há pontos negativos explícitos sobre as definições básicas de grafos, uma vez que a modelagem foi apresentada de forma estruturada para a planta.

### 2. Matriz de Adjacência
*   Pontos Negativos: Este conceito não é mencionado em nenhum momento na transcrição da apresentação.

### 3. Matriz de Incidência
*   Pontos Positivos: Embora não utilizem explicitamente o termo "Matriz de Incidência", o grupo apresentou uma aplicação prática equivalente para o balanço de massa e conservação (similar à lei de Kirchhoff). Eles utilizam uma matriz $B$ para indicar os fluxos que entram e saem dos equipamentos (vértices) e uma matriz $S$ para o acúmulo de fluido.
*   Pontos Negativos: O termo formal "Matriz de Incidência" não foi explicitado ou nomeado diretamente na apresentação, limitando-se à explicação das matrizes de fluxo $B$ e $S$.

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos: 
    *   Busca em Largura (BFS): Foi aplicada com sucesso para a minimização de manobras, buscando o menor número de válvulas possíveis por equipamento em funcionamento para evitar o desgaste excessivo.
    *   Busca em Profundidade (DFS): Foi utilizada de forma preventiva para realizar um mapeamento geral de todo o processo, permitindo traçar planos de contingência (planos B, C e D) caso ocorra falha em alguma válvula.
*   Pontos Negativos: Não foram apontados pontos negativos ou limitações no uso desses algoritmos.

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: O algoritmo de Dijkstra foi utilizado para otimização termo-hidráulica, buscando o menor caminho para reduzir a turbulência e a perda de temperatura nas tubulações. Para tornar o processo computacionalmente rápido e barato, o grupo implementou uma fila de prioridade em um Heap, ordenando as tubulações da menor para a maior.
*   Pontos Negativos: O algoritmo de Dijkstra é descrito como focado apenas no vizinho mais próximo de forma imediata ("sem buscar as consequências"), o que reflete uma simplificação de comportamento na explicação do grupo.

### 6. Teste de estresse em malha fechada
*   Pontos Negativos: Este tema não é mencionado na apresentação.

### 7. Problemas Eulerianos
*   Pontos Positivos: O grupo aplicou o teorema de Euler para a movimentação de um robô autônomo de inspeção interna de tubulações (NDT). Para otimizar a bateria e reduzir os custos de manutenção do robô, o sistema garante que os nós sejam pares para que o robô passe por cada tubulação exatamente uma vez, sem repetir caminhos.
*   Pontos Negativos: Não foram apresentados pontos negativos na aplicação dessa teoria.

### 8. Problemas Hamiltonianos
*   Pontos Positivos: Identificou-se um problema hamiltoniano na coleta de amostras ao final de cada lote por robôs autoembutidos. Como a permutação exata exigiria um poder computacional absurdo, o grupo resolveu o problema de forma eficiente utilizando o algoritmo do vizinho mais próximo para achar um caminho inicial e, em seguida, refinou o resultado com o algoritmo 2-opt (dois óptas) para descruzar os caminhos.
*   Pontos Negativos: O grupo destaca que encontrar a rota exata por permutação direta seria inviável devido ao "nível absurdo de poder computacional" exigido pelo problema, o que os obrigou a usar heurísticas de aproximação.

### 9. Simulador
*   Pontos Positivos: O grupo mencionou que possui simulações e que todos os resultados numéricos obtidos estão disponíveis no repositório do projeto.
*   Pontos Negativos: Os resultados numéricos e as simulações em si não foram demonstrados visualmente ou detalhados na apresentação, pois o grupo optou por focar estritamente nos resultados empíricos e de engenharia.

# Grupo 6

## Transcrição

Bom, nós somos do grupo 6, a gente vai apresentar hoje a nossa etapa 2 do sistema escada, que é um sistema escada de um drone agrícola, de pulverização agrícola. É, no caso, na etapa 1, a gente trabalhou mais com lógicas isoladas. Então, por exemplo, a gente fazia perguntas como: A bomba pode ligar? É, como que tá unido da água? Então, cada pergunta era independente da outra. Nesse daí, agora na etapa 2, a gente, é, otimizou o sistema para ele trabalhar como se fosse uma consciência de rede.

Então, todos os equipamentos estão conectados entre si. E nisso aí, é, a gente é possível rastrear o escoamento da cauda, planejar missões de voo e inspecionar a base. A gente separou a nossa apresentação em três principais tópicos, que seria de representar, que a gente trabalharia principalmente com o dígrafo da aula 11, também com as matrizes da aula 12.

Depois a gente passaria pela exploração e recalcular que seria, eh o BFS, o o DFS da aula 13, o Dicker da aula 14 e o e um desvio autônomo de pós-vazamento, um cálculo de desvio, que no caso seria da aula 15.

E por último, a gente cobriria, eh visitaria e ordenaria a a inspeção por circuitos eulerianos, que é da aula 16. E por fim, né, a gente finaliza na na aula 18 falando sobre o roteamento, né? Enfim, é, onde o fluxo da nossa apresentação vai ser o fluxo da calda.

Isso daí a gente passaria pelo, é, tanque do solo, o reservatório do drone, a filtragem, as bombas PWM e também a barra de bicos. E agora, eu vou passar a palavra para o Felipe para ele falar um pouquinho de como que a gente transformou a tubulação do drone em um, em um gráfico.

Bom, como o André falou, vou estar explicando um pouquinho como que a gente vai fazer esse modelo de estabulação. Aí a gente vai usar qualquer algoritmo. Aí a gente vai Aí a gente tá usando um diga que ponderável, onde o que tem o V, E e W, onde V é são os equipamentos, é, tanque, reservatório, micos, é que aqui tá meio ruim de de ver, tem os filtros também.

É, o eixo seria as mangueiras que dão sentido e e direção pro nosso na sub-elaboração e o D seria o peso de cada mangueira em metros. E a ordem e tamanho do nosso catálogo são de 11 nós e 11 arestas. E a proposta e quando a gente adiciona esse filtro redundante, ele passa a ter duas nós e três arestas.

É, no lema dos graus, a gente tem a soma da das entradas e saídas, que é É, o tanto de entrada, a soma deles tem que ser o mesmo da saída. E o modo de operação é varia tanto quando ele tá em voo, quando ele tá entre abastecimento ou o modo de mistura, então ele vai variando esse sistema operacional.

E aí a gente fez uma integridade de dados para a gente rejeitar nós, é um ID duplicado ou peso negativo.

Bom, aí agora a gente Como a gente já tem um gráfico, a gente vai fazer, é, agora em tabela matemática. É, tabela no Médio, perdão. E aí a gente vai resolver essa, essa tabela com áudio para aí mostrar como funciona nosso sistema.

Aí a gente tem três matrizes, aí, aí de incidência, que é a matriz B, matriz incidência, adjacência e de custos, são essas matrizes. A matriz de incidência, se eu não tô enganado ou vou trocar, é a matriz a a matriz de adjacência, a matriz a que é onde conecta cada ponto com o que vai entrar.

A matriz W é onde vai ver o total de comprimento em metros e a de incidência é quando vai ter é essa relação entre arestas e nós, onde quando sai é -1, na na, nos nós. E quando entra no nó, seria mais um.

Ah, calma aí, volta aí. Tá esquecido de nós. E o exemplo de, do, do nosso sistema é que vai ter quatro bicos e inda dois de 1/2, 1/2 L por minuto. E esse sistema todo em 3 minutos vai fazer a nossa operação. Então seria 4 vezes 1/2, é, 3, 4 vezes 1/2 que vai, daria 2 L por minuto. É, vezes 3, daria 6 L.

Então, nosso reservatório começa com 24 L, menos os 6 L da operação, ele passaria a ter 18 L.

Bom, agora eu vou explicar um pouquinho sobre o que que a gente vai fazer com esse gráfico, com essas matrizes que a gente obteve, né? Para o nosso sistema de casa conseguir entender até onde que ele pode ir com o drone, enfim, como que ele vai atuar ali no campo. É, eu trouxe uma colinha aqui porque são umas siglas, mas SBFs, ele funciona como se fosse uma uma pedra assim jogada no lado, um um corpo de água assim.

Então ele vai atuar em ondas até para saber até onde é as nossas escolhas ali que podem chegar e, ele vai medir os saltos, né? E ele trabalha no no modelo de de fila, que seria esse fila first sim, first touch. Então, como se fosse uma fila, o primeiro que entrou vai ser o primeiro que vai sair.

E aí também tem a parte do do BFS, que ele funciona como se fosse um labirinto, uma pessoa não labirinta, a pessoa vai até o final do caminho que não é possível para saber quantos caminhos existem e se existe algum caminho, se existe mais de um caminho possível para fazer essa lógica, né? Então, ele também funciona no modelo de E não funciona no modelo de fila, como o BFS, aqui no no modelo de pilha, que é o Last in First Out, que é como se fosse uma pilha de prato, então o último prato que você colocar em cima da pilha vai ser o primeiro que você vai pegar.

E aí a gente colocou também um diagnóstico de desconexão, então quando a bomba embarcada é bloqueada, o BFS vai comprovar a perda imediata de alcance e todas as quatro funções dos discos aí. Pode passar, por favor. Beleza. E aí a gente precisou também, é pensar como que a gente faria a a lógica do do Dijkstra, né?

É, bom, então o Dijkstra vai funcionar como se fosse um um GPS e vai é então vai fazer o caminho que vai ter menos menos arestas, né? Menos é esquinas e vai fazer o caminho mais rápido e o caminho mais perto. E diferentemente do BFS que a gente mostrou no último vídeo, ele vai é vai contar com pesos ao invés de contar com os saltos, né?

Então aqui, é, cada esquina ali do cada aresta do nosso, do nosso, do nosso sistema, ele possui um peso diferente que seria a quantidade de metros por mangueira ali, né, que a gente vai usar. Então aqui do reservatório até a estação A, é os pinos do filtro, é vem via filtro, filtro 1 custa 1,80 que seria esses esses numerozinhos aqui.

E Ah, enfim, a validação cruzada é aos quatro dias após o lançamento com 1440 consultas comprovadas é 100% de consistência, né? Essa esse método do judô. Vou passar para o Caíque falar com a gente. Bem, agora entrando aí na nossa parte de segurança do sistema, é, nós fizemos um modo que o sistema reconhece automaticamente quando tem uma falha na no nosso filtro 1.

Ou seja, ele vai detectar que a pressão da bomba caiu, da bomba de gás ele, abaixou bruscamente, ele vai automaticamente recalcular a rota do filtro 2. Porém, seguindo o princípio de segurança primeiro, ele só vai reativar a bomba 2 isso. Ou no caso, ativar pela primeira vez quando o operador dá o sinal de OK. Até lá, ela permanece engatilhada esperando o sinal e só vai acontecer realmente quando tiver o OK.

E já pro pro slide 7, a gente fez um o nosso gráfico é de é seis arestas e nove linhas. Ao contrário, o número de direito. É, e nós fizemos primeiro um cálculo por condição de ole, é, para verificar o tamanho, depois fizemos o algoritmo de re-rose para otimizar ele para também me dar um OK do sistema.

E já no slide 8, é, da aula 18, seria o problema do carro ter viajante, que o dismônio sumiu. Primeiro a gente fez um, pela teoria do vizinho mais próximo, que deu, como mostra aqui, 660 m. foi para ter um ciclo inicial. Já aí depois otimizamos pelo 2 OPT, é, e conferimos que deu 575 m uma eficiência de 11%.

E a gente conferiu, é, com o fatorial que deu o resultado, também fizemos uma cota inferior, que é o mínimo possível para para fazer esse caminho, mas é o mínimo ideal quase inacessível. E com isso concluímos que tivemos uma economia de 75, é, 105 m quando fizemos um refinamento. E agora eu volto a falar para o Artur. Perfeito.

Bom, até agora a gente falou do drone, mas primeiramente o a cauda precisa chegar até o drone. Com isso daqui a gente passa dos processos mais básicos, que seria a mistura entre a água e o e o defensivo, é, até a dispersão da gota lá na lavo o ouro. Lá, lá na lavoura. É, com isso, nós temos dois fluxo que se encontram para o preparo da mistura.

No caso, é o fluxo de água que da fonte até a aplicação agrícola soma 200 10 m de deslocamento. É, o fluxo desse e também o fluxo defensivo que do depósito de químicos até a aplicação seria de 206 m.

A gente também tem um grafo é auxiliar seria o o veículo de solo que é um veículo que tá lá para suporte para garantir que os insumos não acabem os insumos e a bateria do drone não acabem no meio-caminho e o trajeto da base até o portão, é, tem 65 m de de distância.

É, com isso a gente utilizou a validação com o algoritmo de Gigantum para garantir a ordem da dessa dessa lógica. No caso, ele vê primeiro, é, Perdão. É, ele vê primeiro, a mistura, depois ele vai para a, a dispersão. Pode passar.

Mas tudo isso que a gente apresentou até então, é, tem uma validação. Nada disso daqui foi foi falado por acaso. A gente fez toda a validação utilizando oito notebooks, que são os das aulas é, 11 até 18, para para mostrar que que todo o sistema é funcional.

Com isso a gente fez um, em todos esses oito notebooks utilizando o Python, a gente conseguiu 86 células de código e também 67 inserções. E como pode ver, aqui nessa list, é, todos os os códigos passaram no nosso teste de de qualidade. É, de apresentação foi isso. Muito obrigado pela atenção de todos. É, fico à disposição para qualquer dúvida.

E agora a gente vai passar para o simulador didático.

Não, aí vai falar mais. Ó, basicamente a gente tem a origem, a origem que a gente quer, ou o reservatório do drone, ou o tanque do solo. Além de, vamos supor o quê? Do reservatório e o nosso destino. Que a gente pode seguir várias opções, que como a mãe te falou lá, tem várias opções eh melhores, 6 m, 0.8 m, 1.2.

E aqui a gente vai colocando é, o trajeto que ele vai fazendo. É que No caso, os bloqueios. É, os bloqueios. Que vai estar mostrando aqui ele por onde que não pode passar e e vai fazendo a rota.

Por exemplo, aqui ele bloqueou o caminho do filtro 1, se eu não me engano, é que também a gente fez de ver, daí ele passou pelo filtro dois. Agora se se alterar aqui vem de reservatório você colocar na no é no tanque. Daí aqui, ele não consegue passar porque esses três caminhos aqui estão bloqueados. Daí desbloqueei isso para para ver.

Aí, ó, perfeito. Daí ele segue toda a rota normal. E Aqui embaixo também mostra o caminho encontrado, o comprimento total da de mangueiras, dos saltos e a sequência que ele faz é de canetar. Eu acho que é isso. Muito obrigado.

## Análise do Modelo

Com base no relatório e na transcrição da apresentação do Grupo 6 (Etapa 2), os pontos positivos e negativos identificados para cada um dos tópicos solicitados são:

### 1. Grafos Definições
*   Pontos Positivos: 
    *   Modelagem bem estruturada da tubulação do drone utilizando um dígrafo ponderável, onde os vértices representam os equipamentos (tanque, reservatório, bicos, filtros), as arestas representam as mangueiras (com sentido e direção) e os pesos representam o comprimento em metros.
    *   Definição clara da ordem e tamanho do grafo inicial (11 nós e 11 arestas), demonstrando como a adição de um filtro redundante altera a estrutura para 12 nós e 13 arestas.
    *   Aplicação do lema dos graus (soma de entradas e saídas) e implementação de integridade de dados para rejeitar IDs duplicados ou pesos negativos.
*   Pontos Negativos: 
    *   Dificuldade visual na apresentação dos componentes do grafo no slide, conforme admitido pelo próprio apresentador ("aqui tá meio ruim de ver").

### 2. Matriz de Adjacência
*   Pontos Positivos: 
    *   Uso correto da Matriz de Adjacência (Matriz A) para representar matematicamente as conexões de entrada de cada ponto, além de uma matriz de custos (Matriz W) para registrar o comprimento total em metros.
*   Pontos Negativos: 
    *   O apresentador demonstrou hesitação e incerteza ao explicar e diferenciar as matrizes durante a fala ("se eu não tô enganado ou vou trocar").

### 3. Matriz de Incidência
*   Pontos Positivos: 
    *   Uso da Matriz de Incidência (Matriz B) para mapear a relação entre arestas e nós, aplicando corretamente a convenção de sinal (-1 para saída do nó e +1 para entrada).
*   Pontos Negativos: 
    *   Ocorreu a mesma hesitação e confusão momentânea por parte do apresentador ao introduzir o conceito de incidência e adjacência.

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos: 
    *   Explicação didática do funcionamento do BFS (busca em largura) comparando-o a ondas na água e detalhando o uso de fila (FIFO), e do DFS (busca em profundidade) comparando-o a um labirinto e detalhando o uso de pilha (LIFO).
    *   Aplicação prática para diagnóstico de desconexão: o BFS comprova a perda imediata de alcance dos bicos caso a bomba embarcada seja bloqueada.
*   Pontos Negativos: 
    *   O apresentador precisou recorrer a uma "colinha" (anotação externa) para lembrar as siglas e conceitos dos algoritmos de busca.
    *   Houve um pequeno erro de fala corrigido logo em seguida ao explicar a estrutura do DFS ("E não funciona no modelo de fila, como o BFS, aqui no no modelo de pilha...").

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: 
    *   Analogia clara com um GPS para explicar que o algoritmo busca o caminho mais rápido e curto utilizando pesos (metros de mangueira) em vez de saltos.
    *   Realização de validação cruzada robusta com 1440 consultas comprovadas, resultando em 100% de consistência.
*   Pontos Negativos: 
    *   Nenhum ponto negativo expressivo, exceto por uma breve interrupção na fala do apresentador ao passar os dados ("E Ah, enfim...").

### 6. Teste de Estresse em Malha Fechada / Validação
*   Pontos Positivos: 
    *   Validação rigorosa do sistema utilizando 8 notebooks Jupyter (referentes às aulas 11 a 18) desenvolvidos em Python.
    *   Métricas sólidas de implementação: 86 células de código e 67 asserções (assertions), com todos os testes passando nos critérios de qualidade.
*   Pontos Negativos: 
    *   Não foram apresentados pontos negativos ou falhas nesse processo de validação.

### 7. Problemas Eulerianos
*   Pontos Positivos: 
    *   Aplicação prática de circuitos eulerianos para ordenar e planejar a inspeção.
    *   Uso de cálculo por condição de Euler para verificar o tamanho do grafo e otimização por meio do algoritmo de inspeção de rotas (mencionado como "re-rose"/chinês) para obter a validação do sistema.
*   Pontos Negativos: 
    *   O apresentador se confundiu com os números exibidos no slide ao descrever o grafo ("nosso gráfico é de é seis arestas e nove linhas. Ao contrário, o número de direito").

### 8. Problemas Hamiltonianos
*   Pontos Positivos: 
    *   Resolução do Problema do Caixeiro Viajante ("carro ter viajante") utilizando a heurística do vizinho mais próximo para obter um ciclo inicial de 660 metros.
    *   Otimização bem-sucedida com o algoritmo 2-OPT, reduzindo o trajeto para 575 metros (ganho de 11% de eficiência ou 105 metros economizados).
    *   Comparação com o cálculo fatorial e definição de uma cota inferior ideal.
*   Pontos Negativos: 
    *   O apresentador relatou uma falha visual ou ausência de elemento no slide durante a explicação ("o dismônio sumiu").

### 9. Simulador
*   Pontos Positivos: 
    *   Apresentação de um simulador didático funcional que permite selecionar a origem (reservatório do drone ou tanque do solo) e o destino.
    *   Capacidade de simular bloqueios em tempo real (como falha no filtro 1 redirecionando o fluxo para o filtro 2) e recalcular rotas automaticamente.
    *   Exibição clara dos resultados na tela: caminho encontrado, comprimento total das mangueiras, quantidade de saltos e a sequência percorrida.
*   Pontos Negativos: 
    *   Dificuldade pontual de visualização ou operação relatada pelo apresentador durante a demonstração ao vivo ("é que também a gente fez de ver").

# Grupo 7

## Transcrição

Boa tarde, pessoal. Na etapa 2 do nosso projeto, nós aplicamos o teorema dos grafos na nossa linha de produção de paçoca e nosso objetivo é transformar o fluxo programa da fábrica em estruturas computacionais para em supervisores, né? Para conseguir tomar decisões autônomas e tolerância de falhas.

A nossa fábrica, ela tem um fluxo único, que é do galpão A até o galpão B. E aí o os pontos oito, nós que são os versos, nós modelamos os equipamentos e nós temos nove conexões. Onde ele mostra a distância de de cada de cada processo, de cada galpão.

E para validar esse nosso sistemas, esse nosso sistemas, nós usamos a regra de conservação de conexões. O que que acontece? Como já foi falado em outros, em outras, outras apresentações, como cada aresta tem o ponto de partida e um ponto de saída e um ponto de chegada, a soma de todas essas conexões tem que dar nove. E por isso que a soma dos graus de entrada e saída dá esse valor.

E isso serve como se fosse uma regra matemática pro pro escada ele verificar se não ficou nenhuma tubulação de fora do nosso processo. sucesso. Nós também montamos a tabela de conexões de redes, onde -1 é a saída, 1 é a entrada e 0 indica que não há nenhuma ligação ali no nosso no nosso sistema SCADA.

Com ela nós calculamos o fluxo de equilíbrio de massa para garantir que o material não acumule em nenhum dos equipamentos intermediários e além disso o cálculo matemático que nós fizemos mostrou que temos dois caminhos alternativos, que seria aquele a redundância dos moinhos, sabe?

E isso, ele prova que a redundância dos moinhos e dos dos reservatórios, eles não são juntos, eles são caminhos independentes do nosso sistema.

Bom, uma vez modelados os gráficos, a próxima etapa é decidir qual caminho nós temos que percorrer. E para isso nós podemos Vamos utilizar dois algoritmos, que é o BFS e o DFS. O DFS, ele vai percorrer os cabinhos analisando os pontos de conexão. No nosso caso aqui, as conexões são as válvulas, então ele percorre o caminho que tiver o menor número de válvulas. Isso é interessante porque reduz o desgaste estrutural e também reduz o risco de vazamentos.

Já o DFS, ele usa uma lógica diferente. Ele vai até o final do gráfico e percorre o caminho que traz para frente. Então ali a gente consegue analisar os pontos de falha ou também otimizar os caminhos existência. Bom, também temos o caso onde a gente quer analisar qual é a distância física entre os pontos e para isso a gente utiliza o algoritmo de Dijkstra. Esse algoritmo, ele vai sempre percorrer o caminho que tiver o menor custo. No nosso caso, a gente tá analisando o custo da distância.

Então, se quisermos sair da nossa do nosso sistema do ponto de estocagem também do até a prensa, a gente pode passar por vários caminhos e cada caminho ele vai calcular o custo. No nosso exemplo, o menor custo foi o caminho que passa pelo moinho B que tem 77 m.

Esse mesmo algoritmo, ele foi aplicado em simulações de falha. E nessas simulações, a gente simulou do motor B do moinho para funcionar, seja por uma sobrecarga do sistema ou seja por um toque no equipamento da tubulação. Nesse caso, ele o próprio sistema atribui a esse caminho um valor infinito de custo. Então, o próprio algoritmo, ele vai recalcular e procurar o outro menor para outro cabinho de menor custo possível.

No nosso caso, na simulação, esse tempo que gastou para o algoritmo para fazer esse cálculo foi de 0,14 milissegundos. E, no nosso caso, a gente tem uma atuação pneumática no sistema de 2 segundos. Ou seja, o nosso algoritmo responde muito mais rápido do que o próprio sistema. Então, sendo suficiente para rodar esse teste de segurança.

Agora é por parte de inspeção, né? A gente utilizou alguns algoritmos também, porque como nossa fábrica é uma fábrica de paçoca, a gente é utiliza o alumínio, né? E ele acaba gerando pó, poeira e acaba é interromper os dutos, as esteiras e para isso a gente precisa de um robô que faça a inspeção da das esteiras, né? Da dos dutos e da da planta ali para que possa ser feito essa para que para que o sistema, né? Possa rodar com a máxima eficiência.

Então, nisso a gente utilizou o circuito euleriano, que é um circuito que a gente a gente pode fazer uma rota, né, de inspeção, só que eles você só pode utilizar ele quando você tem todos os nós de grau 2 ou grau 4.

E na nossa planta, a gente analisou que a gente tem 16 conexões e dois equipamentos ao redor da planta toda para fazer a inspeção e dentre esses equipamentos dentre essas conexões a gente analisou e viu que realmente a gente tem todos de grau 2 ou grau 4.

Então isso dá o direito da gente utilizar os circuito de ar quente e também aplicar o ear housing o que também é um é uma um é uma alta inspeção que a gente faz e é uma arquitetura que a gente faz para fazer isso aqui com as arestas, né?

Porque a partir disso a gente consegue melhorar a complexidade do percurso e também, é, a gente tem esse problema de se caso surgir mais vértices, né, no nosso na nossa planta ali no nosso processo, a gente utilizaria o carteiro chinês, que é uma outra, né, outra forma da gente poder mitigar esses erros para fazer com que os vértices não se tornem imprevistos, eles fiquem entre igual 2 e igual 4. Vamos seguir.

Além disso, a gente vai para a parte de das estações críticas, então dentro da parte de expressão também tem que realizar as expressões nas estações críticas e para isso a gente utiliza o AGV, que é o de mostragem de qualidade, só que nessa parte ele vai pelas arestas, não mais não, vai pelos vértices, não mais pelas arestas. E aí, é, ele faz o caminho para cinco cinco estações, né, para que não possa passar por nenhuma estação e já e passar de novo.

Então a gente utiliza a AGV. Também a gente utiliza esses dois modelos para que possa ser feita a rota com a maior a maior eficiência e para que seja eficaz. Então primeiro a complexidade de limpar o edifício, que é a solução do vizinho mais próximo, né, que o senhor já comentou aqui, é que para que ele possa checar quais são as estações que estão mais próximas uma da outra para fazer um caminho mais eficiente.

Também a segunda é a utilização 2 AOT, que ele vai eliminar os cruzamentos e e reduzir as rodas. Então, vamos fazer com que a roda seja mais cíclica e reduza a distância e o tempo de de inspeção. E por último, é, a parte da rede multicamadas, é, a gente que a gente faz que a gente coloca todas as estruturas da nossa planta e realmente checa todos os gráficos que a gente tem.

A gente dispôs, né, de três camadas eficientes, então, a primeira é GD de veículos pesados, que é a parte da frota, da rota, que é uma parte cíclica também, como vocês podem ver. A parte de GM, que é materiais, recepção, expedição, então a parte da linha ali, e a parte de GA, que é a parte de expedição, que é a pista de AGD, como eu tinha comentado, forma de canais e de qualidade. Eh, essas três camadas são enquadradas com fluxos, né, direcionais e não reversíveis.

E nesse fluxo de material aqui, a gente modela ele com o DAC, que o DAC é o gráfico acrílico dirigido. E aí, porque ele não tem não tem ciência cíclica, né, ele segue uma direção só. E aí a gente ordena isso pelo algoritmo de quem? Para poder ser cíclica para poder otimizar esse processo e fazer com que ele seja o mais eficiente possível também.

E aí a gente fundamenta tudo isso, né? Também a batelada e a reestruturação conforme a da da Anvisa e da a da CCP.

Foi dito o um monte de teoria, foi dito um monte de de coisas, mas o que isso realmente reflete na prática, o que isso realmente faz sentido. O que que realmente o algoritmo de Dijkstra, o AGV, o DAG, o que que isso realmente representa numa planta real? Vamos lá.

Ah, o simulador, né?

Tá meio ruim o o o controle do trem. Hum. Basicamente o seguinte, a, a planta de paçoca você tem uma rota pré-definida, você tem um, é, estações bem definidas, você, você tem um fluxo fechado, você não tem margem para rota diferentes, para coisas diferentes, mas é necessário fazer algumas verificações, é necessário ter segundas opções, outras alternativas.

Inicialmente a gente tem a rota de Dijkstra que representa o menor caminho. Esse menor caminho é um caminho físico, a fábrica, tem uma planta, você tem trajetos, você tem corredores e você precisa definir qual que é o caminho mais eficiente mediante a um espaço tridimensional com vários caminhos possíveis. Esse caminho não é só um vértice, uma aresta, é realmente um corredor de fábrica mesmo.

Porém, é necessário é necessário entender que você tem cenários críticos nessas nessas transições. Esses cenários críticos críticos não necessariamente vão ser defeitos na fábrica em si, mas às vezes em uma única tubulação que vai comprometer um caminho e é necessário ter mais de uma opção, por exemplo, na interação de falha. Pode dar um outro aí?

Aqui, inicialmente, você tinha um caminho direto, só que devido a um possível erro, você teve esse caminho como valor infinito. Ou seja, ele nunca iria por esse caminho de acordo com o supervisor e ele vai num outro outro processo que vai fazer a uma coisa, porém, talvez mais lento, talvez, é, não tão bom quanto originalmente, mas a produção não pode parar.

Por isso que é necessário uma rota alternativa. Já o AGV, a inspeção, o DAC, o que que realmente isso reflete? Por ser uma planta sanitária mexer com alimento, você precisa constantemente coletar amostras em diferentes pontos, aí que entra o AGV.

Os únicos locais onde vai ter amostra são são um número menor de de vértices que é necessário que o caminhão passe, um robô passe colhendo as amostras apenas uma vez para evitar eh duplanálise, para evitar um uma possível leitura a mais. Para que pode ver?

Para você ver eh o pontinho laranja mexendo somente em um por vez e somente nos locais aonde realmente se coleta amostras. No nos nos locais de moagem, você não vai ter amostras sanitárias, você vai ter outras coisas, mas não entra nesse caso. Já na inspeção, aí já muda a ideia.

Como o algoritmo muda, em vez de você olhar para as para os vertedores, você olha para as arestas, você vai analisar um outro tipo de resíduo. Você vai olhar resíduos no em tubulação, você vai olhar poeira, você vai você vai olhar possíveis coisas que ficaram em entalados. Aí o imagem muda. Vai para a inspeção. Aí você já tem um uma lida mais nas arestas.

Já o DAG, você precisa garantir que toda a linha esteja funcionando perfeitamente, onde toda a receita está funcionando devidamente. Aí você vai olhar para outros locais, por exemplo, locais de fábrica, ou os locais de transporte, porque às vezes não necessariamente você vai ter um problema na moagem ou se vai ter algum problema na parte final, mas talvez no transporte. E isso não é considerado uma área, isso não é considerado um versus, é considerado algo a mais.

Por isso que é necessário outro algoritmo para você analisar essas outras variáveis. Isso? É isso?

## Análise do Modelo

Com base exclusivamente no relatório da apresentação, seguem os pontos positivos e negativos identificados para cada um dos tópicos solicitados:

### 1. Grafos Definições
*   Pontos Positivos: 
    *   Modelagem adequada dos equipamentos como vértices (8 vértices) e das conexões como arestas (9 conexões), representando as distâncias físicas do processo.
    *   Utilização da regra de conservação de conexões (soma dos graus de entrada e saída) para validar matematicamente o sistema no SCADA, garantindo que nenhuma tubulação ficasse de fora.
    *   Modelagem do fluxo de materiais utilizando um Grafo Acíclico Dirigido (DAG) para representar processos direcionais e não reversíveis.
*   Pontos Negativos: 
    *   O grupo reconhece que, na realidade física da fábrica, os caminhos são corredores tridimensionais complexos e não apenas uma representação simples de vértices e arestas.

### 2. Matriz de Adjacência
*   Pontos Positivos / Negativos: 
    *   Não há menção direta ou detalhamento de uma "Matriz de Adjacência" no texto da apresentação. O grupo foca na tabela de conexões de redes (que possui características de matriz de incidência).

### 3. Matriz de Incidência
*   Pontos Positivos: 
    *   Montagem de uma tabela de conexões de redes (matriz de incidência) utilizando valores de $-1$ para saída, $1$ para entrada e $0$ para ausência de ligação.
    *   Uso dessa matriz para calcular o fluxo de equilíbrio de massa, garantindo matematicamente que o material não se acumule nos equipamentos intermediários.
*   Pontos Negativos: 
    *   Nenhum ponto negativo foi mencionado no texto.

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos: 
    *   O algoritmo BFS é aplicado com sucesso para analisar os pontos de conexão (válvulas), escolhendo o caminho com o menor número de válvulas para reduzir o desgaste estrutural e o risco de vazamentos.
    *   O algoritmo DFS é utilizado de forma lógica para ir até o final do grafo e retornar ("trás para frente"), permitindo analisar pontos de falha e otimizar os caminhos existentes.
*   Pontos Negativos: 
    *   Nenhum ponto negativo foi mencionado no texto.

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: 
    *   Utilizado de forma eficiente para calcular a menor distância física (menor custo) entre os pontos da planta (como do ponto de estocagem até a prensa, resultando em um caminho de 77 metros pelo moinho B).
    *   Aplicado com sucesso em simulações de falha para recalcular rotas alternativas automaticamente.
*   Pontos Negativos: 
    *   Nenhum ponto negativo foi mencionado no texto.

### 6. Teste de Estresse em Malha Fechada (Simulação de Falha)
*   Pontos Positivos: 
    *   Simulação bem-sucedida de falha no motor do moinho B (por sobrecarga ou choque físico), onde o sistema atribui custo infinito ao caminho danificado.
    *   Excelente tempo de resposta do algoritmo (0,14 milissegundos) para recalcular a rota, sendo muito mais rápido do que o tempo de atuação pneumática do sistema físico (2 segundos), o que valida a segurança do teste.
*   Pontos Negativos: 
    *   O grupo aponta que a rota alternativa calculada após a falha pode tornar o processo mais lento ou menos eficiente do que o original, embora garanta que a produção não pare.

### 7. Problemas Eulerianos
*   Pontos Positivos: 
    *   Aplicação prática do circuito euleriano para planejar a rota de um robô de inspeção de dutos e esteiras (necessário devido ao acúmulo de poeira de amendoim).
    *   Validação correta dos requisitos do circuito euleriano, confirmando que todos os nós da planta possuem grau par (grau 2 ou 4).
    *   Uso de técnicas adicionais como *ear decomposition* (citado como "ear housing") e a previsão de usar o algoritmo do Carteiro Chinês caso novos vértices alterem os graus dos nós.
*   Pontos Negativos: 
    *   Nenhum ponto negativo foi mencionado no texto.

### 8. Problemas Hamiltonianos
*   Pontos Positivos: 
    *   Uso de um AGV para realizar amostragem de qualidade passando pelos vértices (estações críticas) exatamente uma vez, evitando duplas análises.
    *   Utilização da heurística do "vizinho mais próximo" para definir rotas eficientes entre as estações mais próximas.
    *   Aplicação do algoritmo "2-opt" (citado como "2 AOT") para eliminar cruzamentos de caminhos e reduzir o tempo e a distância das rotas.
*   Pontos Negativos: 
    *   Nenhum ponto negativo foi mencionado no texto.

### 9. Simulador
*   Pontos Positivos: 
    *   O simulador demonstra visualmente a rota de Dijkstra, a reação do sistema a falhas (mudando o caminho ao receber custo infinito), a movimentação do AGV coletando amostras (ponto laranja se movendo) e a inspeção focada nas arestas.
*   Pontos Negativos: 
    *   O apresentador relata dificuldades técnicas durante a apresentação, mencionando que o controle do simulador/transição de telas estava ruim ("Tá meio ruim o controle do trem").

# Grupo 8

## Transcrição

Boa tarde, pessoal. Eh, nosso grupo ficou responsável aí por desenvolver uma célula de manufatura célula de manufatura flexível. E a primeira etapa, eh necessária para desenvolver o nosso sistema, foi transformar toda a célula num gráfico dirigido ponderado. Eh, através disso a gente conseguiu obter que seria necessário nove vértices para poder compor o sistema, eh que são os atuadores.

E através da topologia, eh a gente conseguiu também obter as oito esteiras que serão necessárias para fazer a triagem do nosso processo.

Para poder chegar no valor de oito esteiras, a gente teve que aplicar o lema do aperto de mãos dirigidos, que consiste com a soma de todas as entradas das esteiras, tem que ser igual a todas as saídas das esteiras também. A partir disso a gente conseguiu chegar na conclusão que seria nove vértices, oito esteiras e E aplicando esse teorema, a gente teria certeza de que não se cairia nenhuma outra esteira no meio do processo onde poderia ser é desviada as peças.

Matriz de incidência de balanço matricial de peças. É, a partir daí a gente teve que aplicar uma lente Kirchhoff, né? É, para que a gente chegasse na conclusão que não seria gerada nenhuma peça durante o processo e também garantir o funcionamento bom perfeito aí no nosso sistema. Que bom.

Eh, com a malha definida, a gente pode aplicar o conhecimento do nosso projeto em duas buscas, eh duas dois dois tipos de buscas clássicas, que é a busca em largura, que é o BFS e a busca por profundidade, que é o DFS.

A busca em largura, ela vai utilizar essa fórmula que tá ali na segunda linha e ela vai ser responsável por encontrar uma rota que vai utilizar o menor número de arestas que são os atuadores, que eles vão ser comutados durante o percurso de cada peça.

E bom, ela tem como eh como princípio ela tem como finalidade principal minimizar a comutação dos pistões pneumáticos, assim, diminuindo o gasto de ar comprimido e também eh diminuindo o atrito mecânico e também o desgaste dos equipamentos.

E depois a gente também aplicou a busca por profundidade, que é o DFS, que o DFS ele vai classificar as arestas em três cores principais, que é o o branco, o cinza e o preto, que corresponde as arestas do tipo árvore, as arestas do tipo retorno, que não vai se aplicar no nosso projeto e as arestas do tipo avanço. As arestas do tipo árvore vão ser os segmentos da esteira principal, que no caso seriam as esteiras secundárias, as arestas do tipo retorno.

Ela indicaria que existe a presença de um ciclo direcionado e as arestas do tipo avanço seriam as linhas de bypass forçando a passa a as peças a passarem na frente. A A busca por profundidade, ela funciona como se fosse uma auditoria estrutural do nosso projeto. E com isso, a gente teve diagnóstico que com base na ausência das arestas de retorno, ele vai provar que a nossa malha, ela é do tipo dado, que é basicamente um grafo direcionado a cíclico.

Um grafo direcionado a cíclico, ele vai indicar que ela possui somente um movimento de A para B, ela não vai fazer o movimento de B para A e isso vai indicar também que ela não possui nenhum loop definido. Em seguida, com o BFS e o DFS definido, a gente pode aplicar o algoritmo Dijkstra. O algoritmo Dijkstra, ele tem como eh principal finalidade eh solucionar o problema do caminho mínimo médio.

Ou seja, aplicando essa fórmula aqui, que uma parte dela em conjunto com BFS, BFS, ele vai encontrar o menor caminho eh possível para que a peça ela chegue no seu destino final. E aqui a gente deixou alguns exemplos que a gente tem o destino final aqui desses quatro exemplos, a rota nominal que foi aplicada pelo algoritmo de extra, a distância percorrida, né? Que no caso seria o consumo e os atuadores que vão ser comutados nesse processo.

Em seguida, a gente aplicou a tolerância falhas e desvio automático em tempo real, seguindo a norma IEC 61511. O que que essa tolerância falhas faz? Colocando no contexto de uma indústria real, os problemas eles vão acontecer.

E aí, por conta da tolerância falhas, o o o sistema escada, ele vai se acontecer alguma falha, seja por travar o pistão já comprimido ou também pela esteira travar, o algoritmo escada ele vai elevar o peso dessa aresta para o infinito fazendo com que ele saia do espaço de busca e aí com base nisso o motor Tíxera ele vai procurar uma rota alternativa, seja ela por bypass ou seja ela por retorno.

Com base nisso ele fazendo esse esse trajeto alternativo que as centenas de vezes mais rápido do que o atuação do pistão pneumático, ele vai conseguir garantir que a peça, ela não colida com nenhuma outra peça fazendo o caminho alternativo. E aí aqui a gente deixa dois exemplos para a nova distância e tempo de resposta. Isso.

Falando um pouco sobre a inspeção preventiva, é, é como se fosse um um robô que ele vai ele vai fazer uma varredura completa de todas as passarelas e esteiras da nossa linha de produção, é, de forma a não repetir nenhum dos dos postes de parada e de maneira e de maneira contínua.

Para isso, isso vai ser fundamentada no circuito eleviano, teorema fundamental de Euler, que diz que um gráfico conexo admite um circuito eleviano fechado se somente se todos os seus vértices possuírem grau par. Para isso, cada um dos vértices, ou seja, cada um dos pontos de parada foram graduados com um grau par, ou dois ou quatro.

É, caso caso também aconteça, por exemplo, algo já, vai ter uma modificação na planta que que vai gerar um grau ímpar em algum desses vértices. É, o sistema passa pelo algoritmo, é, o sistema passa pelo algoritmo Dijkstra, uma conexão com o problema do carteiro chinês, que vai fazer basicamente o seguinte, que vai duplicar algum alguns desses vértices para garantir a paridade do sistema.

E a rota desse sistema é definido pelo algoritmo de high rose, que reconstrói a linha completa em tempo linear, ótimo, utilizando a remoção de arestas.

É, sobre o roteamento logístico, o robô basicamente ele tem que seguir com um caminho um caminho direto, partindo da doca, abastecendo o silo, recolhendo as amostras, é, coletando as caixas e voltando ao ponto ao ponto inicial, sem sem repetir nenhum dos pontos de parada e como da forma anterior, de forma de forma eficiente, no sentido métrico agora.

Ou seja, tem que percorrer a menor distância métrica possível.

Para isso, a gente usa alguns métodos de roteamento, por exemplo, o método de vizinho mais próximo, que gerou uma distância de 98 m, porém, aplicando o refinamento 2 OPT, ele conseguiu reduzir essa essa distância para 86,3 m, que pode que pode também ser confirmado através do método de força bruta, que seria um que que é aquele que vai percorrendo todos os caminhos baixando a distância muito completa.

Também, o MST, ele ocupa um valor teórico que é bem inferior assim, mas o que tá sendo utilizado seria esse de 86,3 m.

É, o principal problema que a gente teria ao tentar fazer a modelagem desse sistema é tratar ele como um único grafo, porque o que causaria inconsistência, pois um fluxo é totalmente um DAG, ou seja, igual o BRIA falou, ele só tem um sentido, ele não vai e volta. E a gente tem também o fluxo de veículos, que na verdade é cíclico. Ele vai, o veículo pega, vai até tal ponto e depois ele volta para a estação e fica repetindo esses ciclos.

Então a gente tem que tratar o sistema como dois gráficos independentes, um para fluxo de materiais e um para o fluxo de veículos. Pois um é justamente um DAC que foi comprovado pelo algoritmo de CAN, que o fluxo de materiais ele realmente só vai no sentido, uma peça não vai nem volta, só vai, no caso, ela não volta. Enquanto Nossos veículos já fazem realmente uma rota cíclica. E aqui estão algumas estações dos nossos fluxos utilizados no projeto.

Por exemplo, Tarugos Vermelhos sai do balcão A e vai para as Docas, uma distância de 134 m. Também é um fluxo aqui de peças no processamento da célula de manufatura. Tem as embalagens também que vão do Galpão A até a paletizadora, foi encontrada uma distância de 74 m, também é um fluxo de materiais. Enquanto o caminhão de carga que vai da portaria para a balança e depois retorna para a Daria, controle de distância de 85 m já é uma já é um anel fechado circular que é a movimentação de um veículo.

É, agora fazendo as considerações finais sobre tudo que foi encontrado, a gente conseguiu a modelagem representando unificamente os oito, nove postos é oito esteiras da da sede manufatura com comprovado pelo acerto do leme do aperto de mãos que ele citou e também foi comprovado pelo Kirsh O sistema, ele, ele, toda peça que vai, B vezes que é igual a S, ou seja, toda peça que vai, ela não se cria uma peça, nem se perde no caminho, então é comprovado que tudo que vai realmente chega efetivamente do processo.

O Dijkstra em milissegundos, ele foi comprovado que a gente conseguiu uma latência. Quando encontra algum projeto, alguma opção falha, alguma coisa, Dijkstra já recalcula a rota em até 0,05 milissegundos, o que já é um tempo muito ótimo, porque o Dijkstra, por exemplo, atua em 150 milissegundos, então vai já ser um tempo sim 100 100 vezes menor, é bem rápido. Isso mantém a segurança da norma IEC, que é feito para a indústria, é a 601511.

E agora para a ultimação logística e a auto economia, nós confirmamos com a inspecção aliariana que teve uma varredura de 100% das passarelas em tempo linear, sem repetir nenhum trecho. E também a convergência no ótimo global do TSP, foi que a gente encontrou com o refinamento de dois, reduziu o percurso da IGB em 11,7 m.

E atingiu ali, a gente conseguiu atingir um 86,13 m, como foi comentado, por força bruta, ele percorrendo 720 caminhos, 14 caminhos possíveis, a gente conseguiu encontrar esse número aqui aí que reduziu em 11,6 7 m. E também a simplicidade estrutural, porque o algoritmo de can comprovou formalmente que ali o fluxo de peças é um DAG escrito. Ou seja, que ele realmente só vai no sentido e não tem nenhum ciclo ali dentro. Então, comprovadamente é um DAG. Na apresentação é isso.

Aí a gente colocou aqui na parte de baixo o simulador. É, que aqui a gente, na verdade, colocamos cinco cenários possíveis, que a gente tem primeiro a operação luminal aqui, do ciclo, que a caixa ela vai fazer o ciclo comum dela. E aí depois a gente colocou aqui um cenário dois, que é o pistão travado e aí o algoritmo ele vai fazer um bartex, fazendo ela percorrer outro caminho.

Tudo isso ele vai sendo registrado aqui na parte do do lado aqui, calculando o tempo e o custo, né? Que no caso seria distância total. Aí aqui é um outro cenário com outro problema, que no caso seria esteira travada. A rota AGV, que foi comentado, que aí ele dá uma diminuída aqui no no no simulador. Aí faz a rota AGV também e a gente tem o cenário cinco que é o High Rozer, que no caso seria a varredura de manutenção.

E a gente tem um preço de simulador. É

## Análise do Modelo

Com base exclusivamente no relatório de apresentação fornecido, seguem os pontos positivos (o que foi realizado e comprovado com sucesso) e os pontos negativos (lacunas, omissões ou limitações identificadas no conteúdo apresentado) para cada um dos tópicos solicitados:



### 1. Grafos Definições
*   Pontos Positivos: 
    *   Modelagem bem-sucedida da célula de manufatura flexível como um grafo dirigido ponderado, identificando corretamente 9 vértices (atuadores) e 8 esteiras.
    *   Aplicação correta do lema do aperto de mãos dirigido para garantir a consistência do fluxo de entrada e saída das esteiras, evitando desvios ou perdas de peças.
    *   Identificação e separação do sistema em dois grafos independentes: um grafo direcionado acíclico (DAG) para o fluxo de materiais (comprovado pelo algoritmo de Kahn) e um grafo cíclico para o fluxo de veículos (AGV).
*   Pontos Negativos: Não foram identificados pontos negativos ou falhas conceituais nessa definição dentro do texto.



### 2. Matriz de Adjacência
*   Pontos Positivos: Não há.
*   Pontos Negativos: A Matriz de Adjacência não é mencionada em nenhum momento da apresentação, caracterizando uma omissão completa desse conceito na modelagem apresentada.



### 3. Matriz de Incidência
*   Pontos Positivos: 
    *   Apresentação da "matriz de incidência de balanço matricial de peças" integrada à Lei de Kirchhoff.
    *   Utilização bem-sucedida para garantir matematicamente que nenhuma peça seja criada ou perdida durante o processo ($B \times V = S$), assegurando o perfeito funcionamento do sistema.
*   Pontos Negativos: A explicação sobre a estrutura física ou a construção matemática da matriz de incidência em si é extremamente breve no texto.



### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos:
    *   BFS (Busca em Largura): Utilizado com sucesso para encontrar rotas com o menor número de arestas (comutações de atuadores), o que minimiza o desgaste mecânico, o atrito e o consumo de ar comprimido dos pistões pneumáticos.
    *   DFS (Busca em Profundidade): Funcionou como uma "auditoria estrutural" do projeto, classificando as arestas por cores (branco, cinza e preto). A ausência de arestas de retorno comprovou formalmente que a malha de fluxo de materiais é um DAG (grafo direcionado acíclico), garantindo que não há loops.
*   Pontos Negativos: Não há pontos negativos reportados; a aplicação de ambos os algoritmos foi detalhada e justificada de forma prática.



### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos:
    *   Implementação do algoritmo de Dijkstra para solucionar o problema do caminho mínimo médio em conjunto com o BFS.
    *   Integração com tolerância a falhas em tempo real seguindo a norma de segurança industrial IEC 61511. Em caso de falha (pistão ou esteira travada), o sistema eleva o peso da aresta ao infinito, e o motor Dijkstra recalcula uma rota alternativa (por bypass ou retorno) em apenas 0,05 milissegundos. Esse tempo é extremamente rápido (100 vezes menor que a atuação física do pistão, que leva 150 ms), garantindo que as peças não colidam.
*   Pontos Negativos: Não há pontos negativos; o algoritmo demonstrou alta eficiência e conformidade com normas técnicas.



### 6. Teste de Estresse em Malha Fechada
*   Pontos Positivos: O grupo realizou simulações de cenários críticos de falhas em tempo real (como pistão travado e esteira travada) para testar a capacidade de desvio automático do sistema.
*   Pontos Negativos: O termo específico "Teste de estresse em malha fechada" não é formalmente citado ou detalhado na apresentação sob essa nomenclatura técnica.



### 7. Problemas Eulerianos
*   Pontos Positivos:
    *   Aplicação prática na inspeção preventiva contínua das passarelas e esteiras por um robô, sem repetir trechos.
    *   Fundamentação correta no circuito euleriano e no Teorema Fundamental de Euler, garantindo que todos os vértices tivessem grau par (2 ou 4).
    *   Previsão de tratamento para modificações na planta (que gerem graus ímpares) por meio da conexão com o Problema do Carteiro Chinês (duplicando vértices via Dijkstra para garantir a paridade).
    *   Uso do algoritmo de Hierholzer ("High Rose") para reconstruir a linha completa em tempo linear ótimo.
*   Pontos Negativos: Não há pontos negativos; a teoria euleriana foi aplicada de forma robusta e completa.



### 8. Problemas Hamiltonianos
*   Pontos Positivos:
    *   Aplicação no roteamento logístico do robô (abastecer silo, coletar amostras e caixas partindo da doca e retornando ao início sem repetir pontos de parada) buscando a menor distância métrica.
    *   Utilização do método do Vizinho Mais Próximo (obtendo 98 m) refinado com o algoritmo 2-OPT, o que reduziu o percurso em 11,7 m, atingindo a marca de 86,3 m.
    *   Confirmação do ótimo global do problema do caixeiro viajante (TSP) por meio de força bruta, analisando 720 caminhos possíveis.
*   Pontos Negativos: Embora o Problema do Caixeiro Viajante (TSP) e a dinâmica de caminhos sem repetir vértices tenham sido aplicados, o termo "Hamiltoniano" não é explicitamente mencionado no decorrer da apresentação.



### 9. Simulador
*   Pontos Positivos:
    *   Desenvolvimento de um simulador funcional com 5 cenários práticos: 1) Operação nominal; 2) Pistão travado (desvio por bypass); 3) Esteira travada; 4) Rota do AGV; 5) Varredura de manutenção pelo algoritmo de Hierholzer ("High Rozer").
    *   O simulador registra e calcula em tempo real o tempo de execução e o custo (distância total percorrida) de cada cenário.
*   Pontos Negativos: O encerramento da explicação sobre o simulador foi abrupto e interrompido no final da apresentação.

# Grupo 9

## Transcrição

Bom, a gente vai apresentar aqui eh a nossa parte da etapa dois do nosso projeto. Essa parte agora ela vai focar na modelagem topológica em grafos e roteamento ótimo de pressão.

Então a gente utilizou vários dos nossos pontos que a gente foi aprendendo durante a etapa dois para implementar no nosso projeto do nosso sistema SCADA por Então a gente utilizou o Dijkstra ponderado de malha física, matrizes de fluxo, segurança por corte e arestas, alguns algoritmos de grafos, então seria o Dijkstra, o Bellman-Ford, o o Bellman-Ford, o Euler e o TSP, e a gente teve tudo isso para uma integração do sistema SCADA em tempo real. Pode passar, João.

Então a nossa base do nosso projeto é utilizar a teoria dos grafos como núcleo de decisão do nosso sistema SCADA. Então para que que a gente faz isso? A gente faz isso para a gente ter um roteamento mais seguro do nosso sistema industrial e a gente ter uma otimização operacional em tempo real para a gente poder ter a nossa supervisão.

Eh, a gente também teve uma garantia determinística muito grande, então a gente seguiu a o ciclo de varredura do sistema SCADA de 100 milissegundos, eh para a gente ter um um um consumo de menos de 1 milissegundo. Eh, pode passar? Eh, a gente também teve a malha de hidrogênio modelada em três setores industriais, isso a gente apresentou na etapa 1, mas eu vou retocar retomar aqui para a gente poder ter uma outra eh outra visualização mais.

A gente tem o setor 100, então o setor 100 é o banco de armazenamento de todo nosso nosso setor industrial. Então a gente a gente tem três tanques, três cilindros eh em efeito cascata, um vai ser de baixa pressão, outro vai ser de média pressão e outro vai ser de alta pressão. Se eu não me engano vai de 100 bar até um máximo de 1.000 bar.

Aí o setor 200 é a parte de condicionamento criogênico do hidrogênio, já que a norma SAE J2601, ela faz obriga que a gente tenha um hidrogênio de 40 eh menos 40° ou igual a menos 40° porque senão ele pode superaquecer e resultar até mesmo numa explosão no nosso sistema industrial. Então o condicionamento ele é feito por um chiller criogênico para fazer todo esse resfriamento do hidrogênio.

E por último a gente tem o o setor 300 que é a dispensação final e a conexão do tanque do veículo que é eh ela é feita com uma tampa veicular de 700 bar. Pode passar? Eh, agora é o primeiro tópico que a gente vai abordar sobre a etapa dois de desenvolvimento nosso. Eh, a gente dividiu em quatro etapas, quatro tópicos, no caso. Eh, o primeiro tópico vai ser de modelagem topológica em matrizes de fluxo. Pode passar, João.

Aqui a gente criou um digrafo ponderado de malha hidráulica, então a gente tem o digrafo ali. E todo esse digrafo a gente colocou oito equipamentos funcionando como vértices e todos esses oito vértices eles são conectados por arcos nó, que são como funcionando eh eles funcionam como se fossem as tubulações do nosso sistema. Eh, pode passar, João. Eh, aqui a gente tem a nossa matriz de incidência com a elevação vetorial de massa, então a gente Para poder fazer isso, eu vou dar um exemplo eh com o nosso vértice XV104.

Eh, se você ver ali, a gente tem a convergência de vazões no no nosso setor do XV104. Então ele vai funcionar como um coletor das vazões dos três eh três cilindros, os três tanques. Ele vai pegar, vai fazer a soma dessas três vazões e tem que dar o equivalente para o chiller fazer o próximo passo. Então ele tem que fazer toda essa checagem para poder passar eh no no XV104. Eh, agora vamos passar a palavra para o Léo para ele falar um pouquinho melhor das outras partes.

No tópico dois, eu vou falar como a gente utilizou o sistema de busca para garantir a segurança na nossa planta. Eh, a gente usou a busca em largura para que ela atua gerando frente de ondas.

Então quando é disparado um alarme, ela faz uma varredura pelo grafo em camada, tentando buscando o menor corte possível para isolar a falha eh sem despressurizar o resto da da planta e os utilizando o menor número de válvula.

E a a busca em profundidade, ela busca arestas de retorno e se ela identifica alguma, significa que tem uma recirculação de hidrogênio não controlada, então ela dispara um alarme. Agora eu vou falar como que a gente usou o esse algoritmo de Dijkstra Dijkstra, para garantir a a otimização do nosso da nossa operação.

A na prática, a origem não a rota inicial é pelo tanque 101, que é esse daqui, e mas a gente tem rotas alternativas pelo tanque 102 pelo tanque 103. O sistema com o SCADA ele ele seleciona automaticamente dependendo da quantidade de pressão do abastecimento, garantindo a eficiência da nossa operação. Pode passar?

Na prática, se um um se por exemplo o alarme 101 dispara e e identifica, detecta o vazamento no tanque 101, o sistema prevê que o tanque seja isolado e recalcula a rota para o tanque 102. Então, além disso, a o a análise de cortes ela consegue identificar trechos críticos que não tem a redundância física.

Então dessa forma a gente consegue pelo pelos grafos eh os grafos auxiliam tanto na continuidade da operação quanto na identificação de vulnerabilidades que exigem um intertravamento global.

E agora aplicando um robô para nesses grafos que a gente tem. O primeiro caso seria a o hidrogênio ele vai desgastar os tubos ao longo do tempo. Então a gente precisa passar uma sonda ali, no caso seria essa fita, seria eh Fart Line, esqueci o nome. Que vai checar as arestas em específico para ver se tem algum vazamento.

Se se ela achar algum vazamento, ela dá um peso infinito para ali para não garantir que não passe por ali. Só que tem um problema, de acordo com a teoria de Euler, eu preciso que tenha grafo todos os todos os vértices do grafo tem um grau par. Só que inicialmente, tanto o final quanto o começo, o primeiro o primeiro teria três, o último teria um. Só que isso seria facilmente contornado adicionando a própria base do robô que iria fazer esse teste.

Aí faria 100% se fosse possível usar Euler, teria todo ele grau par, e utilizando o algoritmo desse cara que eu não sei qual o nome, funcionaria daí certinho. Só passar. Depois o próximo problema. O às vezes o problema não seria a tubulação, seria nas próprias estações. Um tanque pode estar cheio de impureza, então eu preciso checar as estações específicas.

E eu quero fazer isso com a menor distância possível. Então para isso eu vou usar o caixeiro viajante. Inicialmente usando a solução gulosa, o vizinho vizinho mais próximo, eu acabo fazendo, não dá para ver, só que o tanque três quando ele vai para o próximo, depois ele acaba cruzando. Sendo assim, quando ele cruza, é garantido com certeza que o 2-OPT consegue resolver isso. E aí isso acaba gerando uma economia de 20 m. Pode passar.

Depois o grafo de intertravamento da e CAM. Para garantir também que haja uma sequência ali, eh seria o grafo de intertravamento e o CAM vai fazer com que evite que chegue num num loop. Que nem num loop de computador, que tem um tempo máximo ali, o CAM vai garantir que isso não ocorra. que ele vai vai conferir, vai garantir que não tá em um ciclo infinito, em em computação também. Pode passar? E é Acho que você passou dois.

Isso.

Isso.

E aqui ficaria o tempo. Como ele falou antes, teria que fazer toda essa esse ciclo em menos de 100 milissegundos. Então os primeiros 10 milissegundos foram responsáveis pela leitura, garantindo que tudo estaria certo, estaria sem problema. Depois ele vai ajustar o peso, igual eu falei antes. Se algum tubo acabar dando que tá problema, ele estabelece um peso. Então isso vai fazer com que via Dijkstra que tá lá, seja impossível ele passar por ali.

Então ele já faria o que é o o roteamento e depois isso daria como como daria a saída, dando um tempo de 100 milissegundos tudo isso. Pode passar? E no final, isso que a gente fez, a gente otimizou tudo com com os robôs, a gente deixou mais resiliente, mais seguro, garantindo maior compatibilidade e nós criamos uma sinergia de lógicas e grafos para garantir que isso ocorra. E é isso.

## Análise do Modelo

Com base exclusivamente nas informações contidas no relatório da apresentação, seguem os pontos positivos (o que foi implementado, resolvido ou apresentado) e negativos (lacunas, limitações ou problemas identificados) para cada um dos tópicos solicitados:

### 1. Grafos Definições
*   Pontos Positivos: O grupo utilizou a teoria dos grafos como o núcleo de decisão do sistema SCADA para obter roteamento seguro e otimização em tempo real. Eles definiram e modelaram um digrafo ponderado de malha hidráulica contendo 8 equipamentos funcionando como vértices, interconectados por arcos que representam as tubulações.
*   Pontos Negativos: Não há menção a definições formais mais profundas de teoria dos grafos além da caracterização básica de vértices e arcos.

### 2. Matriz de Adjacência
*   Pontos Negativos: Este conceito não foi mencionado em nenhum momento na apresentação transcrita, caracterizando uma omissão completa desse modelo de representação.

### 3. Matriz de Incidência
*   Pontos Positivos: O grupo apresentou e utilizou a matriz de incidência com elevação vetorial de massa. Eles exemplificaram de forma prática a aplicação dessa matriz utilizando o vértice XV104, demonstrando como ele funciona como um coletor que soma as vazões de três cilindros para validação do fluxo que segue para o chiller.
*   Pontos Negativos: Nenhum ponto negativo ou limitação sobre a matriz de incidência foi citado.

### 4. Algoritmos de Busca (BFS/DFS)
*   Pontos Positivos: 
    *   Busca em Largura (BFS): É utilizada de forma positiva para gerar frentes de onda quando um alarme é disparado, varrendo o grafo em camadas para encontrar o menor corte possível, isolando falhas com o menor número de válvulas e sem despressurizar o resto da planta.
    *   Busca em Profundidade (DFS): É aplicada para buscar arestas de retorno; caso identifique alguma, o sistema detecta uma recirculação não controlada de hidrogênio e dispara um alarme.
*   Pontos Negativos: Não foram apresentadas limitações ou dificuldades na execução desses algoritmos de busca.

### 5. Menor Caminho (Dijkstra)
*   Pontos Positivos: O algoritmo de Dijkstra ponderado foi integrado ao sistema SCADA em tempo real para otimização operacional. O sistema calcula rotas alternativas automaticamente (por exemplo, desviando do tanque 101 para o 102 caso um vazamento seja detectado). Além disso, se um tubo apresenta problemas, o sistema atribui peso infinito àquela aresta, impedindo dinamicamente que o Dijkstra trace rotas por ali.
*   Pontos Negativos: Não foram apontados pontos negativos na aplicação do Dijkstra, que se mostrou funcional dentro do ciclo de varredura.

### 6. Teste de Estresse em Malha Fechada
*   Pontos Positivos: O grupo garantiu um comportamento determinístico rigoroso, respeitando o ciclo de varredura do SCADA de 100 milissegundos (com o tempo de processamento dos algoritmos consumindo menos de 1 milissegundo). O ciclo de tempo detalha etapas de leitura (10 ms), ajuste de pesos e roteamento via Dijkstra.
*   Pontos Negativos: O termo específico "teste de estresse em malha fechada" não é detalhado ou formalmente discutido na apresentação, limitando-se a explicar o tempo de execução do ciclo de varredura e uma rápida menção final sobre simulação.

### 7. Problemas Eulerianos
*   Pontos Positivos: O problema foi aplicado na necessidade de passar uma sonda (robô) pelas tubulações (arestas) para verificar vazamentos causados pelo desgaste do hidrogênio.
*   Pontos Negativos (e solução): Inicialmente, o grafo não era euleriano porque nem todos os vértices tinham grau par (o vértice inicial tinha grau 3 e o final tinha grau 1). Como ponto positivo, o grupo identificou essa limitação da teoria de Euler e a contornou propondo a adição da própria base do robô ao grafo, tornando todos os graus pares e viabilizando o algoritmo.

### 8. Problemas Hamiltonianos
*   Pontos Positivos: O problema do Caixeiro Viajante (TSP) foi aplicado para planejar a rota de inspeção das estações/tanques (vértices) com a menor distância possível.
*   Pontos Negativos (e solução): A tentativa inicial utilizando uma solução gulosa (vizinho mais próximo) falhou ao gerar cruzamentos de caminhos (especificamente ao passar pelo tanque 3). Como ponto positivo, o grupo corrigiu esse problema aplicando o algoritmo heurístico 2-OPT, que eliminou os cruzamentos e gerou uma economia física de 20 metros no trajeto.

### 9. Simulador
*   Pontos Positivos: A simulação é mencionada brevemente ao final da apresentação como parte do escopo validado.
*   Pontos Negativos: Não há qualquer detalhamento sobre o simulador utilizado, como ele foi construído, quais dados foram inseridos ou como os resultados visuais foram gerados, sendo apenas citado de passagem.
