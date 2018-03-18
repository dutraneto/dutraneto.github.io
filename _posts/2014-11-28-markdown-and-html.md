---
layout: post
title: Markdown and HTML
---

Jekyll supports the use of [Markdown](http://daringfireball.net/projects/markdown/syntax) with inline HTML tags which makes it easier to quickly write posts with Jekyll, without having to worry too much about text formatting. A sample of the formatting follows.

Tables have also been extended from Markdown:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

Here's an example of an image, which is included using Markdown:

![Geometric pattern with fading gradient]({{ site.baseurl }}/assets/img/sample_feature_img_2.png)

Highlighting for code in Jekyll is done using Pygments or Rouge. This theme makes use of Rouge by default.

{% highlight js %}
// count to ten
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// count to twenty
var j = 0;
while (j < 20) {
    j++;
    console.log(j);
}
{% endhighlight %}

{% highlight python %}
"""Referências são importantes para compreendermos como
 os argumentos são passados às funções.
Quando um método/função é declarado e seus argumentos são
passados, seus valores são copiados para atributos por meio
de parâmetros.
Para exemplificar melhor o nosso estudo, usaremos listas
e usaremos uma referência para o parâmetro
"""

# Exemplo 1: cópia de referência

"""
In [1]: ham = ['A', 'B', 'C', 'D', 'E']
In [2]: id(ham)
Out[2]: 4585570824
In [3]: cheese = ham
In [4]: cheese
Out[4]: ['A', 'B', 'C', 'D', 'E']
In [5]: cheese[1] = 36
In [6]: cheese
Out[6]: ['A', 36, 'C', 'D', 'E']
In [7]: ham
Out[7]: ['A', 36, 'C', 'D', 'E']
In [8]: id(cheese)
Out[8]: 4585570824
In [9]: id(ham)
Out[9]: 4585570824
Dessa forma podemos concluir que o atributo/variável 'cheese'
apenas apontou para a referência da variável 'ham'
é tanto que as duas variáveis possuem o mesmo id.
"""

# Exemplo 2: duas listas distintas

"""
In [10]: ham = ['A', 'B', 'C', 'D', 'E']
In [11]: id(ham)
Out[11]: 4584690568
In [12]: cheese = ham[:]
In [13]: cheese
Out[13]: ['A', 'B', 'C', 'D', 'E']
In [14]: ham
Out[14]: ['A', 'B', 'C', 'D', 'E']
In [15]: cheese[1] = 36
In [16]: cheese
Out[16]: ['A', 36, 'C', 'D', 'E']
In [17]: ham
Out[17]: ['A', 'B', 'C', 'D', 'E']
In [18]: id(cheese)
Out[18]: 4584625736
In [19]: id(ham)
Out[19]: 4584690568
Nesse exemplo, veificamos que na linha 12, a variável 'cheese'
copiou o conteúdo de 'ham' usando um 'slice-assign' [:]
o que cria um novo id para a variável e quando modificamos
o valor da lista, 'ham' continuou intacto.
"""

# Exemplo 3: slice-assign utilizando o método copy do módulo
# copy

"""
In [20]: import copy
In [21]: ham = ['A', 'B', 'C', 'D', 'E']
In [22]: id(ham)
Out[22]: 4584640776
In [23]: cheese = copy.copy(ham)
In [24]: cheese
Out[24]: ['A', 'B', 'C', 'D', 'E']
In [25]: cheese[3] = 29
In [26]: cheese
Out[26]: ['A', 'B', 'C', 29, 'E']
In [27]: ham
Out[27]: ['A', 'B', 'C', 'D', 'E']
In [28]: id(cheese)
Out[28]: 4584699144
Novamente, podemos perceber que a lista 'ham' pernameceu
inalterada e que o módulo copy é utilizado para realizar
um slice-assign de uma forma mais pythonica
(pelo menos ao meu ver).
Lembre-se: 'Explicit is better than implicit'.
"""
{% endhighlight %}



Type Theme uses KaTeX to display maths. Equations such as $$S_n = a \times \frac{1-r^n}{1-r}$$ can be displayed inline.

Alternatively, they can be shown on a new line:

$$ f(x) = \int \frac{2x^2+4x+6}{x-2} $$
