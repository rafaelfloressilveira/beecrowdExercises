// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

// Exemplos de Entrada: JOAO, 500.00, 1230.30
// Exemplos de Saída: TOTAL = R$ 684.54

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var nome = (lines.shift());
var comissao = 0.15;
var salfix = (lines.shift());
var tvendas = (lines.shift());
var salario = salfix + (tvendas * comissao);
 
console.log("TOTAL = R$ " + parseFloat(salario.toFixed(2)));

