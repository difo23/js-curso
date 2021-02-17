
/* 
    Clase #1: Uso del entorno de trabajo.
        * git init y  npm init x
        * Carpeta src/ un nombre con estandar. x
        * El nombre de los archivos index otro nombre estandar. x
        * Uso de emmet para agilizar la escritura del HTML. x
        * El Document Object Model - DOM para modificar el HTML usando el JS. x
            - Tag <script src= 'ruta o path al archivo js'/> centro del enlace HTML-JS x
        * El terminal (Command Line Interface - CLI) x
        * Comentarios de una linea y de mas de una linea.x
        
    Part 2: 
        * Uso del objeto document parte del DOM
        * Crear elemento HTML con la funcion document.createElement()
        * Modificar contenido de elemento HTML  con la propiedad o variabele element.innerText
        * Agregar un elemento al body de mi pagina web usando document.body.append(element)
        * Abrir index.html en el buscador 
           - Mostrar el documento HTML por elements en el buscador(Chrome) con la etiqueta h1 creada.
           - Mostrar los resultados de console.log() por la consola.
        * Entregar Link al repositorio curso_js en GitHub.
        * Fin de la clase. 
*/ 
// Lizandro Ramirez 22 5B

const saludar = (nombre) => {

    console.log('Creando etiqueta h1, en el HTML!');

    // Comentario de una sola linea. 
    // El codigo comentado no lo lee el interprete de JS. 

    /* 
        Comentario de varias lineas.
        Uso basico del DOCUMENTO OBJECT MODEL (DOM)
        permite a JS modificar el HTML. 
    */

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);
}

const user = "Juancho";

saludar(user)