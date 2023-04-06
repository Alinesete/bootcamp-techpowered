/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

console.log("○~~~•~~•~~~○ Activity 1 ○~~~•~~•~~~○");
console.log("How much will cost the trip?");
console.log("");

class car{
    constructor(brand, color, cost){
        this.brand = brand;
        this.color = color;
        this.cost = cost;
    }

    calcCost(gasPrice, distance){
        let final;
        final = (distance * this.cost) * gasPrice;
        return final.toFixed(2);
    }
}

let mine = new car('celta', 'blue', 0.1);
console.log(`The trip will cost R$${mine.calcCost(4.65,100)}`);
console.log("");

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

console.log("○~~~•~~•~~~○ Activity 2 ○~~~•~~•~~~○");
console.log("What is person's BMI?");
console.log("");

class person{
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    calcImc(){
        let bmi = this.weight / (Math.pow(this.height,2));
        return bmi.toFixed(2);
    }
}

let person1 = new person('Laila', '55', '1.63');
console.log(`${person1.name}'s BMI is ${person1.calcImc()}`)