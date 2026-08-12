import itertools
import random
from collections import OrderedDict

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import pandas as pd

# Variáveis do processo (baseadas no mapeamento do documento)
VARIAVEIS = [
    'p1', 't1', 'g1', 'l_low', 'l_high', 'e1',
    'v1', 'v2', 'm1', 'a1',
    'f1', 'c1', 'm2', 'v3'
]


def estado_aleatorio():
    return {v: random.choice([True, False]) for v in VARIAVEIS}


ESTADOS = [
    dict(zip(VARIAVEIS, valores))
    for valores in itertools.product([False, True], repeat=len(VARIAVEIS))
]


def F(vars_):
    return vars_['p1'] or vars_['t1'] or vars_['g1'] or vars_['e1']


def intertravamento_reator(vars_):
    return (not F(vars_)) or (not vars_['v1'] and not vars_['v2'] and vars_['a1'])


def P_open(vars_):
    return (
        (not vars_['p1'])
        and (not vars_['t1'])
        and (not vars_['g1'])
        and (not vars_['l_high'])
        and vars_['m1']
    )


def permissivo_partida(vars_):
    return (not vars_['v1']) or P_open(vars_)


def desligamento_agitador(vars_):
    return (not (vars_['l_low'] or vars_['e1'])) or (not vars_['m1'])


def bloqueio_granulacao(vars_):
    return (not vars_['v3']) or (vars_['m2'] and vars_['c1'] and vars_['f1'])


def risco_estado(vars_):
    return vars_['p1'] and vars_['v1']


def regra_segurança(vars_):
    return (not vars_['p1']) or (not vars_['v1'])


def prova_contradicao(vars_):
    return risco_estado(vars_) and regra_segurança(vars_)


def tautologia_clasica(vars_):
    return vars_['p1'] or (not vars_['p1'])


def contradicao_clasica(vars_):
    return vars_['p1'] and (not vars_['p1'])


EXPRESSOES = OrderedDict([
    ('A. Intertravamento de trip do reator', intertravamento_reator),
    ('B. Permissivo de partida do reator', permissivo_partida),
    ('C. Desligamento do agitador', desligamento_agitador),
    ('D. Bloqueio da granulação', bloqueio_granulacao),
    ('Risco: p1 ∧ v1', risco_estado),
    ('Regra de segurança: p1 → ¬v1', regra_segurança),
    ('Prova de segurança: (p1 ∧ v1) ∧ (p1 → ¬v1)', prova_contradicao),
    ('Tautologia clássica: p1 ∨ ¬p1', tautologia_clasica),
    ('Contradição clássica: p1 ∧ ¬p1', contradicao_clasica),
])


def classificar(valores):
    if all(valores):
        return 'Tautologia'
    if not any(valores):
        return 'Contradição'
    return 'Contingente'


def resumo_expressoes():
    linhas = []
    for nome, fn in EXPRESSOES.items():
        valores = [fn(est) for est in ESTADOS]
        linhas.append({
            'Expressão': nome,
            'Verdadeiras': sum(valores),
            'Falsas': len(valores) - sum(valores),
            'Classificação': classificar(valores),
        })
    return pd.DataFrame(linhas)


def tabela_verdade_selecionada(colunas):
    rows = []
    for est in ESTADOS:
        linha = {v: est[v] for v in VARIAVEIS}
        for nome, fn in EXPRESSOES.items():
            if nome in colunas:
                linha[nome] = fn(est)
        rows.append(linha)
    return pd.DataFrame(rows)


def gerar_grafico_resumo(df):
    contagem = df['Classificação'].value_counts().reindex(['Tautologia', 'Contradição', 'Contingente'], fill_value=0)
    fig, ax = plt.subplots(figsize=(8, 5))
    contagem.plot(kind='bar', ax=ax, color=['#4CAF50', '#F44336', '#2196F3'])
    ax.set_title('Classificação lógica das expressões')
    ax.set_xlabel('Classificação')
    ax.set_ylabel('Quantidade')
    ax.set_ylim(0, max(contagem.max() + 1, 2))
    for container in ax.containers:
        ax.bar_label(container, fmt='%.0f', padding=3)
    plt.tight_layout()
    plt.savefig('resumo_classificacao_logica.png', dpi=200)
    plt.close(fig)


def main():
    print('=== Resumo das expressões lógicas ===')
    resumo = resumo_expressoes()
    print(resumo.to_string(index=False))

    print('\n=== Tabela-verdade parcial (seleção das expressões críticas) ===')
    colunas_criticas = [
        'Risco: p1 ∧ v1',
        'Regra de segurança: p1 → ¬v1',
        'Prova de segurança: (p1 ∧ v1) ∧ (p1 → ¬v1)',
    ]
    tabela = tabela_verdade_selecionada(colunas_criticas)
    print(tabela.head(10).to_string(index=False))

    tabela_completa = tabela_verdade_selecionada(list(EXPRESSOES.keys()))
    tabela_completa.to_csv('tabela_verdade_completa.csv', index=False)
    print('\nTabela completa salva em tabela_verdade_completa.csv')

    resumo.to_csv('resumo_expressoes.csv', index=False)
    print('Resumo salvo em resumo_expressoes.csv')

    gerar_grafico_resumo(resumo)
    print('Gráfico salvo em resumo_classificacao_logica.png')

    print('\n=== Exemplo de estados aleatórios ===')
    for i in range(5):
        estado = estado_aleatorio()
        print(f'Estado {i+1}: {estado}')
        for nome, fn in EXPRESSOES.items():
            print(f'  {nome}: {fn(estado)}')
        print()


if __name__ == '__main__':
    main()
