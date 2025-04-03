let opciones = ""

while (opciones !== "3") {
    
    opciones = prompt(
        "Menú de Opciones, selecciona colocando el numero que mas deees:\n" +
        "1. Saludar\n" +
        "2. Decir la hora\n" +
        "3. Salir\n" +
        "Elige una opción:"
    );

    
    switch (opciones) {
        case "1" :
            alert("Buenos dias/Tardes/Noches")
            break
        case "2" :
            alert("La hora actual es: " + new Date().toLocaleTimeString())
            break
        case "3":
            alert("Saliendo del programa...")
            break
        default:
            alert("Opción no válida, intenta de nuevo.")
    }

    /*
    en vez de switch se podria tambien usar if

            if (opcion === "1") {
            alert("¡Hola! ¿Cómo estás?");
        } else if (opcion === "2") {
            alert("La hora actual es: " + new Date().toLocaleTimeString());
        } else if (opcion === "3") {
            alert("Saliendo del programa...");
        } else {
            alert("Opción no válida, intenta de nuevo.");
        }

    */

} 

console.log("Programa finalizado.")