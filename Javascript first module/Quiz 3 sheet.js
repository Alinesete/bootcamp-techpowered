/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

console.log("○~~~•~~•~~~○ Activity 1 ○~~~•~~•~~~○");
console.log("Grade calculator");
console.log("");
let gradeOne, gradeTwo, gradeThree, gradeAvg;

gradeOne = 6;
gradeTwo = 7;
gradeThree = 10;
gradeAvg = ( gradeOne + gradeTwo + gradeThree ) / 3;

console.log("The first grade was: "+gradeOne);
console.log("The second grade was: "+gradeTwo);
console.log("The third grade was: "+gradeThree);
console.log("The final average was: "+gradeAvg.toFixed(1));
console.log("");

if(gradeAvg >= 7){
    console.log("You rock!!!!!")
}
else if(gradeAvg < 7 && gradeAvg >= 5){
    console.log("You are in summer classes :)")
}
else if(gradeAvg < 5){
    console.log("Too bad D: You reproved!")
}
console.log("");

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

console.log("○~~~•~~•~~~○ Activity 2 ○~~~•~~•~~~○");
console.log("BMI calculator");
console.log("");
let height, weight, bmi, result;

height = 1.63;
weight = 55;
bmi = weight / Math.pow(height, 2);

console.log("Your height is "+height+" m");
console.log("Your weight is "+weight+"kg");
console.log("Your BMI is "+bmi.toFixed(1));
console.log("");

if(bmi < 18.5){
    result = "underweight :/";
}
else if(bmi >= 18.5 && bmi < 25){
    result = "normal, congrats!";
}
else if(bmi >= 25 && bmi < 30){
    result = "overweight :/";
}
else if(bmi >= 30 && bmi < 40){
    result = "obese :0";
}
else if(bmi >= 40){
    result = "extremely obese D:";
}
console.log("You are "+result);
console.log("");

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

console.log("○~~~•~~•~~~○ Activity 3 ○~~~•~~•~~~○");
console.log("Payment discout calculator");
console.log("");
let paymentType, value, final, split;

paymentType = "debit";
value = 600;
split = 10;

console.log("The value being paid is R$"+value.toFixed(2));
console.log("The payment form is: "+paymentType);
console.log("");

if(paymentType === "debit"){
    final = value - ((value / 100) * 10);
}

else if(paymentType === "cash" || paymentType === "pix"){
    final = value - ((value / 100) * 15);
}

else if(paymentType === "credit"){

    if(split <= 2){
        final = value;
    }
    else if(split > 2){
        final = value + ((value / 100) * 15);
    }

    console.log("The price will be split in equal installments of R$"+(final.toFixed(2)/split));
}

console.log("The final price is R$"+final.toFixed(2));