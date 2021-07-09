
// Tema 2: Entornos locales y globales
// Jueves 18/03/2021
// Diferencia entre var y let
// let nombre = 'Pepe'; // Error al estar en el mismo entorno
// var nombre = 'juan'; // Aqui ocurre el error.
//if #1
if (true) {
    console.log("Dentro del bloque local if #1")
    // Entorno local del if
    var nombre = ' Maria ';
    console.log(nombre); //1 Imprime maria

}
// Entorno global 
console.log(nombre);//2 Imprime Maria
//if #2
if (true) {
    console.log("Dentro del bloque local if #2")
    // Entorno local del if, let solo existe en el entorno
    // donde fue declarada
    let nombre = ' juan ';
    console.log(nombre); //1 Imprime juan
}
console.log(nombre); //1 Imprime Maria