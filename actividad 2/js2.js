
let numero = parseInt(prompt("Ingresa un número positivo:"));
console.log(numero)


let suma = 0;

while (numero > 0) {
    suma += numero % 10; // este porcentaje o modulo se usa para que nos de el ultimo numero del valor que se coloque
                        //si se coloca por ejemplo 456, nos dara el 6
                        
                        
    numero = Math.floor(numero / 10); // luego esa parte lo que hace es eliminar el 6 luego de extraerlo
                                        //esto para que cuando se repita el ciclo, no cuenta el 6, si no que siga con el 5
}

//esto se repite hasta llegar al cero que ahi se acabaria la operacion

console.log("La suma de los dígitos es:", suma);