/*
Factorial: Escribe un programa que calcule el factorial de un número
ingresado por el usuario utilizando un ciclo for.
*/ 

let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
console.log(numero)


let factorial = 1;


for (let i = 1; i <= numero; i++) {  //el bucle se ejecuta mientras que i<=numero (condicion sea valida)
    factorial *= i; 
}


console.log(`El factorial de ${numero} es: ${factorial}`);
alert(`El factorial de ${numero} es: ${factorial}`);