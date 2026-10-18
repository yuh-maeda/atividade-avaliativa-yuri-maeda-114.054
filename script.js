//Exercício 1
console.log("Exercício 1");
console.log("Meu primeiro script foi executado!");

//Exercício 2
// Comentário
console.log("Exercício 2");
console.log("TechStore produtos de ultima geração");
console.log(1+1);
console.log("A atividade começou");

//Exercício 3
console.log("Exercício 3");
const nome = "Yuri";
const curso = "Eng. Software";
let idade = 18;
idade += 1;
console.log(nome, curso, idade);

//Exercício 4
console.log("Exercício 4");
var teste = "teste de variável com var";
console.log(teste);

//Exercício 5
console.log("Exercício 5");
const produto = "Notebook Pro 15"; // string
const estoque = 12; // number
const lojaAberta = true; // boolean
const compras = null; // null

console.log(produto);
console.log(estoque);
console.log(lojaAberta);
console.log(compras);

//Exercício 6
console.log("Exercício 6");
const precoFone = 899;
const precoAntigoFone = 1099;
const precoCapa = 79.9;
const quantidadeCapas = 2;

const diferencaFone = precoAntigoFone - precoFone;
const totalCapas = precoCapa * quantidadeCapas;
const somaPedido = precoFone + totalCapas;
const valorParcela = somaPedido / 10;
const foneCapa = precoFone >= precoCapa;

console.log(`Diferenca no preco fone: R$ ${diferencaFone}`);
console.log(`Total das capas: R$ ${totalCapas}`);
console.log(`Soma do pedido: R$ ${somaPedido}`);
console.log(`Parcela em 10x: R$ ${valorParcela}`);
console.log(`O fone é mais caro que a capa? ${foneCapa}`);

//Exercício 7
console.log("Exercício 7");
const nomeLoja = "TechStore";
const produtoDestaque = "Notebook Pro 15";
const estoqueDisponivel = 100;
const mensagem = `Bem-vindo à ${nomeLoja}! O ${produtoDestaque} tem ${estoqueDisponivel} unidades em estoque.`;
console.log(mensagem);

//Exercício 8
console.log("Exercício 8");
let valorDoPedido = 200;
let minFreteGratis = 100;

if (valorDoPedido >= minFreteGratis) {
  console.log(`Pedido de R$ ${valorDoPedido}: frete grátis!`);
} else {
  console.log(`Pedido de R$ ${valorDoPedido}: valor mínimo para frete grátis R$ ${minFreteGratis}.`);
}

//Exercício 10
console.log("Exercício 10");
const produtoPedido = "Capa Protetora";
const precoUnitario = 79.9;
const quantidadePedido = 1;
let fretePedido = 0;

const subtotalPedido = precoUnitario * quantidadePedido;

if (subtotalPedido >= minFreteGratis) {
  fretePedido = 0;
  console.log("Frete grátis");
} else {
  fretePedido = 120;
  console.log(`Frete pago: faltaram R$ ${(minFreteGratis - subtotalPedido).toFixed(2)} para o frete grátis`);
}

const totalFinal = subtotalPedido + fretePedido;
console.log(`Pedido: ${quantidadePedido}x ${produtoPedido}. Subtotal: R$ ${subtotalPedido}. Frete: R$ ${fretePedido}. Total: R$ ${totalFinal}.`);