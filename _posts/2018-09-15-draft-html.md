---
layout: post
author: "DutraNeto"
title: "Utilizando o Método deepcopy em Python"
subtitle: "Como realizar uma cópia profunda e construir objetos recursivamente com o deepcopy."
tags: [dev, html, lists, methods]
code: 'h' 
date: 2018-04-21 11:51:23
feature-img: "assets/img/img_post/lego.png"

---

## Introdução

<br/>

Ainda continuando os nossos estudos sobre referências e métodos built-ins em [Python](https://www.python.org/), iremos exemplificar um caso de estudo do método deepcopy(), encontrado no módulo copy.

No post passado, exploramos o método copy(), o qual realiza uma cópia superficial (shallow copy), ou seja, as instruções passadas apenas criam ligações entre um destino e um objeto. 
Para coleções que são mutáveis ou contêm itens mutáveis, às vezes é necessária uma cópia para que uma lista copiada de outra possa ser alterada, sem alterar a primeira, sendo necessária uma deep copy.
Vejamos no exemplo abaixo:

<br/>

```python
>>> # Exemplo 1: uma lista a partir de outra com o método copy()
>>> import copy
>>> first_list = ['a', 'b', [1, 2, 3, 4], 'c', ['t', 'e']]
>>> id(first_list)
4434654024
>>> # criando um segunda lista
>>> second_list = copy.copy(first_list) # shallow copy
>>> second_list
['a', 'b', [1, 2, 3, 4], 'c', ['t', 'e']]
>>>id(second_list)
4436657800
>>> second_list is first_list
False
```
<br/>

Até agora tudo bem. Desta forma, poderemos remover ou inserir objetos em 'second_list', sem alterar 'first_list'...e a resposta é: Depende!
Vejamos:

<br/>

```python
>>> # Exemplo 2: removendo um simples objeto da lista
>>> # iremos remover o valor "b" que está no índice 1
>>> del second_list[1]
>>> second_list
['a', [1, 2, 3, 4], 'c', ['t', 'e']] # beleza!
>>> first_list
['a', 'b', [1, 2, 3, 4], 'c', ['t', 'e']] # show!
>>> second_list == first_list
False
>>> # segundo teste
>>> # remover um item da lista dentro de 'second_list'
>>> del second_list[1][-1] # removemos o valor 4
>>> second_list
['a', [1, 2, 3], 'c', ['t', 'e']] # maravilha!
>>> # first_list permanece inalterado?
>>>first_list
['a', 'b', [1, 2, 3], 'c', ['t', 'e']] # wtf!
```

<br/>

Agora lascou, fiquei cabreira. Cadê o 4 que tava aqui!
Pois é, a cópia rasa ainda permite que o objeto inicial seja alterado por meio da sua cópia.

<br/>

### Terceiro exemplo, realizando uma cópia utilizando o método deepcopy()

Agora, utilizaremos o método deepcopy() que segundo a [documentação](https://docs.python.org/3/library/copy.html?highlight=deepcopy):

> A deep copy constructs a new compound object and then, recursively, inserts copies into it of the objects found in the original.

<br/>

```python
>>> # Exemplo 3: uma cópia profunda com deepcopy()
>>> import copy   # importamos o módulo copy
>>> first_list = ['a', 'b', [1, 2, 3, 4], 'c', ['t', 'e']]
>>> second_list = copy.deepcopy(first_list)
>>> # removeremos o mesmo valor 4
>>> del second_list[2][-1]
>>> second_list
['a', 'b', [1, 2, 3], 'c', ['t', 'e']]
>>> first_list
['a', 'b', [1, 2, 3, 4], 'c', ['t', 'e']]
>>> # Done!
```

<br/>

## Conclusão

<br/>

Percebemos claramente o papel que realiza uma shallow copy e uma deep copy, com a diferença de que o segundo “copia” funções e classes (rasas e profundas), retornando o objeto original inalterado.
#### Ainda há muito a ser explorado em listas. Nos próximos posts, continuaremos os nossos estudos, aprendendo o papel de outros métodos utilizados em listas 💚.

<br/>

> #### _'Simple is better than complex.'_

