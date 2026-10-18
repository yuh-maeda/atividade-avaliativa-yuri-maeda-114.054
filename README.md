# TechStore - E-commerce de Tecnologia

## Nome e tema do projeto

**TechStore** — página principal de uma loja virtual fictícia de produtos de tecnologia (smartphones, notebooks e acessórios).

O tema da interface e o JavaScript estão ligados: os exercícios do Console calculam preços, parcelas e frete de produtos da própria loja.

## Estrutura do projeto

```text
TechStore/
├── assets/      → imagens dos produtos e ícone da aba (icon.png)
├── index.html   → interface com Bootstrap via CDN
├── script.js    → exercícios de JavaScript exibidos no Console
└── README.md    → documentação
```

Não há arquivo CSS próprio: toda a estilização usa classes do Bootstrap.

## Como ver os resultados no Console

1. Abra o `index.html` no navegador.
2. Pressione `F12` (ou clique com o botão direito → **Inspecionar**) e abra a aba **Console**.
3. Cada exercício aparece com um título (`Exercício 1`, `Exercício 2` etc.) seguido dos seus resultados.

| Exercício | O que aparece no Console |
|---|---|
| 1 | `Meu primeiro script foi executado!` |
| 2 | Frase do projeto, o resultado de `1 + 1` (2) e `A atividade começou` |
| 3 | Nome, curso e idade, com a idade já alterada de 18 para 19 |
| 4 | O valor da variável `var teste` |
| 5 | Uma string, um number, um boolean e `null` |
| 6 | Diferença de preço do fone, total das capas, soma do pedido, parcela em 10x e se o fone é mais caro que a capa |
| 7 | Mensagem de boas-vindas montada com 3 variáveis |
| 8 | Se o pedido de R$ 200 tem frete grátis |
| 10 | Pedido de 1 capa protetora com subtotal, frete e total |

O exercício 9 é a interface criada no `index.html`.

## Explicação da interface criada

A página `index.html` foi feita somente com classes do **Bootstrap 5.3 via CDN** (mais os **Bootstrap Icons**), sem `style.css`. O tema escuro em **preto e azul** vem do atributo `data-bs-theme="dark"` na tag `<html>`, junto com classes como `bg-black`, `bg-dark`, `text-primary` e `border-primary`.

A ordem das seções é:

1. **Navbar** — nome do projeto (TechStore) e links para as seções da página.
2. **Hero (seção inicial)** — título, descrição, `badge` "Novidades toda semana", botão "Ver Ofertas", números da loja e um carrossel com três produtos em destaque.
3. **Vantagens** — três `card`s (frete grátis, 10x sem juros e garantia), cada um com ícone, título, texto e `badge`.
4. **Produtos** — seis `card`s com foto, `badge`, nome, descrição, preço e botão "Comprar" (apenas visual).
5. **FAQ** — perguntas frequentes em um accordion.
6. **Footer** — sobre a loja, links rápidos, contato e redes sociais.

As fotos dos produtos ficam na pasta `assets/`. Como elas têm tamanhos e formatos diferentes (algumas na vertical, outras na horizontal), cada imagem fica dentro de um `ratio ratio-4x3` com a classe `object-fit-cover`. Assim todas aparecem no mesmo tamanho, sem distorcer.

O ícone da aba do navegador (`assets/icon.png`) é ligado no `<head>` com `<link rel="icon">`.

O layout é responsivo com `container`, `row` e `col`: os cards ocupam 1 coluna no celular (`col-12`), 2 no tablet (`col-sm-6`) e 3 ou 4 no desktop (`col-lg-*`).

O `script.js` é conectado no final do `index.html` com `<script src="script.js"></script>`. O menu, o carrossel, o fechamento do alert e o FAQ funcionam com o JavaScript do próprio Bootstrap (CDN), sem código meu.

## Componentes Bootstrap utilizados

| Componente | Classes principais | Onde |
|---|---|---|
| Navbar | `navbar`, `navbar-expand-lg`, `sticky-top`, `navbar-brand`, `navbar-toggler`, `collapse`, `nav-link` | Topo da página |
| Grid | `container`, `row`, `col-*`, `g-3`, `g-4`, `justify-content-center` | Layout de todas as seções |
| Card | `card`, `card-body`, `card-title`, `card-text`, `card-img-top`, `h-100`, `shadow` | Vantagens e Produtos |
| Badge | `badge`, `bg-success`, `bg-primary`, `bg-warning`, `bg-info`, `bg-danger`, `bg-secondary` | Hero, cards e alert |
| Button | `btn`, `btn-primary`, `btn-lg`, `btn-close` | Hero, cards de produtos e alert |
| Alert | `alert`, `alert-primary`, `alert-dismissible`, `fade`, `show` | Promoção |
| Footer | `bg-black`, `border-top`, `list-unstyled`, `link-primary` | Rodapé |
| Carousel | `carousel`, `carousel-fade`, `carousel-item`, `carousel-caption`, `carousel-indicators` | Hero |
| Accordion | `accordion`, `accordion-item`, `accordion-button`, `accordion-collapse` | FAQ |
| Imagens | `ratio`, `ratio-4x3`, `object-fit-cover`, `d-block`, `w-100` | Carrossel e cards de produtos |
| Utilitários | `d-flex`, `flex-column`, `mt-auto`, `text-center`, `fw-bold`, `py-5`, `text-decoration-line-through` | Espaçamento e alinhamento |

## Diferença entre `let`, `const` e `var`

| | `var` | `let` | `const` |
|---|---|---|---|
| Escopo | Função | Bloco `{ }` | Bloco `{ }` |
| Pode reatribuir? | Sim | Sim | Não |
| Pode redeclarar? | Sim | Não | Não |
| Uso antes da declaração | Vale `undefined` (hoisting) | Gera erro | Gera erro |

### Por que cada variável foi criada com `const` ou `let`

| Variável | Declaração | Motivo |
|---|---|---|
| `nome` (exercício 3) | `const` | O nome do aluno não muda. |
| `curso` (exercício 3) | `const` | O curso também é fixo. |
| `idade` (exercício 3) | `let` | A idade muda com o tempo; no código ela é alterada com `idade += 1` (de 18 para 19) e o novo valor é exibido. |
| `valorDoPedido` (exercício 8) | `let` | O valor é trocado para testar os dois caminhos do `if/else`. |
| `minFreteGratis` (exercício 8) | `let` | O valor mínimo para frete grátis pode ser ajustado pela loja (por exemplo, numa promoção). |
| `fretePedido` (exercício 10) | `let` | Começa em 0 e recebe um novo valor dentro do `if/else`. |

Os nomes de produtos, preços, quantidades e resultados de cálculos dos exercícios 5, 6, 7 e 10 usam `const`, porque depois de criados não mudam.

### Por que a prática atual prioriza `let` e `const` (exercício 4)

A variável `teste` foi criada com `var` só para mostrar a forma antiga. Hoje se evita `var` porque:

- ela ignora blocos `{ }` (como os de `if`), então uma variável criada dentro de um bloco "vaza" para fora dele;
- pode ser redeclarada sem nenhum aviso, o que facilita sobrescrever um valor por engano;
- pode ser usada antes da linha em que foi declarada (vale `undefined`), escondendo erros.

`let` e `const` surgiram no ES6 (2015) para resolver esses problemas. A boa prática é usar `const` por padrão e `let` só quando o valor precisar ser reatribuído.

## Tipos de dados utilizados

| Tipo | Exemplo no código |
|---|---|
| String | `produto = "Notebook Pro 15"`, `nomeLoja = "TechStore"`, `nome = "Yuri"` |
| Number | `estoque = 12`, `idade = 18`, `precoCapa = 79.9` |
| Boolean | `lojaAberta = true` e `foneCapa` (resultado de `precoFone >= precoCapa`) |
| Null | `compras = null` (nenhuma compra feita ainda) |

## Operadores utilizados (exercício 6)

| Operador | Cálculo | Resultado |
|---|---|---|
| Subtração `-` | `precoAntigoFone - precoFone` | 200 de desconto no fone |
| Multiplicação `*` | `precoCapa * quantidadeCapas` | 159.8 por 2 capas |
| Soma `+` | `precoFone + totalCapas` | 1058.8 no pedido |
| Divisão `/` | `somaPedido / 10` | 105.88 por parcela |
| Comparação `>=` | `precoFone >= precoCapa` | `true` |

## Explicação da condição criada com `if/else`

### Exercício 8 — frete grátis

```js
let valorDoPedido = 200;
let minFreteGratis = 100;

if (valorDoPedido >= minFreteGratis) {
  console.log(`Pedido de R$ ${valorDoPedido}: frete grátis!`);
} else {
  console.log(`Pedido de R$ ${valorDoPedido}: valor mínimo para frete grátis R$ ${minFreteGratis}.`);
}
```

A condição verifica se o pedido chegou ao valor mínimo para ganhar frete grátis.

Testei os dois caminhos alterando o valor da variável:

| Valor de `valorDoPedido` | Caminho | Resultado no Console |
|---|---|---|
| `200` | verdadeiro (`if`) | `Pedido de R$ 200: frete grátis!` |
| `50` | falso (`else`) | `Pedido de R$ 50: valor mínimo para frete grátis R$ 100.` |

### Exercício 10 — desafio integrador

Um pedido de 1 capa protetora de R$ 79,90:

1. **Dados** com `const` (produto, preço e quantidade) e `let` (`fretePedido`);
2. **Cálculos**: subtotal (`precoUnitario * quantidadePedido`) e total (`subtotalPedido + fretePedido`);
3. **Decisão**: `if (subtotalPedido >= minFreteGratis)` define se o frete é grátis ou pago;
4. **Template literal** monta a mensagem final com todos os valores.

Resultado: o subtotal é R$ 79,90. Como é menor que R$ 100, o frete é pago e o Console mostra quanto faltou para o frete grátis (R$ 20,10). Com o frete de R$ 120, o total fica R$ 199,90.

## Maior dificuldade encontrada

Deixar todos os cards de produtos com a mesma altura e o botão "Comprar" sempre alinhado na parte de baixo, mesmo com descrições e fotos de tamanhos diferentes, sem usar CSS próprio.

## Como a dificuldade foi resolvida

Usei classes do Bootstrap:

- `h-100` no `card`, para todos os cards da linha terem a mesma altura;
- `d-flex flex-column` no `card-body`, para organizar o conteúdo em coluna;
- `mt-auto` no botão, que empurra o botão para o fim do card;
- `ratio ratio-4x3` com `object-fit-cover` nas fotos, para todas ocuparem o mesmo espaço.

Assim os cards ficaram alinhados em qualquer tamanho de tela, sem precisar de `style.css`.
