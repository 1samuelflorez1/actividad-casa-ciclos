let frase = prompt("Ingresa una frase:") 
console.log(frase)

let activador = 0;
let contadorvocales = 0;
let vocales = "aeiou" || "AEIOU"


while (activador < frase.length) {

    if (vocales.includes(frase[activador])) {  //esto es lo mas importante, esto se usa para recorrer la frase, mientras se recorre
                                                //el codigo va identificando si una letra es vocal o no con la funcion (includes)
                                                //esta funcion se esta aplicando al valor de vocales frente a la frase impuesta
                                                //ya el activador, nos ayuda a contar cada letra de la frase y con esa letra, el
                                                //if se acciona para corroborar que es una vocal
        contadorvocales += 1
    }
    
    activador += 1
}


console.log("La cantidad de vocales es de:", contadorvocales)
