/*
Imprimir Frutas: Crea un array con nombres de varias frutas y utiliza
un ciclo for para imprimir cada fruta en una lista numerada.
*/ 

let frutas = ["cereza", "manzana", "piña", "fresa", "mango", "frambuesa", "limon"]
console.log(frutas)


for (let i = 0; i < frutas.length; i++){  //aqui hay tres elementos (let i "se usa para comenzar desde el primer elemento
//                                          del array"), (i < frutas.lenght "este se usa para que se detenga cuando la i
//                                           supere el tamaño del array"), (i++ "este se usa para que a cada iteracion que
//                                           se haga, se le sume 1 cada vez")

//                                             esto en resumidas cuentas, el for hace que, lo que este dentro del parentesis
//                                            funcione como condiciones que se van a repetir hasta que no se cumplan

    console.log(i + 1 + frutas[i])
 
}