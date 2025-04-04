/*
Adivinar el Número: Genera un número aleatorio entre 1 y 50. Pide al
usuario que intente adivinarlo, mostrando un mensaje indicando si el intento es
alto o bajo. Utiliza un do while para repetir los intentos.
*/

let numeroaleatorio = Math.floor(Math.random() * 50) + 1;
let numerocolocado = parseInt(prompt("ingresa el numero que piensas que pienso del 1 al 50"))

console.log(numeroaleatorio)



 do{

    if (numerocolocado > numeroaleatorio) {
        numerocolocado = parseInt(prompt("El numero que colocaste el menor al que pense"))
    } else{
        numerocolocado = parseInt(prompt("El numero que colocaste es mayor al qe pense"))
    }
    


}while (numeroaleatorio !=  numerocolocado)
    
    alert("felicidades, adivinaste, VAMOOS JODEEER")