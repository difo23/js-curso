
// Tema 2: Entorno locales y globales
// Diferencia entre var y let
// let nombre = 'Pepe'; // Error al estar en el mismo entorno
// var nombre = 'juan'; // Aqui ocurre el error.
if (true) {

    // Entorno local del if
    var nombre = ' Maria ';
    console.log(nombre); //1 Imprime maria

}
// Entorno global 
console.log(nombre);//2 Imprime Maria

if (true) {

    // Entorno local del if, let solo existe en el entorno
    // donde fue declarada
    let nombre = ' juan ';
    console.log(nombre); //1 Imprime juan
}

// Entorno global 
console.log(nombre);//2 Imprime Maria

