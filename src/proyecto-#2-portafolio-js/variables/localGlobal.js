
// Tema 2: Entorno locales y globales

// Diferencia entre var y let

// let nombre = 'Pepe';
// var nombre = 'juan';
if (true) {

    // Entorno local del if
    var nombre = ' Maria ';
    console.log(nombre); //1

}

// Entorno global 
console.log(nombre);//2

if (true) {

    // Entorno local del if
    let nombre = ' juan ';
    console.log(nombre); //1
}

// Entorno global 
console.log(nombre);//2

