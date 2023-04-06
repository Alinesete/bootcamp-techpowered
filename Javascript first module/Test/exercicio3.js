
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

console.log("○~~~•~~•~~~○ Activity ○~~~•~~•~~~○");
console.log("Salary calculator");
console.log("");

let grossPay = 2000;
let benefit = 250;
calcPay(grossPay, benefit);

function calcPay(grossPay, benefit){
    let percentual;

    if(grossPay <= 1100){
        percentual = 5/100;
    }
    else if(grossPay <= 2500 && grossPay > 1100){
        percentual = 10/100;
    }
    else{
        percentual = 15/100;
    }

    let salary = grossPay - (grossPay * percentual);
    salary = salary + benefit;

    console.log(`The salary will be R$${salary.toFixed(2)}`);
}