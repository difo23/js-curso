

// Creamos una funcion llamada repetir

function repetir(nombre, veces) {

    /**
        * Imprimimos nombre el numero de vcs que indique veces
        * Estos son unos comentarios especiales para indicar 
        * a otros programadores que hace nuestra funcion.
        * @author Lizandro Ramirez
        * @version 0.1.0
        * @param  {string} nombre
        * @param {number}  veces
        * @return  {none}
    */

    // Creamos un ciclo for
    for (let index = 1; index <= veces; index++) {
        // la varibale index se va invrementando en 1
        // hata que index < veces deje de ser cierto.
        // mientras vamos agregando elementos p con el nombre
        // a nuestro documento html. 
        let element = document.createElement('p');
        element.innerText = nombre;
        document.body.appendChild(element);
    }

}

const nom = prompt("Escribe tu nombre");
const vcs = parseInt(prompt("Escribe las vcs que lo mostraras"));

repetir(nom, vcs);