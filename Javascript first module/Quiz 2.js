/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

console.log("○~~~•~~•~~~○ Activity ○~~~•~~•~~~○");
console.log("Trip cost");
console.log("");

const etanol = 3.50;
const gas = 4.80;
const type ='etanol';
const cost = 0.1;
const distance = 600;
let final;

if(type === 'etanol'){
    final = (distance * cost) * etanol;
}
else if(type === 'gas'){
    final = (distance * cost) * gas;
}

console.log(`The trip will cost R$${final.toFixed(2)} in gas`);