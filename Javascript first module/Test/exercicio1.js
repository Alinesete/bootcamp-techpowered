// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

console.log("○~~~•~~•~~~○ Activity ○~~~•~~•~~~○");
console.log("Did you pass?");
console.log("");
let gradeAvg;
gradeAvg = 5.5;

console.log(calcFinal(gradeAvg));


function calcFinal (gradeavg){
    if(gradeAvg >= 7){
        answer = "You scored ${gradeAvg}, you rock!!!!!";
    }
    else if(gradeAvg < 7 && gradeAvg >= 5){
        answer = `You scored ${gradeAvg}, you are in summer classes :)`;
    }
    else if(gradeAvg < 5){
        answer = "You scored ${gradeAvg}, too bad D: You reproved!";
    }
    return answer;
}