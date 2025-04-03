/*
Contar Números Positivos: Crea un programa que pida números al
usuario y cuente cuántos son positivos, deteniéndose cuando se ingresa un
número negativo. Use do while.
*/
let numeronegativo = false
let contador = 0

    do {

        ingresenumeros = parseInt(prompt("ingrese los numeros que desee para contar cuantos son"))
        
        if(ingresenumeros < 0) {
            numeronegativo = true
        }

        console.log("Numero colocado: "+ ingresenumeros)

        if(ingresenumeros > 0){
            contador +=1
        }

        console.log("cantidad de numeros hasta ahora: "+ contador)

        

    } while (numeronegativo != true)