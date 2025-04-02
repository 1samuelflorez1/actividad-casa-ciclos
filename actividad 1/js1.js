let numeroaleatorio = Math.floor(Math.random() * 10) + 1;
let numerocolocado;

console.log(numeroaleatorio)



while (numeroaleatorio !=  numerocolocado) {

    numerocolocado = parseInt(prompt("ingresa el numero que piensas que pienso del 1 al 10"))

    if (numerocolocado > numeroaleatorio) {
        console.log("El numero que colocaste el mayor al que pense")
    } else if (numerocolocado < numeroaleatorio){
        console.log("El numero que colocaste es menor al qe pense")
    }else if(numerocolocado = numeroaleatorio){

        console.log("felicidades lo adivinaste")

    }
    


}