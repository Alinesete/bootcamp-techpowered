
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

console.log("○~~~•~~•~~~○ Activity ○~~~•~~•~~~○");
console.log("What is the max and the min?");
console.log("");
const array = [5,7,123,5723,5724,3714,0,32,4];
calcular(array);

function calcular(array){

    let max = array[0];
    let min = array[0];

        for(i = 0; i < array.length; i++){
            if(array[i] < min){
                min = array[i];
            }
            if(array[i] > max){
                max = array[i]
            }
        }
    console.log(`The biggest number was ${max} and the lowest was ${min}`)
}