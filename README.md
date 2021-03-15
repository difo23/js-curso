# Curso inicial para desarrollo de aplicaciones con JS.

Curso basico de desarrollo de aplicaciones con JS. El objetivo de este curso es preparar al estudiante para inicial su carrera como desarrollador de software con todas las herramientas esenciales para este trabajo. 

Nota: Los archivos `*.md`  estan escritos en lenguaje `MarkDown`.


## Repositorio del maestro:
El objetivo es que crees tu propio repositorio siguiendo las indicaciones del curso. Usa el repositorio del maestro como referencia, no sufras la tentacion del copy-paste que suele tentar al desarrollador jr. Recuerda siempre escribir tu mismo el codigo y los README.md, esto te ayudara a sentirte comodo con los lenguajes y el teclado de tu pc. Al igual la parte del portafolio para escribir codigo a mano te servira de complemento para aprender la sintaxis de JS en una forma instintiva. 

Manos a la obra! 

Prof. Remote Repo link : `https://github.com/difo23/js-curso-xx-5x.git`


## Temario del Curso:

* [ ] Conceptos de algoritmos con diagrama de flujo.
* [ ] Uso de VSC y herramientas de Debugging con Node y Chrome.
* [ ] Conceptos de GUI, CLI y API.
* [ ] Uso basico de la terminal con `bash`.
* [ ] Conceptos basicos del DOM. 
* [ ] Relacion entre JS, HTML y el DOM con el objeto `documents`.
* [ ] Uso basico de Git, GitHub y MarkDown.
* [ ] Conceptos basicos de variables y tipos de datos.
* [ ] Conceptos de operadores.
* [ ] Conceptos de scope o alcance global y local.
* [ ] Conceptos de bloques condicionales.
* [ ] Conceptos de bloques para ciclos.
* [ ] Conceptos de bloques para funciones.
* [ ] Estructuras de datos basicas arreglo, objeto-tabla-hash y lista enlazada.
* [ ] Concepto de bloques para clases.
* [ ] Primeros pasos con NodeJs y NPM.
* [ ] Crear aplicaciones CLI con node.
* [ ] Entrega final proyectos (repo en github) y portafolio (fisico) de conceptos basicos de JS



## Lab # 0: Instalaciones y configuracion inicial.

* [ ] Instalar `Visual Studio Code` (vsc)
* [ ] Instalar `VIM` (Editor por terminal)
* [ ] Instalar `Git` y `Git bash` se instalan juntos como uno solo.
* [ ] Instalar `Node` runtime para JS. 
* [ ] Junto con node se instala `npm` y `npx`. 
* [ ] Crear cuenta en GitHub.
* [ ] Instalar `Google Chrome`
* [ ] Configura `Git` por primera vez.
  * [ ] Abre la terminal `git bash`
  * [ ] Ejecuta el comando: `git config  --global  user.name  tu_user_github`
  * [ ] Luego ejecuta el comando (mismo correo de tu cuenta de github): `git config  --global  user.email tu_correo@gmail`
  * [ ] Siguiente comando: `git config  --global init.defaultBranch main`
  * [ ] Comprobacion de que todo fue configurado: `git config  --global  --list`
  * [ ] Ejemplo de la salida del ultimo comando:    
        ```
            user.email=diffozanzan@gmail.com
            user.name=difo23
            merge.conflictstyle=diff3
            credential.helper=cache --timeout=3600
            init.defaultbranch=main
        ```
    * [ ] Adjunta printScreen de la terminal como evidencia.
* [ ] Comprobar las instalaciones:
    * [ ] Debe salirte un numero de version para todos los comandos siguientes.
    * [ ] Ejecuta el comando: `git --version` 
    * [ ] Ejecuta el comando: `node --version`
    * [ ] Ejecuta el comando: `npm --version`
    * [ ] Adjunta a la evidencia un prinScreen de la terminal con todas las versiones visibles.   
* [ ] Entra a VSC y cambia su terminal por default a `git bash`.
* [ ] Recuerda reiniciar VSC para que tome la nueva terminal por default
* [ ] Adjunta un printscreen de VSC con la terminal abierta y los colores de `git bash`

Nota: Si usas `linux ` algunas te recomiendo usar `zsh` como interprete de terminal.


## Lab # 1: Enlazando mi proyecto con GitHub:
 
 * [ ] Crear un repositorio en GitHub - Nombre del repo = `js-curso-numero-5x`.
 * [ ] Durante la creacion del repo no agregar README.md, gitignore ni licencia
 * [ ] Muevete a tu pc y crear carpeta `js-curso`  dento de la carpeta `Documents`. 
 * [ ] Abrimos la carpeta `js-curso` en VSC y abrimos la terminal.
 * [ ] Ejecutamos el comando `clonar` repositorio de git en mi PC: `git clone url_github .` , si el punto es importante y tiene un espacio de separacion. 
 * [ ] Creamos un archivo `README.md` y la carpeta `src`.
 * [ ] Agregar cambios a la zona de preparacion con el comando: `git add .` 
 * [ ] Confirmar los cambios con comando: `git commit -am "Primer commit remoto"`
 * [ ] Subir mis cambios al remoto usando: `git push -u origin main` o `git push` para las posteriores subidas.
 * [ ] Comprobar que mi remoto tenga los ultimos cambios agregados.
 * [ ] Agrega como evidencia un printscreen de tu repo en GitHub con las ultimas actualizaciones.
  
