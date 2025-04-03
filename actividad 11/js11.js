/*
Suma de Elementos en Array: Escribe un programa que sume todos
los elementos de un array de números utilizando for of.
*/ 

let numeros = [2, 4, 6, 8, 10, 12, 14, 1, 2, 3, 4, 5];
console.log(numeros)

let suma = 0;

for (let numero of numeros) {
    suma += numero; //se necesitan dos variables, esto con el objetivo de que los numeros se sumen en algun lugar
}


console.log("La suma total es:", suma);

