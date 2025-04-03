/*
Adivinar el Número: Genera un número aleatorio entre 1 y 50. Pide al
usuario que intente adivinarlo, mostrando un mensaje indicando si el intento es
alto o bajo. Utiliza un do while para repetir los intentos.
*/

let numeroaleatorio = Math.floor(Math.random() * 50) + 1;
let numerocolocado;

console.log(numeroaleatorio)



do {

    numerocolocado = parseInt(prompt("ingresa el numero que tengo en la mente (1 - 50)"))

    if (numerocolocado > numeroaleatorio) {
        console.log("El numero que colocaste el mayor al que pense")
    } else if (numerocolocado < numeroaleatorio){
        console.log("El numero que colocaste es menor al que pense")
    }else if(numerocolocado = numeroaleatorio){

        console.log("felicidades lo adivinaste")

    }
    


} while (numeroaleatorio !=  numerocolocado)