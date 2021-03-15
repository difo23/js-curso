
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
  


# Lab #2: Conceptos basicos del DOM.


* [ ] Dentro de la carpeta `src`
* [ ] Crear archivo `index.html`
* [ ] Crear archivo `index.js`
* [ ] Enlazar el archivo `html` con `js` usando etiqueta `script`
* [ ] Modificar archivo `html` usando el objecto global `documents` en `js`
* [ ] Conceptos del `DOM` repasados
* [ ] Subir los cambios realizados al repositorio en GitHub:
  * [ ] `git status`
  * [ ] `git add .`
  * [ ] `git commit -m "Agrega lab 1 conceptos del DOM"`
* [ ] Fin del labortorio y correccion de errores.   