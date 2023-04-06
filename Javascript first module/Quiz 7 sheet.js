/*
1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20
*/

console.log("○~~~•~~•~~~○ Activity 1 ○~~~•~~•~~~○");
console.log("Multiplication table");
console.log("");
const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
let input = 7;

for (i = 0; i < numbers.length; i ++) {
    console.log(`${input} x ${
        numbers[i]
    } = ${
        input * numbers[i]
    }`);
}

console.log("");

/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

console.log("○~~~•~~•~~~○ Activity 2 ○~~~•~~•~~~○");
console.log("What is the max and the min?");
console.log("");
const array = [
    5,
    7,
    123,
    5723,
    5724,
    3714,
    0,
    32,
    4
];
let max = array[0];
let min = array[0];

for (i = 0; i < array.length; i ++) {
    if (array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i]
    }
}
console.log(`The biggest number was ${max} and the lowest was ${min}`)

/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/
