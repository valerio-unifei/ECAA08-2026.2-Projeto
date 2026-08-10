# Mapeamento de Variáveis de Processo para Proposições Lógicas

Na automação industrial (norma ISA-5.1), instrumentos e atuadores emitem e recebem sinais discretos (binários: $0$ = Falso / $1$ = Verdadeiro). 

![Industria de Fertilizante](/etapa-01-logica/Industria_fertilizantes.png)

Abaixo, as variáveis da planta de fertilizantes são discretizadas em proposições lógicas:

## Setor 100: Síntese e Neutralização ($\text{NH}_3$ + Ácido Fosfórico / Pre-Neutralizer)

| Tag Instrumento | Tipo de Dispositivo | Variável Física | Proposição Lógica | Estado 1 |
| --- | --- | --- | --- | --- |
| **PT-101** | Transmissor Pressão | Pressão Reator | $p_1$ | Pressão excede limite seguro ($P > 180\text{ bar}$) |
| **TT-101** | Transmissor Temp. | Temp. Reator | $t_1$ | Temperatura excede limite crítico ($T > 200^\circ\text{C}$) |
| **AT-101** | Detector de Gás | Concentração $\text{NH}_3$ | $g_1$ | Vazamento de amônia detectado na área ($C > 25\text{ ppm}$) |
| **LT-101** | Transmissor Nível | Nível Tanque Slurry | $l_{low}$ | Nível abaixo do mínimo de cobertura das pás |
| **LT-101** | Transmissor Nível | Nível Tanque Slurry | $l_{high}$ | Nível acima do limite de transbordamento |
| **ESD-100** | Botão Físico | Segurança Manual | $e_1$ | Parada de emergência acionada pelo operador |
| **XV-101** | Válvula Corte Rápido | Alimentação $\text{NH}_3$ | $v_1$ | Válvula de segurança de $\text{NH}_3$ ABERTA |
| **XV-102** | Válvula Corte Rápido | Alimentação $\text{H}_3\text{PO}_4$ | $v_2$ | Válvula de segurança de Ácido ABERTA |
| **AG-101** | Inversor / Contator | Agitador do Reator | $m_1$ | Agitador do reator LIGADO e em rotação nominal |
| **ALM-101** | Sinaleiro / Buzzer | Alarme Geral | $a_1$ | Sistema de alarme e evacuação ATIVADO |

## Setor 200: Granulação e Secagem (Complexo NPK)

| Tag Instrumento | Tipo de Dispositivo | Variável Física | Proposição Lógica | Estado 1 |
| --- | --- | --- | --- | --- |
| **FS-201** | Chave de Fluxo | Ar do Secador Rotativo | $f_1$ | Fluxo de ar exaustor OK (acima do mínimo) |
| **TS-201** | Termostato | Chama do Queimador | $c_1$ | Chama do queimador do secador DETECTADA |
| **M-201** | Contator do Motor | Tambor Granulador | $m_2$ | Motor do granulador LIGADO |
| **XV-201** | Válvula Proporcional | Injeção Slurry quentes | $v_3$ | Injeção de lama de reação no granulador ABERTA |
