/*
Calcular el Cubo: Crea un array de números y utiliza for of para
imprimir el cubo de cada número.
*/

let numerosquesecalcularan = [2, 3, 4, 5, 6, 7, 8, 9]

console.log("Estos son los numeros que se calcularan: "+ numerosquesecalcularan)

let numerosalcuadrado = 0

    for(let numeroscompleto of numerosquesecalcularan){

        console.log(numeroscompleto ** 2)

    }