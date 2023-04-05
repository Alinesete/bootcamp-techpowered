/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

console.log("○~~~•~~•~~~○ Activity ○~~~•~~•~~~○");
console.log("Trip cost");
console.log("");

const gasPrice = 3.49;
const gasCost = 0.1;
let distance = 700;
let final = (distance * gasCost) * gasPrice;

console.log(`The trip will cost R$${final.toFixed(2)} in gas`);