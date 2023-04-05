/*
1) Crie um programa que dado um número imprima a sua tabuada.
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
    console.log(`${input} x ${numbers[i]} = ${input * numbers[i]}`);
}

console.log("");


/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

console.log("○~~~•~~•~~~○ Activity 2 ○~~~•~~•~~~○");
console.log("Even numbers in array");
console.log("");

const numList = [
    1,
    9,
    10,
    12,
    86,
    32,
    544,
    658
];

for (i = 0; i < numList.length; i ++) {
    if (numList[i] % 2 == 0) {
        console.log(`The number ${numList[i]} is even!`);
    }
}

console.log("");

/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

console.log("○~~~•~~•~~~○ Activity 3 ○~~~•~~•~~~○");
console.log("Names that start with __");
console.log("");

const nameList = [
    'Lucia',
    'Emilly',
    'Laissa',
    'Layla',
    'Monique'
];
let letter = 'L';

for (i = 0; i < nameList.length; i ++) {
    if (nameList[i].startsWith(letter)) {
        console.log(`The name ${nameList[i]} starts with ${letter}`);
    }
}

console.log("");

/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/

console.log("○~~~•~~•~~~○ Activity 4 ○~~~•~~•~~~○");
console.log("Even numbers between 10 and 50");
console.log("");

const evenNumbers = [];

for (i = 10; i <= 50; i ++) {
    if (i % 2 == 0) {
        evenNumbers.push(i);
    }
}

console.log(evenNumbers);
console.log("");

/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

console.log("○~~~•~~•~~~○ Activity 5 ○~~~•~~•~~~○");
console.log("Who will be in summer classes?");
console.log("");

const grades = {'Maya' : 2, 'Julia' : 7, 'Marco' : 3, 'Gabe' : 8, 'Riven' : 10, 'Leo' : 4};

for (const name in grades) {
    if (grades[name] < 5) {
        console.log(`${name} scored ${grades[name]}, they will be in the summer classes`);
    }
  }

console.log("");

/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

console.log("○~~~•~~•~~~○ Activity 6 ○~~~•~~•~~~○");
console.log("What was the best average?");
console.log("");


let best = 0;
let bestName = "";

for (const name in grades) {
    if (grades[name] > best) {
        best = grades[name];
        bestName = name;
    }
  }

console.log(`${bestName} scored ${best}, they were the best average in the class!`);