# Aula 02: Mapeamento de Variáveis de Processo para Proposições Lógicas

## 1. Fundamentos da Discretização de Sinais e Proposições Booleanas

Na automação de processos industriais contínuos (conforme a norma **ISA-5.1**), a instrumentação de campo transmite grandezas físicas através de sinais analógicos de $4 \text{ a } 20\text{ mA}$ (ou protocolos digitais como HART, Modbus e Profibus-PA).

Para a aplicação de motores de inferência lógica e matrizes de intertravamento de segurança (*Safety Instrumented Systems - SIS* / IEC 61511), cada sinal contínuo $x(t) \in \mathbb{R}$ é mapeado formalmente em uma **proposição lógica atômica** $p \in \{0, 1\}$ através de funções características definidas por limites operacionais:

$$\chi_{\text{High}}(x) = \begin{cases} 1 \text{ (Verdadeiro)}, & \text{se } x \ge L_{\text{critico\_high}} \\ 0 \text{ (Falso)}, & \text{se } x < L_{\text{critico\_high}} \end{cases}$$

$$\chi_{\text{Low}}(x) = \begin{cases} 1 \text{ (Verdadeiro)}, & \text{se } x \le L_{\text{critico\_low}} \\ 0 \text{ (Falso)}, & \text{se } x > L_{\text{critico\_low}} \end{cases}$$

---

## 2. Catálogo Oficial de Tags e Proposições Lógicas da Planta de Fertilizantes

![Industria de Fertilizante](/etapa-01-logica/Industria_fertilizantes.png)

### Setor 100: Reação de Neutralização ($\text{NH}_3 + \text{H}_3\text{PO}_4 \rightarrow \text{MAP/DAP}$)

| Tag ISA-5.1 | Tipo de Instrumento | Faixa 4-20mA | Proposição | Limite Operacional | Estado Lógico = 1 |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **PT-101** | Transmissor de Pressão | $0 \dots 250\text{ bar}$ | $p_1$ | $P \ge 180\text{ bar}$ | Sobrepressão crítica no reator |
| **TT-101** | Transmissor de Temp. | $0 \dots 300^\circ\text{C}$ | $t_1$ | $T \ge 200^\circ\text{C}$ | Sobretemperatura crítica (risco de polimerização) |
| **AT-101** | Detector de Gás Tóxico | $0 \dots 100\text{ ppm}$ | $g_1$ | $C_{\text{NH}_3} \ge 25\text{ ppm}$ | Fuga tóxica de amônia na atmosfera |
| **LT-101A** | Transmissor de Nível | $0 \dots 100\%$ | $l_{\text{high}}$ | $Nível \ge 90\%$ | Risco de transbordamento de slurry |
| **LT-101B** | Transmissor de Nível | $0 \dots 100\%$ | $l_{\text{low}}$ | $Nível \le 20\%$ | Nível abaixo das pás do agitador (risco mecânico) |
| **ESD-100** | Botão Parada Emergência | Digital (0/1) | $e_1$ | Contato NF Aberto | Parada de emergência acionada pelo operador |
| **XV-101** | Válvula de Corte $\text{NH}_3$ | Digital (0/1) | $v_1$ | Aberta = 1 / Fechada = 0 | Válvula de alimentação de amônia ABERTA |
| **XV-102** | Válvula de Corte $\text{H}_3\text{PO}_4$ | Digital (0/1) | $v_2$ | Aberta = 1 / Fechada = 0 | Válvula de alimentação de ácido ABERTA |
| **AG-101** | Motor do Agitador | Digital (0/1) | $m_1$ | Ligado = 1 / Desligado = 0 | Agitador do reator em rotação nominal |
| **ALM-101** | Sirene / Alarme Geral | Digital (0/1) | $a_1$ | Ativado = 1 / Silenciado = 0 | Alarme audiovisual de emergência ATIVADO |

### Setor 200: Granulação e Secagem Térmica (Linha NPK)

| Tag ISA-5.1 | Tipo de Instrumento | Faixa 4-20mA | Proposição | Limite Operacional | Estado Lógico = 1 |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **FS-201** | Transmissor de Vazão de Ar | $0 \dots 2000\text{ m}^3/\text{h}$ | $f_1$ | Vazão $\ge 600\text{ m}^3/\text{h}$ | Fluxo de ar exaustor OK para combustão |
| **TS-201** | Termostato / Sensor Óptico | Digital (0/1) | $c_1$ | Chama detectada = 1 | Chama do queimador do secador DETECTADA |
| **M-201** | Contator do Granulador | Digital (0/1) | $m_2$ | Ligado = 1 | Tambor rotativo granulador LIGADO |
| **XV-201** | Válvula Injeção Slurry | Digital (0/1) | $v_3$ | Aberta = 1 | Injeção de lama fosfatada no granulador ABERTA |

---

## 3. Entregável da Aula 02

* **Módulo de Mapeamento e Validação de Tags em Python:** Construção de validador de consistência, conversão de sinais 4-20mA e mapeamento biunívoco com a tabela proposicional.
